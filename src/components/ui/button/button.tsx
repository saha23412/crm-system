"use client";
import Button from "@mui/material/Button";
import { ButtonCustomProps } from "./model";

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  sx,
  size,
  onClick,
  children,
  ...rest
}) => {
  return (
    <Button size={size} onClick={onClick} {...rest} sx={sx}>
      {children}
    </Button>
  );
};

export default ButtonCustom;
