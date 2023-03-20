import { useEffect } from "react";
// components
import Banner from "../components/module/Banner";
import Categories from "../components/module/Categories";
import ProductList from "../components/template/ProductList";
// redux toolkit
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/stoe";
import { getProducts } from "../store/ProductsSlice";

const HomePage = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!products.length) dispatch(getProducts());
  }, []);

  const electronics = products.filter(
    (product) => product.category.name === "Electronics"
  );

  const productData = products.slice(0, 20);
  const electronicData = electronics.slice(0, 10);

  return (
    <>
      <Banner />
      <Categories />
      <ProductList products={productData} text="Our products" />
      <ProductList products={electronicData} text="Electronics" />
    </>
  );
};

export default HomePage;
