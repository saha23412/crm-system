import Box from "@mui/material/Box";
import TasksListProps from "./model";
import TaskCard from "./task-card/task-card";

const TasksList: React.FC<TasksListProps> = ({ tasks, sx }) => {
  return (
    <Box
      sx={{
        ...sx,
        width: "100%",
      }}
    >
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Box>
  );
};

export default TasksList;
