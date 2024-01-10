"use client";
import Header from "@/components/header/header";
import AuthorizedUserHeader from "../../components/authorized-user/authorized-user";
import { useAppSelector } from "./../../store/store-hook";
import { currentUser } from "@/store/service/user/selector";

const HeaderTemplate = () => {
  const user = useAppSelector((state) => currentUser(state));
  return (
    <Header
      sx={{
        height: "10vh",
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      {user ? (
        <AuthorizedUserHeader avatar={user.avatar} username={user.username} />
      ) : null}
    </Header>
  );
};

export default HeaderTemplate;
