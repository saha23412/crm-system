import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./service/user/user-api";
import { taskApi } from "./service/task/task-api";
import userReducer from "./service/user/user-slice";
import taskReducer from "./service/task/task-slice"

const store = configureStore({
  reducer: {
    userReducer,
    taskReducer,
    [userApi.reducerPath]: userApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({}).concat([
      userApi.middleware,
      taskApi.middleware,
    ]);
  },
});

setupListeners(store.dispatch);

export default store;
