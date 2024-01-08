import { signOut } from "@/store/service/user/selector";
import { useAppSelector } from "@/store/store-hook";

const SignoutCheck = ({ children }: { children: React.ReactNode }) => {
  const signOutCheck = useAppSelector((state) => signOut(state));
  return signOutCheck ? null : children;
};

export default SignoutCheck;
