import UserProfile from "@/templates/user-profile/user-profile";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Page: React.FC = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect(`/api/auth/signin?callbackUrl=/`);
  }
  return <UserProfile />;
};

export default Page;
