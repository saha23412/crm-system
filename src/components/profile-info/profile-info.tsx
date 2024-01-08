import Box from "@mui/material/Box";
import Image from "next/image";
import DescriptionItem from "./description-item/description-item";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import ProfileInfoProps from "./model";

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  username,
  avatar,
  email,
  status,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap:"5px",
        borderRadius:"5px",
        padding:"10px",
        backgroundColor:"background.default",
        opacity:"0.935"
      }}
    >
      <Image
        style={{ borderRadius: "50%" }}
        src={avatar}
        loading="lazy"
        alt={`${avatar} ${username}`}
        width="200"
        height="200"
      />
      <Box>
      <Box sx={{ display: "flex" }}>
        <BadgeRoundedIcon sx={{ color: "#272727" }} />
        <DescriptionItem title={username} descriptionTitle={"username:"} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <AdminPanelSettingsRoundedIcon sx={{ color: "#272727" }} />
        <DescriptionItem
          title={
            status === "admin"
              ? `${status} (Особый доступ)`
              : `${status} (Ограниченный доступ)`
          }
          descriptionTitle={"status:"}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <AlternateEmailRoundedIcon sx={{ color: "#272727" }} />
        <DescriptionItem title={email} descriptionTitle={"email:"} />
      </Box>
    </Box>
      </Box>
      
  );
};

export default ProfileInfo;
