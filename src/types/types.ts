export type Category = {
  id: number;
  name: string;
  image: string;
};

export type Product = {
  id: number;
  title: string;
  images: string[];
  price: string;
  description?: string;
  category: Category;
  quantity: number;
  totalPrice?: number;
};
