"use client";
import Box from "@mui/material/Box";
import TasksList from "@/components/tasks-list/tasks-list";
import Pagination from "@mui/material/Pagination";
import { useGetTasksQuery } from "@/store/service/task/task-api";
import { useEffect } from "react";
import PaginationItem from "@mui/material/PaginationItem";
import paginationLimit from "@/constants/pagination-limit";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SkeletonTasks from "@/components/loader/skeleton-tasks/skeleton-tasks";

const TaskListTemplate = () => {
  const searchParams = useSearchParams();
  let currentPage = Number(searchParams.get("_page")) || 1;
  const { isLoading, data, isFetching, isError } = useGetTasksQuery({
    page: currentPage,
    limit: paginationLimit,
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
        <TasksList
          tasks={data.response}
          sx={{
            gap: "10px",
            height: "90%",
            display: "flex",
            flexDirection: "column",
          }}
        />
        <Pagination
          count={count}
          page={currentPage}
          siblingCount={0}
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
    return <>Все</>;
  }
};

export default TaskListTemplate;
