import CardItem from "../module/CardItem";
import OrderSummary from "../module/OrderSummary";
// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/stoe";
import { clearCart } from "../../store/CartSlice";
// styles
import styles from "./CartList.module.css";

const CartList = (): JSX.Element => {
  const { selectedItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={styles.container}>
      <>
        <div>
          {selectedItems.map((product) => (
            <CardItem key={product.id} {...product} />
          ))}
          {selectedItems.length ? (
            <button
              className={styles.clearButton}
              onClick={() => dispatch(clearCart())}
            >
              clear
            </button>
          ) : null}
        </div>
        <OrderSummary />
      </>
    </div>
  );
};

export default CartList;
