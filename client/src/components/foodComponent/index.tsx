import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import styles from './foodComponent.module.scss';

const FoodComponent = ({ item: { name, price, image, rating, weight, id } }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => setCount((prev) => prev + 1);

  return (
    <div className={styles.foodContainer}>
      <div className={styles.foodBlock}>
        <img src={image} alt="" className={styles.foodImg} />
        <button className={styles.foodBtn} onClick={handleCount}>
          <span>{count}</span> Add
        </button>
      </div>
      <div>
        <Link to={`/food/${id}`} className={styles.foodTitle}>
          {name}, {price}
        </Link>
        <div className={styles.foodInfo}>
          <p>{weight}</p>
          <p>
            <AiFillStar />
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodComponent;
