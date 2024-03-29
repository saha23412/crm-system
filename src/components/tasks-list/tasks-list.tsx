import Box from "@mui/material/Box";
import TaskCard from "./task-card/task-card";
import TasksListProps from "./model";
import styles from "./styles.module.css";

const TasksList: React.FC<TasksListProps> = ({ tasks, sx }) => {
  return (
    <Box
      sx={{
        ...sx,
        width: "100%",
      }}
      className={styles.scroll}
    >
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Box>
  );
};

export default TasksList;
