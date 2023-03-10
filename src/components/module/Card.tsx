import { Product } from "../../types/types";
import styles from "./Card.module.css";
const Card = (props: Product): JSX.Element => {

  return (
    <div className={styles.container}>
      <img src={props.images[0]} alt={props?.title} />

      <div className={styles.details}>
        <h2>{props?.title}</h2>
        <p>{props?.price} $</p>
      </div>
    </div>
  );
};

export default Card;
