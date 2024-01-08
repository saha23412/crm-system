import type { SelectChangeEvent, SelectProps } from "@mui/material/Select";

interface SelectCustomProps extends SelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
  label: string;
  selectsItem: { name: string; value: string }[];
}
export default SelectCustomProps;
