interface User {
  avatar: string;
  username: string;
  status: "admin" | "user";
  password: string;
  email: string;
  id: string;
}

export default User;
