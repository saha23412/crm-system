import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularIndeterminate from "../loader/circular-indeterminate/circular-indeterminate";
import Profile from "../../templates/profile/profile";
import UserVerificationProps from "./model";

const UserVerification: React.FC<UserVerificationProps> = ({
  status,
  email,
  image,
}) => {
  if (status === "loading") {
    return (
      <Box
        sx={{
          widht: "100%",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Проверка доступа</Typography>
        <CircularIndeterminate />
      </Box>
    );
  }
  if (email && status === "authenticated") {
    return <Profile email={email} image={image} />;
  }
  return <Box>Ошибка доступа</Box>;
};

export default UserVerification;
