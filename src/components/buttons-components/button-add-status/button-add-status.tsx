import { useAppDispatch, useAppSelector } from "@/store/store-hook";
import { statusTask } from "@/store/service/task/selector";
import {
  resetIdTaskEdit,
  statusTaskAdd,
} from "@/store/service/task/task-slice";
import ButtonPanel from "../button-panel/button-panel";

const ButtonAddStatus: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => statusTask(state));
  const statusAdd = () => {
    dispatch(statusTaskAdd());
    dispatch(resetIdTaskEdit());
  };

  if (status === "edit") {
    return <ButtonPanel onClick={statusAdd}>Перейти к созданию</ButtonPanel>;
  }
  return null;
};

export default ButtonAddStatus;
