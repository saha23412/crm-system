import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import colorTask from "@/constants/color-task";
import TaskIcons from "./task-icon/task-icon";
import { useAppSelector } from "@/store/store-hook";
import { idTaskEdit } from "@/store/service/task/selector";
import TaskCardProps from "./model";

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const idTask = useAppSelector((state) => idTaskEdit(state));
  return (
    <Box
      component="article"
      sx={{
        width: "100%",
        borderRadius: 1,
        border: `${idTask === task.id ? 4 : 1}px solid ${
          colorTask[task.significance]
        }`,
        padding: 1,
        height: "20%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>
          <Typography
            component={"span"}
            sx={{ fontSize: "1rem", fontWeight: 600, marginRight: "10px" }}
          >
            {task.title}
          </Typography>
          <Typography component={"span"} sx={{ fontSize: "1rem" }}>
            {task.createdDate}
          </Typography>
        </Typography>
        <TaskIcons id={task.id} />
      </Box>

      <Typography sx={{ fontSize: "1.25rem" }}>{task.text}</Typography>
      <Typography>
        Сложность:
        <span style={{ color: `${colorTask[task.significance]}` }}>
          {task.significance}
        </span>
      </Typography>
    </Box>
  );
};

export default TaskCard;
