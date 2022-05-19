import { nanoid } from "@reduxjs/toolkit";
import wretch from "wretch";
import { Product } from "../types";
import { ProductWithoutId } from "../types/createProduct";

export async function createProductApi(product: ProductWithoutId) {
  const productWithId: Product = { id: nanoid(), ...product };
  await wretch(`${process.env.REACT_APP_API_URL}/products`).post(productWithId);
}
