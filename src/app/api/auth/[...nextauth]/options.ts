import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/global-models/user";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Логин",
          type: "email",
          placeholder: "Введите логин для входа",
        },
        password: {
          label: "Пароль:",
          type: "password",
          placeholder: "Введите пароль для входа",
        },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const users = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL_API}/users?email=${credentials.email}`
        );
        const usersJson = (await users.json()) as User[];
        const currentUser = usersJson[0];
        const userCheck =
          usersJson.length === 0 ||
          currentUser.password !== credentials.password;
        if (!users.ok || userCheck) {
          return null;
        }
        return currentUser ?? null;
      },
    }),
  ],
};
