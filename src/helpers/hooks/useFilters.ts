import { useState } from "react";
import { IFilters } from "../../interfaces";

export const useFilters = (initialFilters: IFilters) => {
  const [filters, setFilter] = useState<IFilters>(initialFilters);

  const changeFilter = (key: string, value: string | number | null) => {
    setFilter((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
