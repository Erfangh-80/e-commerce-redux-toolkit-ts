import { Product } from "../types/types";

const formatPrice = (price: number | undefined) => {
  if (price) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price / 100);
  }
};

const isInCart = (products: Product[], id: number) => {
  const product = !!products.find((product: Product) => product.id === id);
  return product;
};

const checkProduct = (products: Product[], id: number) => {
  const index = products.findIndex((product: Product) => product.id === id);
  if (index === -1) {
    return false;
  } else {
    return products[index].quantity;
  }
};

export { formatPrice, checkProduct, isInCart };
