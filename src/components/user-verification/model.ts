interface UserVerificationProps {
  status: "loading" | "authenticated";
  email?: string | null;
  image?: string | null;
}

export default UserVerificationProps;
