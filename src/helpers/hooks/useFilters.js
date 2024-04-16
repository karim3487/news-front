import { useState } from "react";

export const useFilters = (initialFilters) => {
  const [filters, setFilter] = useState(initialFilters);

  const changeFilter = (key, value) => {
    setFilter((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
