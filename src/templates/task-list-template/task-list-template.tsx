"use client";
import Box from "@mui/material/Box";
import TasksList from "@/components/tasks-list/tasks-list";
import paginationLimit from "@/constants/pagination-limit";
import SkeletonTasks from "@/components/loader/skeleton-tasks/skeleton-tasks";
import TasksListNot from "@/components/tasks-list-not/tasks-list-not";
import PanelFilter from "../panel-filter/panel-filter";
import PaginationTask from "@/components/pagination-task/pagination-task";
import { useGetTasksQuery } from "@/store/service/task/task-api";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { type ChangeEvent, useState } from "react";
import type { SelectChangeEvent } from "@mui/material";
import { SignificanceTasks } from "@/global-models/significance";

const TaskListTemplate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("_page")) || 1;
  const significance =
    (searchParams.get("significance") as SignificanceTasks) || "";
  const title = searchParams.get("title") || "";
  const [filter, setFilter] = useState<{
    significance: SignificanceTasks | "";
    title: string;
  }>({ significance: significance || "", title: title || "" });
  const onChange = (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent<unknown>
  ) => {
    const { name, value } = event.target;
    setFilter((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const resetFilter = () => {
    setFilter({ significance: "", title: "" });
    router.replace(pathname, undefined);
  };

  const { isLoading, data, isFetching, isError } = useGetTasksQuery({
    page: currentPage,
    limit: paginationLimit,
    significance: significance,
    title: title,
  });
  const dataCheck = data && data.response;
  if (isLoading || isFetching) {
    return <SkeletonTasks />;
  }
  if (isError) {
    return <>Ошибка</>;
  }
  if (dataCheck && data.response.length > 0) {
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
        <PanelFilter
          resetFilter={resetFilter}
          onChange={onChange}
          filterParams={filter}
        />
        <TasksList
          tasks={data.response}
          sx={{
            height: "90%",
          }}
        />
        <PaginationTask count={count} currentPage={currentPage} />
      </Box>
    );
  }
  if (dataCheck && data.response.length === 0) {
    const count = Math.ceil(data.total / paginationLimit);
    return <TasksListNot count={count} />;
  }
};

export default TaskListTemplate;
