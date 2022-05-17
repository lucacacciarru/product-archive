import wretch from "wretch";
import { Product } from "../types";
import { UpdateProductPayload } from "../types/updateProduct";

export async function updateProductApi({
  id,
  properties,
}: UpdateProductPayload) {
  const response: Product = await wretch(
    `${process.env.REACT_APP_API_URL}/products/${id}`
  )
    .get()
    .json();
  const updateResponse = {
    ...response,
    ...properties,
  };
  await wretch(`${process.env.REACT_APP_API_URL}/products/${id}`).put(
    updateResponse
  );
}
