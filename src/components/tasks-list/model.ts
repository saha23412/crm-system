import Task from "@/global-models/task";
import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";

interface TasksListProps {
  tasks: Task[];
  sx?: SxProps<Theme>;
}

export default TasksListProps;
