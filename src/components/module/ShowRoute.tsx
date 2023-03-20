import styles from "./ShowRoute.module.css";
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

type typeProps = {
  name?: string;
  text: string;
};

const ShowRoute = (props: typeProps) => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <FaHome className={styles.homeIcon} />
      </Link>
      <MdOutlineKeyboardArrowRight className={styles.arrowIcon} />
      <span>{props.text}</span>
      {props.name ? (
        <>
          <span>
            <MdOutlineKeyboardArrowRight className={styles.arrowIcon} />
          </span>
          <span>{props.name}</span>
        </>
      ) : null}
    </div>
  );
};

export default ShowRoute;
