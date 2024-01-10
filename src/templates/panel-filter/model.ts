import { SignificanceTasks } from "@/global-models/significance";
import type { SelectChangeEvent } from "@mui/material";
import type { ChangeEvent } from "react";

interface PanelFilterProps {
  filterParams: {
    significance: SignificanceTasks | "";
    title: string;
  };
  onChange: (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent<unknown>
  ) => void;
  resetFilter:()=>void
}

export default PanelFilterProps;
