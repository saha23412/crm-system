import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TaskState {
  statusTask: "edit" | "add";
  idTaskEdit: string | null;
}

const initialState: TaskState = {
  statusTask: "add",
  idTaskEdit: null,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    statusTaskAdd: (state) => {
      state.statusTask = "add";
    },
    statusTaskEdit: (state) => {
      state.statusTask = "edit";
    },
    addIdTaskEdit: (state, payload: PayloadAction<string>) => {
      state.idTaskEdit = payload.payload;
    },
    resetIdTaskEdit: (state) => {
      state.idTaskEdit = null;
    },
  },
});

export const { statusTaskAdd, statusTaskEdit, addIdTaskEdit, resetIdTaskEdit } =
  taskSlice.actions;
export default taskSlice.reducer;
