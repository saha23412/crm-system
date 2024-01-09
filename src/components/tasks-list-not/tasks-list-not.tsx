import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import img from "@/assets/task-not.svg";
import TasksListNotProps from "./model";
import Link from "next/link";
import { usePathname } from "next/navigation";
import paginationLimit from "@/constants/pagination-limit";

const TasksListNot: React.FC<TasksListNotProps> = ({ count }) => {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        gap: "15px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontWeight: 600 }}>УПС!</Typography>

      <Typography
        sx={{ maxWidth: "350px", textAlign: "center", wordWpap: "break-word" }}
      >
        Поздравляем, задачи на данной странице выполнены, вы можете
        воспользоваться навигацией (если у вас есть задачи на другой странице)
        или попробуйте создайть новые задачи
      </Typography>
      <Image src={img} alt="все" width="280" height="280" />
      {count > 0 && (
        <Box
          sx={{
            backgroundColor: "background.default",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "1.15rem",
          }}
        >
          <Link href={`${pathname}/?_page=1&_limit=${paginationLimit}`}>
            Перейти к первой странице задач
          </Link>
        </Box>
      )}
      {count > 1 && (
        <Box
          sx={{
            backgroundColor: "background.default",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "1.15rem",
          }}
        >
          <Link href={`${pathname}/?_page=${count}&_limit=${paginationLimit}`}>
            Перейти к последней странице задач
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default TasksListNot;
