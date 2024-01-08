import TextField from "@mui/material/TextField";
import InputCustomProps from "./model";

const InputCustom: React.FC<InputCustomProps> = ({
  value,
  onChange,
  label,
  name
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      variant="filled"
      name={name}
      label={label}
      sx={{ backgroundColor: "primary.light", borderRadius: 1, fontSize: "1.5rem" }}
    />
  );
};

export default InputCustom;
