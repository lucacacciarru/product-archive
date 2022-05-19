import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useProduct } from "../../hook/useProduct";
import { getProductById } from "../../store/products/selectors";
import { ProductWithoutId } from "../../store/products/types/createProduct";
import { compareAndGetDifferentValue } from "../../utils";

export const useEditProductModal = (id: string, onClose: () => void) => {
  const { updateProduct } = useProduct();
  const selectedProduct = useSelector(getProductById(id));
  const { id: selectedId, ...productRest } = selectedProduct;

  const [productInfo, setProductInfo] = useState<ProductWithoutId>(productRest);

  const getChangesProduct = useMemo(
    () => compareAndGetDifferentValue(productRest, productInfo),
    [productInfo, productRest]
  );

  const isDisableConfirmButton = useMemo(
    () => (!Object.keys(getChangesProduct).length ? true : false),
    [getChangesProduct]
  );

  const onClick = () => {
    updateProduct(id, getChangesProduct);
    onClose();
  };

  return {
    productInfo,
    onClick,
    isDisableConfirmButton,
    setProductInfo,
  };
};
