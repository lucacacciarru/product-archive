import { useDispatch } from "react-redux";
import { fetchCategoriesTrigger } from "../store/categories/actions";

export function useCategories() {
  const dispatch = useDispatch();

  function fetchCategories() {
    dispatch(fetchCategoriesTrigger());
  }
  return { fetchCategories };
}
