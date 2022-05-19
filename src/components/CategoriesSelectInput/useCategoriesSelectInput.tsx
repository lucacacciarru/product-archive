import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getCategories } from "../../store/categories/selectors";

export function useCategoriesSelectInput() {
  const allCategories = useSelector(getCategories);

  const renderCategoriesOption = useMemo(
    () =>
      allCategories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      )),
    [allCategories]
  );

  return {
    renderCategoriesOption,
  };
}
