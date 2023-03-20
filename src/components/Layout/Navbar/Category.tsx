// router
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/stoe";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
// styles
import styles from "./Category.module.css";
import { getCategories } from "../../../store/categoriesSlice";

const Category: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const categoryes = useSelector(
    (state: RootState) => state.categories.categories
  );
  const dispatch = useDispatch<AppDispatch>();

  const showMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const category = categoryes.slice(0, 5);

  return (
    <div className={styles.container}>
      <ul
        className={`${styles.listItem} ${
          isMenuOpen ? styles.showMenuItem : ""
        }`}
      >
        <button
          className={styles.btnCloseMenu}
          onClick={() => setIsMenuOpen(false)}
        >
          <IoMdCloseCircle className={styles.iconClose} />
        </button>
        {category.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link to={`/filter-product/${item.id}`}>{item.name}</Link>
          </li>
        ))}
        
      </ul>
      <button className={styles.btnToggleMenu} onClick={showMenuHandler}>
        <GiHamburgerMenu className={styles.hamburgerMenu} />
      </button>
    </div>
  );
};

export default Category;
