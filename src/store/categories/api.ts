import wretch from "wretch";

export async function fetchCategoriesApi() {
  const allCategory = await wretch(
    `${process.env.REACT_APP_API_URL}/categories`
  )
    .get()
    .json();
  return allCategory;
}
