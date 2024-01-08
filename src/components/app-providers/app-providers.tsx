"use client";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { theme } from "@/constants/theme";
import AuthProvider from "./auth-provider/auth-provider";
import ClientCheck from "../client-check/client-check";
import store from "@/store/store";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientCheck>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AuthProvider>
      </Provider>
    </ClientCheck>
  );
};

export default AppProviders;
