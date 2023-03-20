import { useEffect } from "react";
// route
import { Link, useParams } from "react-router-dom";
// redux toolkit
import { useDispatch, useSelector } from "react-redux";
// styles
import styles from "./ProductDetails.module.css";
import { AppDispatch, RootState } from "../store/stoe";
import { getproduct } from "../store/ProductSlice";
import ShowRoute from "../components/module/ShowRoute";

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.product.Product);

  useEffect(() => {
    dispatch(getproduct(params.id));
  }, []);

  return (
    <>
    <ShowRoute text="detail" />
      <div className={styles.container}>
        <img
          className={styles.image}
          src={product.images[0]}
          alt={product.title}
        />
        <div className={styles.textContainer}>
          <h3>{product.title}</h3>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.category}> category : {product.category.name}</p>
          <div className={styles.buttonContainer}>
            <span className={styles.price}>{product.price} $</span>
            <Link to="/">back to card</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
