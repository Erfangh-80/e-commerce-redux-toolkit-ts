// components
import Card from "../module/Card";
// styles
import styles from "./ProductList.module.css";
// type product
import { Product } from "../../types/types";

type productListProps = {
  text: string;
  products: Product[] 
};

const ProductList = (props: productListProps): JSX.Element => {
  return (
    <>
      <h1 className={styles.title}>{props.text}</h1>
      <div className={styles.container}>
        {props.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
