import { statusTask } from "@/store/service/task/selector";
import { useAppSelector } from "@/store/store-hook";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const TooltipTask = () => {
  const status = useAppSelector((state) => statusTask(state));
  if (status === "add") {
    return (
      <Typography sx={{ color: "#808080" }}>
        <Tooltip
          placement="bottom-start"
          title={`У каждой задачи, есть значок <<изменить>>, после его нажатия, можно изменить любое поле, конкретно выбранной задачи`}
        >
          <Typography
            component="span"
            sx={{
              fontSize: "1.25rem",
              cursor: "pointer",
              borderBottom: "2px dashed #808080",
              paddingBottom: "2px",
            }}
          >
            Подсказка
          </Typography>
        </Tooltip>
      </Typography>
    );
  }
  return null;
};

export default TooltipTask;
