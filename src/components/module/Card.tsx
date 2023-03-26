import { useEffect, useState } from "react";
// route
// icons
import { FaTrash } from "react-icons/fa";
// route
import { Link } from "react-router-dom";
// type
import { Product } from "../../types/types";
// styles
import styles from "./Card.module.css";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrease, increase, removeFromCart } from "../../store/CartSlice";
import { AppDispatch, RootState } from "../../store/stoe";
import { formatPrice, checkProduct, isInCart } from "../../helper/function";

type cardProps = {
  product: Product;
};

const Card = (props: cardProps): JSX.Element => {
  const { product } = props;

  const dispatch = useDispatch<AppDispatch>();
  const { selectedItems } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <div className={styles.container}>
        <Link to={`/product/${product.id}`}>
          <img src={product.images[0]} alt={product?.title} />

          <div className={styles.details}>
            <h2>{product?.title}</h2>
            <p>{formatPrice(+product?.price)} $</p>
          </div>
        </Link>
        <div className={styles.actions}>
          {checkProduct(selectedItems, product.id) > 1 && <button onClick={() => dispatch(decrease(product))}>-</button>}
          {checkProduct(selectedItems, product.id) === 1 && <button onClick={() => dispatch(removeFromCart(product))}><FaTrash /></button>}
          <span>{checkProduct(selectedItems, product.id)}</span>
          {isInCart(selectedItems, product.id) 
          ? <button onClick={() => dispatch(increase(product))}>+</button>
          : <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>}
        </div>
      </div>
    </>
  );
};



export default Card;
