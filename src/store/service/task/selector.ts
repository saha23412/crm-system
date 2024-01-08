import type { RootState } from "@/store/model";

const selectTaskModule = (state: RootState) => state.taskReducer;

export const statusTask = (state: RootState) =>
  selectTaskModule(state).statusTask;
export const idTaskEdit = (state: RootState) =>
  selectTaskModule(state).idTaskEdit;
