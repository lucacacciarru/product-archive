import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useProduct } from "../../hook";
import { getFilters } from "../../store/products/selectors/getFilters";
import { Filters } from "../../store/products/types";
import { useDebouncedCallback } from "use-debounce";

export function useFilterProduct() {
  const { updateFilter } = useProduct();
  const filters = useSelector(getFilters);
  const [valueFilters, setValueFilters] = useState<Filters>(filters);

  useEffect(() => {
    setValueFilters({
      category: filters.category,
      text: filters.text,
    });
  }, [filters.category, filters.text]);

  const debouncedUpdateFilter = useDebouncedCallback(
    (filtersValue: Filters) => {
      updateFilter({ text: filtersValue.text, category: filters.category });
    },
    300
  );

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueFilters((prev) => ({
      ...prev,
      text: e.target.value,
    }));
    debouncedUpdateFilter({
      category: valueFilters.category,
      text: e.target.value,
    });
  };

  const onChangeSelectInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueFilters((prev) => ({ ...prev, category: e.target.value }));
    updateFilter({
      category: e.target.value,
      text: valueFilters.text,
    });
  };

  return {
    onChangeText,
    valueFilters,
    onChangeSelectInput,
  };
}
