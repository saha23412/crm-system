import User from "@/global-models/user";
import getFromLocalStorage from "@/utils/get-from-localstorate";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserType = Omit<User, "password">;
interface UserState {
  currentUser: UserType | null;
  signOut: boolean;
}

const initialState: UserState = {
  currentUser: getFromLocalStorage<UserType>("user"),
  signOut: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCurrentUser: (state, action: PayloadAction<UserType>) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.currentUser = action.payload;
    },
    reset: (state) => {
      state.signOut = true;
      localStorage.removeItem("user");
      state.currentUser = null;
    },
  },
});

export const { reset, addCurrentUser } =
  userSlice.actions;
export default userSlice.reducer;
