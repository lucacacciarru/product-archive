import wretch from "wretch";
import { Product } from "../types";

export async function createProductApi(product: Product) {
  await wretch(`${process.env.REACT_APP_API_URL}/products`).post(product);
}
