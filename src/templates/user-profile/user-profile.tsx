"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UserVerification from "@/components/user-verification/user-verification";
import imageBackground from "@/assets/background.jpeg";
import ProfileInfo from "@/components/profile-info/profile-info";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SignoutCheck from "@/components/signout-check/signout-check";
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/store/store-hook";
import { redirect } from "next/navigation";
import { currentUser } from "@/store/service/user/selector";
import Scope from "@/components/scope/scope";

const UserProfile: React.FC = () => {
  const user = useAppSelector((state) => currentUser(state));
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(`/api/auth/signin?callbackUrl=/`);
    },
  });
  const email = session?.user?.email;
  const image = session?.user?.image;
  return (
    <SignoutCheck>
      <Box
        sx={{
          widht: "100%",
          backgroundImage: `url(${imageBackground.src})`,
          height: "100%",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
        component="section"
      >
        {user ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alighItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 500,
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Добро пожаловать в SCRM System
              <QueryStatsRoundedIcon sx={{ fontSize: "1.8rem" }} />
            </Typography>
            <ProfileInfo
              username={user.username}
              avatar={user.avatar}
              email={user.email}
              status={user.status}
            />
            <Scope status={user.status} />
          </Box>
        ) : (
          <UserVerification status={status} email={email} image={image} />
        )}
      </Box>
    </SignoutCheck>
  );
};

export default UserProfile;
