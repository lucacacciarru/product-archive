export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ProductData = {
  allIds: string[];
  byId: Record<string, Product>;
};

export type Filters = {
  text: string;
  category: string;
};

export type ProductState = {
  data: ProductData;
  rollbackData?: ProductData;
  filters: Filters;
};
