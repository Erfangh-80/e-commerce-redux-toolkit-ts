// styles
import styles from "./CardItem.module.css";
// icons
import { FaTrash } from "react-icons/fa";
// types
import { Product } from "../../types/types";
// redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/stoe";
import { increase, decrease, removeFromCart } from "../../store/CartSlice";
import { formatPrice } from "../../helper/function";


const CardItem = (props: Product) => {

  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <div className={styles.container}>
      <div>
        <img src={props.images[0]} alt={props.title} />
        <div onClick={() => dispatch(removeFromCart(props))} className={styles.trash}>
          <FaTrash  className={styles.trashIcon} />
        </div>
      </div>
      <div className={styles.description}>
        <div>
          <p className={styles.title}>{props.title}</p>
          <div className={styles.actions}>
            <span>Qty: </span>
            <button onClick={() => dispatch(decrease(props))}>-</button>
            <span>{props.quantity}</span>
            <button onClick={() => dispatch(increase(props))}>+</button>
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.price}>Price: {formatPrice(+props.price)}</p>
            <p className={styles.subTotal}>Sub Total: {formatPrice(+props.price * props.quantity)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
