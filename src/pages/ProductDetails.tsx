import { useEffect } from "react";
// route
import { Link, useParams, useNavigate } from "react-router-dom";
// redux toolkit
import { useDispatch, useSelector } from "react-redux";
// styles
import styles from "./ProductDetails.module.css";
import { AppDispatch, RootState } from "../store/stoe";
import { getproduct } from "../store/ProductSlice";
import ShowRoute from "../components/module/ShowRoute";
import Spinner from "../components/module/Spinner";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { Product, loading } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getproduct(params.id));
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ShowRoute text="detail" />
          <div className={styles.container}>
            <img
              className={styles.image}
              src={Product.images[0]}
              alt={Product.title}
            />
            <div className={styles.textContainer}>
              <h3>{Product.title}</h3>
              <p className={styles.description}>{Product.description}</p>
              <p className={styles.category}>
                {" "}
                category : {Product.category.name}
              </p>
              <div className={styles.buttonContainer}>
                <span className={styles.price}>{Product.price} $</span>
                <button onClick={() => navigate(-1)}>back to card</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
