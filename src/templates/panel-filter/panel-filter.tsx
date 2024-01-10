"use client";
import { selectItemsGrade, selectItemsTypeTask } from "@/constants/select";
import { MenuItem } from "@mui/material";
import { useSearchParams } from "next/navigation";
import ButtonPanel from "@/components/buttons-components/button-panel/button-panel";
import SelectCustom from "@/components/ui/select/select";
import Box from "@mui/material/Box";
import Link from "next/link";
import PanelFilterProps from "./model";
import paginationLimit from "@/constants/pagination-limit";
import { SignificanceTasks } from "@/global-models/significance";

const PanelFilter: React.FC<PanelFilterProps> = ({
  filterParams,
  onChange,
  resetFilter,
}) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("_page")) || 1;
  const significance =
    (searchParams.get("significance") as SignificanceTasks) || "";
  const title = searchParams.get("title") || "";

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "25%",
        borderRadius: "10px",
        backgroundColor: "background.default",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "40%",
          gap: "10px",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <SelectCustom
          label="Оценка задачи"
          value={filterParams.significance}
          onChange={onChange}
          name="significance"
        >
          {selectItemsGrade.map((item) => (
            <MenuItem value={item.value} key={item.name}>
              <Link
                style={{
                  padding: "5px",
                  color: "black",
                  width: "100%",
                  height: "100%",
                  display: "inline-block",
                }}
                href={`?significance=${item.value}&title=${title}&_page=${currentPage}&_limit=${paginationLimit}`}
              >
                {item.name}
              </Link>
            </MenuItem>
          ))}
        </SelectCustom>
        <SelectCustom
          label="Тип задачи"
          value={filterParams.title}
          onChange={onChange}
          name="title"
        >
          {selectItemsTypeTask.map((item) => (
            <MenuItem value={item.value} key={item.name}>
              <Link
                style={{
                  padding: "5px",
                  color: "black",
                  width: "100%",
                  height: "100%",
                  display: "inline-block",
                }}
                href={`?significance=${significance}&title=${item.value}&_page=${currentPage}&_limit=${paginationLimit}`}
              >
                {item.name}
              </Link>
            </MenuItem>
          ))}
        </SelectCustom>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "20%",
          height: "40%",
          flexDirection: "column",
        }}
      >
        <ButtonPanel onClick={resetFilter}>Сбросить</ButtonPanel>
      </Box>
    </Box>
  );
};

export default PanelFilter;
