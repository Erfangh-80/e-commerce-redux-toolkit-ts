// router
import { FC, useState } from "react";
import { Link } from "react-router-dom";
// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
// styles
import styles from "./Category.module.css";

const Category: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const showMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);    
  };

  return (
    <div className={styles.container}>
      <ul className={`${styles.listItem} ${isMenuOpen ? styles.showMenuItem : ""}`}>
        <button className={styles.btnCloseMenu} onClick={() => setIsMenuOpen(false)}>
          <IoMdCloseCircle className={styles.iconClose} />
        </button>
        <li className={styles.item}>
          <Link to="">ropa</Link>
        </li>
        <li className={styles.item}>
          <Link to="">Electronics</Link>
        </li>
        <li className={styles.item}>
          <Link to="">Furniture</Link>
        </li>
        <li className={styles.item}>
          <Link to="">Shoes</Link>
        </li>
        <li className={styles.item}>
          <Link to="">Others</Link>
        </li>
      </ul>
      <button className={styles.btnToggleMenu} onClick={showMenuHandler}>
        <GiHamburgerMenu className={styles.hamburgerMenu} />
      </button>
    </div>
  );
};

export default Category;
