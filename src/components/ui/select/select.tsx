import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SelectCustomProps from "./model";

const SelectCustom: React.FC<SelectCustomProps> = ({
  value,
  onChange,
  label,
  name,
  children,
}) => {
  return (
    <FormControl
      variant="filled"
      sx={{
        minWidth: 200,
        backgroundColor: "primary.light",
        height: "100%",
        borderRadius: 1,
      }}
    >
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        name={name}
        onChange={onChange}
        label={label}
        sx={{ height: "100%" }}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default SelectCustom;
