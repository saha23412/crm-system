import type { SelectChangeEvent, SelectProps } from "@mui/material/Select";

interface SelectCustomProps extends SelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
  children?: React.ReactNode;
  label: string;
}
export default SelectCustomProps;
