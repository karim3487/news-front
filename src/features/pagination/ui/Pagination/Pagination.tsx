import React from "react";
import { IPaginationProps } from "@/features/pagination/model/types.ts";
import PaginationButtons from "@/features/pagination/ui/PaginationButtons/PaginationButtons.tsx";
interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

const Pagination = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
};

export default Pagination;
