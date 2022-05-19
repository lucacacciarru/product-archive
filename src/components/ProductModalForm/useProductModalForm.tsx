import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getCategories } from "../../store/categories/selectors";
import { ProductWithoutId } from "../../store/products/types/createProduct";

export function useProductModalForm(
  setState: React.Dispatch<React.SetStateAction<ProductWithoutId>>
) {
  const allCategories = useSelector(getCategories);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onChangeTextArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setState((prev) => ({ ...prev, description: e.target.value }));
  }

  const onChangeNumberInput = (value: string) => {
    setState((prev) => ({ ...prev, price: parseInt(value) }));
  };

  const onChangeSelectInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState((prev) => ({ ...prev, category: e.target.value }));
  };

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
    onChange,
    onChangeTextArea,
    onChangeNumberInput,
    onChangeSelectInput,
    renderCategoriesOption,
  };
}
