import paginationLimit from "@/constants/pagination-limit";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SignificanceTasks } from "@/global-models/significance";
import PaginationTaskProps from "./model";

const PaginationTask: React.FC<PaginationTaskProps> = ({
  count,
  currentPage,
}) => {
  const searchParams = useSearchParams();
  const significance =
    (searchParams.get("significance") as SignificanceTasks) || "";
  const title = searchParams.get("title") || "";

  return (
    <Pagination
      count={count}
      page={currentPage}
      siblingCount={0}
      sx={{
        height: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
      boundaryCount={1}
      renderItem={(item) => {
        return (
          <PaginationItem
            component={Link}
            sx={{
              backgroundColor: "background.default",
              "&:hover": {
                backgroundColor: "primary.main",
                transition: "ease .5s",
              },
            }}
            href={`?significance=${significance}&title=${title}&_page=${item.page}&_limit=${paginationLimit}`}
            {...item}
          />
        );
      }}
    />
  );
};

export default PaginationTask;
