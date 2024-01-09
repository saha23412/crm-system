"use client";
import Box from "@mui/material/Box";
import TasksList from "@/components/tasks-list/tasks-list";
import Pagination from "@mui/material/Pagination";
import { useGetTasksQuery } from "@/store/service/task/task-api";
import PaginationItem from "@mui/material/PaginationItem";
import paginationLimit from "@/constants/pagination-limit";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import SkeletonTasks from "@/components/loader/skeleton-tasks/skeleton-tasks";
import TasksListNot from "@/components/tasks-list-not/tasks-list-not";
import PanelFilter from "../panel-filter/panel-filter";
import { useRouter } from "next/navigation";
import ButtonCustom from "@/components/ui/button/button";

const TaskListTemplate = () => {
  const searchParams = useSearchParams();
  let currentPage = Number(searchParams.get("_page")) || 1;
  const { isLoading, data, isFetching, isError } = useGetTasksQuery({
    page: currentPage,
    limit: paginationLimit,
    significance: "easy",
  });

  if (isLoading || isFetching) {
    return <SkeletonTasks />;
  }
  if (isError) {
    return <>Ошибка</>;
  }
  if (data && data.response && data.response.length > 0) {
    const count = Math.ceil(data.total / paginationLimit);
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <PanelFilter />
        <TasksList
          tasks={data.response}
          sx={{
            height: "90%",
          }}
        />
        <Pagination
          count={count}
          page={currentPage}
          siblingCount={0}
          sx={{
            height: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          boundaryCount={1}
          renderItem={(item) => {
            return (
              <PaginationItem
                component={Link}
                sx={{
                  backgroundColor: "background.default",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    transition: "ease .5s",
                  },
                }}
                href={`?_page=${item.page}&_limit=${paginationLimit}`}
                {...item}
              />
            );
          }}
        />
      </Box>
    );
  }
  if (data && data.response && data.response.length === 0) {
    const count = Math.ceil(data.total / paginationLimit);
    return <TasksListNot count={count} />;
  }
};

export default TaskListTemplate;
