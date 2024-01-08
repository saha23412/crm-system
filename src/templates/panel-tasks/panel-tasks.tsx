import Box from "@mui/material/Box";
import FunctionalTasks from "./functional-tasks/functional-tasks";

const PanelTasks = () => {
  return (
    <Box
      sx={{
        widht: "100%",
        borderRadius: "10px",
        backgroundColor: "background.default",
        padding: "10px",
      }}
    >
      <FunctionalTasks />
    </Box>
  );
};

export default PanelTasks;
