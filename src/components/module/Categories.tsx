import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchCategories } from "../../store/categorySlice";
import { AppDispatch, RootState } from "../../store/stoe";
import styles from "./Categories.module.css";

const Categories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((state: RootState) => state.category);
  const categoriesData = categories.slice(0, 4);
  console.log(categoriesData);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className={styles.container}>
      {categoriesData.map((category) => (
        <div className={styles.category} key={category.id}>
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
