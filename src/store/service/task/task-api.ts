import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task, TaskEdit } from "@/global-models/task";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL_API}`,
  }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query<
      { response: Task[]; total: number },
      { page: number; limit: number }
    >({
      query: ({ page = 1, limit = 1 }) => `tasks?_page=${page}&_limit=${limit}`,
      transformResponse: (response: Task[], meta) => {
        const metaTotalCount = Number(
          meta?.response?.headers.get("X-Total-Count")
        );
        const total = metaTotalCount ? metaTotalCount : 1;
        return {
          response,
          total,
        };
      },
      providesTags: ["Task"],
    }),
    addTask: builder.mutation<boolean, Task>({
      query: (body) => ({
        url: "tasks",
        method: "POST",
        body,
      }),
      transformResponse: (_, meta) => {
        if (meta?.response?.ok) {
          return true;
        }
        return false;
      },
      invalidatesTags: ["Task"],
    }),
    editTask: builder.mutation<
      boolean,
      { id: string; body: Partial<TaskEdit> }
    >({
      query: ({ id, body }) => ({
        url: `tasks/${id}`,
        method: "PATCH",
        body,
      }),
      transformResponse: (_, meta) => {
        if (meta?.response?.ok) {
          return true;
        }
        return false;
      },
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation<undefined, { id: string }>({
      query: ({ id }) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = taskApi;