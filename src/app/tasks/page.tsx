import Box from "@mui/material/Box";
import PanelTasks from "@/templates/panel-tasks/panel-tasks";
import TaskListTemplate from "@/templates/task-list-template/task-list-template";
import PanelFilter from "@/templates/panel-filter/panel-filter";

const Tasks = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "100%",
        width: "100%",
        display: "grid",
        gap:"15px",
        gridTemplateColumns: "1fr 2fr 1fr",
        padding: "15px 20px 20px",
      }}
    >
      <PanelTasks />
      <TaskListTemplate/>
      <PanelFilter/>
    </Box>
  );
};

export default Tasks;
