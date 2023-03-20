import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { getCategories } from "../../store/categoriesSlice";
import { AppDispatch, RootState } from "../../store/stoe";
import styles from "./Categories.module.css";

const Categories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((state: RootState) => state.categories);
  const categoriesData = categories.slice(0, 4);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className={styles.container}>
      {categoriesData.map((category) => (
        <div className={styles.category} key={category.id}>
          <img src={category.image} alt={category.name} />
          <Link to={`/filter-product/${category.id}`}>
            <h3>{category.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
