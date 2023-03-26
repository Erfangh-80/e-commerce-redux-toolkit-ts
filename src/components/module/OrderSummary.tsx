import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../helper/function";
import { checkout } from "../../store/CartSlice";
import { AppDispatch, RootState } from "../../store/stoe";
import styles from "./OrderSummary.module.css";

const OrderSummary = () => {

  const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((state:RootState) => state.cart)
  
  return (
    <div className={styles.container}>
      <h2>Order Summary</h2>
      <div className={styles.summary}>
        <div className={styles.detail}>
          <p>Selected {cart.itemsCounter} items(s) Price</p>
          <span>{formatPrice(cart.total)}</span>
        </div>
        <div className={styles.detail}>
          <p>Delivery Cost</p>
          <span>{formatPrice(cart.deliveryCharge)}</span>
        </div>
      </div>
      <div className={styles.total}>
        <p>Grand Total: </p>
        <span>{formatPrice(cart.total + cart.deliveryCharge)}</span>
      </div>
      <button className={styles.button} onClick={() => dispatch(checkout())}>Proceed to Checkout</button>
    </div>
  );
};

export default OrderSummary;
