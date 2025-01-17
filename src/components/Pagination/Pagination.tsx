import { Pagination } from "@mui/material";
import { FC } from "react";

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
const PaginationComponent: FC<PaginationComponentProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <Pagination
      onChange={onPageChange}
      count={totalPages}
      page={currentPage}
      color="primary"
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "30px",
      }}
    />
  );
};
export default PaginationComponent;
