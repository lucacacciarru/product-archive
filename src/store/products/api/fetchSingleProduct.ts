import wretch from "wretch";

export async function fetchSingleProductApi(id: string) {
  const singleProducts = await wretch(
    `${process.env.REACT_APP_API_URL}/products/${id}`
  )
    .get()
    .json();
  return singleProducts;
}
