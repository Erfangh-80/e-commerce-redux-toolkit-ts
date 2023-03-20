import { FC } from "react";
// icons
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
// styles
import styles from "./Navbar.module.css";
// components
import Category from "./Category";
import { Link } from "react-router-dom";

const Navbar: FC = (): JSX.Element => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <h1>
            Shopping<span>Hub.</span>
          </h1>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search here..." />
          <button>
            <IoSearch className={styles.icon} />
          </button>
        </div>
        <div className={styles.shop}>
          <Link to="/shopping-card">
            <FaShoppingCart className={styles.shopIcon} />
            <p>Cart</p>
            <span>0</span>
          </Link>
        </div>
      </nav>
      <Category />
    </>
  );
};

export default Navbar;
