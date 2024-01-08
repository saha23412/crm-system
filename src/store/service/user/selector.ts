import type { RootState } from "@/store/model";

const selectUserModule = (state: RootState) => state.userReducer;

export const currentUser = (state: RootState) =>
  selectUserModule(state).currentUser;
export const signOut = (state: RootState) => selectUserModule(state).signOut;
