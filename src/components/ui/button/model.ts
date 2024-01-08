import type { ButtonProps } from "@mui/material/Button";
import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";

export interface ButtonCustomProps extends ButtonProps {
  size?: "large" | "small";
  sx?: SxProps<Theme>;
  onClick: () => void;
  children: React.ReactNode;
}
