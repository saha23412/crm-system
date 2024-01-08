import Box from "@mui/material/Box";
import colorTask from "@/constants/color-task";
import ButtonCustom from "@/components/ui/button/button";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { idTaskEdit, statusTask } from "@/store/service/task/selector";
import { useAppDispatch, useAppSelector } from "@/store/store-hook";
import {
  addIdTaskEdit,
  resetIdTaskEdit,
  statusTaskEdit,
} from "@/store/service/task/task-slice";
import { useDeleteTaskMutation } from "@/store/service/task/task-api";

const TaskIcons = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => statusTask(state));
  const taskEdit = useAppSelector((state) => idTaskEdit(state));
  const [deleteTask] = useDeleteTaskMutation();
  const statusEditById = (idTask: string) => {
    if (status !== "edit") {
      dispatch(statusTaskEdit());
    }
    dispatch(addIdTaskEdit(idTask));
  };
  const deleteTaskById = (idTask: string) => {
    if (taskEdit === idTask) {
      dispatch(resetIdTaskEdit());
    }
    deleteTask({ id: idTask });
  };
  return (
    <Box>
      <ButtonCustom
        onClick={() => statusEditById(id)}
        sx={{ padding: 0, minWidth: "32px", marginRight: "5px" }}
      >
        <EditRoundedIcon sx={{ color: `${colorTask.medium}` }} />
      </ButtonCustom>
      <ButtonCustom
        onClick={() => deleteTaskById(id)}
        sx={{ padding: 0, minWidth: "32px" }}
      >
        <DeleteRoundedIcon sx={{ color: `${colorTask.hard}` }} />
      </ButtonCustom>
    </Box>
  );
};

export default TaskIcons;
