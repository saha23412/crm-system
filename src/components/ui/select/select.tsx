import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SelectCustomProps from "./model";

const SelectCustom: React.FC<SelectCustomProps> = ({
  value,
  onChange,
  label,
  selectsItem,
  name
}) => {
  return (
    <>
      <FormControl variant="filled" sx={{ minWidth: 120, backgroundColor: "primary.light", borderRadius: 1 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          name={name}
          onChange={onChange}
          label={label}
        >
          {selectsItem.map((item) => (
            <MenuItem value={item.value} key={item.name} sx={{ padding: 1 }}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectCustom;
