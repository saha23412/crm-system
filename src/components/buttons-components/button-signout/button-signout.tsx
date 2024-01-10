import Typography from "@mui/material/Typography";
import RouterPathname from "@/global-models/router-pathname";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import ButtonCustom from "@/components/ui/button/button";
import { signOut } from "next-auth/react";
import { reset } from "@/store/service/user/user-slice";
import { useAppDispatch } from "@/store/store-hook";

const ButtonSignout = () => {
  const dispatch = useAppDispatch();
  const userSignOUT = async () => {
    await signOut({
      callbackUrl: `http://localhost:3000${RouterPathname.HOME}`,
    }).finally(() => {
      dispatch(reset());
    });
  };

  return (
    <ButtonCustom onClick={userSignOUT} variant="contained">
      <Typography
        sx={{
          fontSize: "1.25rem",
          color: "white",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        Выйти
        <ExitToAppRoundedIcon />
      </Typography>
    </ButtonCustom>
  );
};

export default ButtonSignout;
