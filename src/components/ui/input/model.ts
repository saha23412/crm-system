import type { InputProps } from "@mui/material";
import { ChangeEvent } from "react";

interface InputCustomProps extends InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default InputCustomProps;
