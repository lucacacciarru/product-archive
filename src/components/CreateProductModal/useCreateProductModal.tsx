import { useMemo, useState } from "react";
import { useProduct } from "../../hook";
import { ProductWithoutId } from "../../store/products/types/createProduct";

export function useCreateProductModal(onClose: () => void) {
  const { createProduct } = useProduct();

  const [productInfo, setProductInfo] = useState<ProductWithoutId>({
    category: "",
    description: "",
    image: "",
    price: 0,
    title: "",
  });

  function resetProductInfo() {
    setProductInfo({
      category: "",
      description: "",
      image: "",
      price: 0,
      title: "",
    });
  }

  const requireFiled = useMemo(
    () => [productInfo.title, productInfo.description],
    [productInfo.description, productInfo.title]
  );

  const isDisableConfirmButton = useMemo(
    () => (!requireFiled.every((info) => info.length) ? true : false),
    [requireFiled]
  );

  function onClick() {
    createProduct(productInfo);
    onClose();
    resetProductInfo();
  }

  return {
    productInfo,
    setProductInfo,
    isDisableConfirmButton,
    onClick,
  };
}
