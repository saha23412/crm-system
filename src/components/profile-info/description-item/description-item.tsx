import Typography from "@mui/material/Typography";
import DescriptionItemProps from "./model";

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  title,
  descriptionTitle,
}) => {
  return (
    <Typography sx={{ fontSize: "1.25rem", color: "white" }}>
      <Typography
        component={"span"}
        sx={{
          fontWeight: 600,
          marginRight: "5px",
          fontSize: "1.30rem",
          color: "white"
        }}>
        {descriptionTitle}
      </Typography>
      {title}
    </Typography>
  );
};

export default DescriptionItem;
