import { useEffect } from "react";
// params
import { useParams } from "react-router-dom";
// components
import ProductList from "../components/template/ProductList";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/categorySlice";
import { AppDispatch, RootState } from "../store/stoe";
import ShowRoute from "../components/module/ShowRoute";
import { getCategories } from "../store/categoriesSlice";

const FilterProducts = () => {
  const {id} = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    dispatch(getCategory(id));
  }, [id]);


  return (
    <>
      <ShowRoute text="categories" name={categories[0]?.category.name} />
      <ProductList products={categories} text={""} />
    </>
  );
};

export default FilterProducts;
