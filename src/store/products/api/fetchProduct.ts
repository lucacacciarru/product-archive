import wretch from "wretch";

export async function fetchProductApi() {
  const allProducts = await wretch(`${process.env.REACT_APP_API_URL}/products`)
    .get()
    .json();
  return allProducts;
}
