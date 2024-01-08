import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import User from "@/global-models/user";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL_API}`,
  }),
  endpoints: (builder) => ({
    getUserByEmail: builder.query<User[], { email: string }>({
      query: ({ email }) => `users?email=${email}`,
    }),
  }),
});

export const { useGetUserByEmailQuery } = userApi;
