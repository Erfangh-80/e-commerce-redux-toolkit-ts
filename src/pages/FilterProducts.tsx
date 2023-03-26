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
import Spinner from "../components/module/Spinner";

const FilterProducts = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading } = useSelector(
    (state: RootState) => state.category
  );

  useEffect(() => {
    dispatch(getCategory(id));
  }, [id]);
  
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ShowRoute text="categories" name={categories[0]?.category.name} />
          <ProductList products={categories} text={""} />
        </>
      )}
    </>
  );
};

export default FilterProducts;
