import wretch from "wretch";
import { Filters } from "../types";
import { Product } from "../types";

function filterByCategory(allProducts: Product[], categoryFilter?: string) {
  if (!categoryFilter) {
    return allProducts;
  }
  return allProducts.filter((product) => product.category === categoryFilter);
}

function filterByNameAndCategory(
  allProducts: Product[],
  filters?: Partial<Filters>
) {
  const productFilteredByCategory = filterByCategory(
    allProducts,
    filters?.category
  );
  if (!filters?.text) {
    return productFilteredByCategory;
  }

  return allProducts.filter((product) =>
    product.title.toLowerCase().includes((filters?.text || "").toLowerCase())
  );
}

export async function fetchProductApi(params?: Partial<Filters>) {
  const allProducts: Product[] = await wretch(
    `${process.env.REACT_APP_API_URL}/products`
  )
    .get()
    .json();
  const filteredProducts = filterByNameAndCategory(allProducts, params);
  return filteredProducts;
}
