import Box from "@mui/material/Box";
import Navigation from "@/components/nav/nav";
import UserInfoHeader from "@/components/user-info-header/user-info-header";
import { authorizedNavigation } from "@/constants/navigation";
import AuthorizedUserHeaderProps from "./model";

const AuthorizedUserHeader: React.FC<AuthorizedUserHeaderProps> = ({
  avatar,
  username,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Navigation navElements={authorizedNavigation} />
      <UserInfoHeader avatar={avatar} username={username} />
    </Box>
  );
};

export default AuthorizedUserHeader;
