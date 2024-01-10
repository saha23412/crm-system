"use client";
import Box from "@mui/material/Box";
import InputCustom from "@/components/ui/input/input";
import ButtonPanel from "@/components/buttons-components/button-panel/button-panel";
import SelectCustom from "@/components/ui/select/select";
import TaskShackbar from "@/components/task-shackbar/task-shackbar";
import createFormatDate from "@/utils/create-date";
import ButtonAddStatus from "@/components/buttons-components/button-add-status/button-add-status";
import { selectItemsTypeTask, selectItemsGrade } from "@/constants/select";
import { ChangeEvent, useState } from "react";
import { MenuItem, SelectChangeEvent, Typography } from "@mui/material";
import {
  useAddTaskMutation,
  useEditTaskMutation,
} from "@/store/service/task/task-api";
import { useAppDispatch, useAppSelector } from "@/store/store-hook";
import { currentUser } from "@/store/service/user/selector";
import { idTaskEdit, statusTask } from "@/store/service/task/selector";
import { TaskEdit } from "@/global-models/task";
import { checkAllProperty, getFiledValues } from "@/utils/check-property";
import TooltipTask from "@/components/tooltip-task/tooltip-task";
import { resetIdTaskEdit } from "@/store/service/task/task-slice";

const FunctionalTasks = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => currentUser(state)?.id);
  const idTask = useAppSelector((state) => idTaskEdit(state));
  const status = useAppSelector((state) => statusTask(state));
  const [createTask, setCreateTask] = useState<TaskEdit>({
    text: "",
    title: "",
    significance: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [addTask] = useAddTaskMutation();
  const [editTask] = useEditTaskMutation();
  const resetTaskEdit = () => {
    dispatch(resetIdTaskEdit());
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const onChange = (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent<unknown>
  ) => {
    const { name, value } = event.target;
    setCreateTask((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = async () => {
    if (userId) {
      const { text, title, significance } = createTask;
      if (status === "add" && checkAllProperty(createTask) && significance) {
        const responseOk = await addTask({
          id: `${Date.now()}`,
          userId,
          text,
          title,
          significance,
          createdDate: createFormatDate(),
        });
        "data" in responseOk && responseOk.data
          ? setMessage("Задача была добавлена")
          : setMessage("Задача не была добавлена");
        !open && setOpen(true);
      }
      const objectField = getFiledValues(createTask) as Partial<TaskEdit>;
      if (status === "edit" && Object.keys(objectField).length) {
        if (idTask) {
          const responseOk = await editTask({ id: idTask, body: objectField });
          "data" in responseOk && responseOk.data
            ? setMessage("Задача была изменена")
            : setMessage("Задача не была изменена");
          !open && setOpen(true);
        } else {
          !open && setOpen(true);
          setMessage("Попробуйте выбрать задачу для изменения");
        }
        resetTaskEdit();
      }
      setCreateTask({ text: "", title: "", significance: "" });
    }
  };

  return (
    <>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          gap: "15px",
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "1.25rem", textAlign: "center" }}
        >
          {status === "edit" ? "Изменить задачу" : "Добавить задачу"}
        </Typography>
        <InputCustom
          value={createTask.text}
          onChange={onChange}
          name="text"
          label="Описание задачи"
        />
        <SelectCustom
          label="Оценка задачи"
          value={createTask.significance}
          onChange={onChange}
          name="significance"
        >
          {selectItemsGrade.map((item) => (
            <MenuItem value={item.value} key={item.name} sx={{ padding: 1 }}>
              {item.name}
            </MenuItem>
          ))}
        </SelectCustom>
        <SelectCustom
          label="Тип задачи"
          value={createTask.title}
          onChange={onChange}
          name="title"
        >
          {selectItemsTypeTask.map((item) => (
            <MenuItem value={item.value} key={item.name} sx={{ padding: 1 }}>
              {item.name}
            </MenuItem>
          ))}
        </SelectCustom>
        <ButtonPanel onClick={handleClick}>
          {status === "add" ? "Добавить задачу" : "Изменить задачу"}
        </ButtonPanel>
        <ButtonAddStatus />
        <TooltipTask />
      </Box>
      <TaskShackbar open={open} handleClose={handleClose} message={message} />
    </>
  );
};

export default FunctionalTasks;
