import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import RouterPathname from "@/global-models/router-pathname";
import ButtonSignout from "./../buttons-components/button-signout/button-signout";
import UserInfoHeaderProps from "./model";

const UserInfoHeader: React.FC<UserInfoHeaderProps> = ({
  avatar,
  username,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Typography sx={{ fontSize: "1.25rem" }}>{username}</Typography>
      <Link href={RouterPathname.HOME}>
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          {avatar.length === 0 ? (
            <AccountCircle />
          ) : (
            <Avatar alt={`${username} avatar`} src={avatar} />
          )}
        </IconButton>
      </Link>
      <ButtonSignout />
    </Box>
  );
};

export default UserInfoHeader;
