"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularIndeterminate from "../../components/loader/circular-indeterminate/circular-indeterminate";
import { useEffect } from "react";
import { useGetUserByEmailQuery } from "@/store/service/user/user-api";
import { useAppDispatch } from "@/store/store-hook";
import { addCurrentUser } from "@/store/service/user/user-slice";
import ProfileProps from "./model";

const Profile: React.FC<ProfileProps> = ({ email, image }) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching, isError } = useGetUserByEmailQuery({
    email,
  });
  useEffect(() => {
    if (data) {
      const { email, username, id, status } = data[0];
      const avatar = data[0].avatar || image || "";
      dispatch(addCurrentUser({ email, username, id, avatar, status }));
    }
  }, [data, dispatch, image, isError]);

  if (isLoading || isFetching) {
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
        <Typography>Загрузка данных</Typography>
        <CircularIndeterminate />
      </Box>
    );
  }
  if (isError) {
    return <div>Ошибка данных</div>;
  }
  return null;
};

export default Profile;
