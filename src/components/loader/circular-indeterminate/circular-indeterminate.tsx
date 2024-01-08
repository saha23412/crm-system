import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

const CircularIndeterminate: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default CircularIndeterminate;
