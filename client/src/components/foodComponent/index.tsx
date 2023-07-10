import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import styles from './foodComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/slices/cartSlice';

const FoodComponent = ({ item: { name, price, image, rating, weight, id } }) => {
  const dispatch = useDispatch();

  const onHandleAdd = () => {
    const item = {
      id,
      name,
      price,
      image,
    };

    dispatch(addProduct(item));
  };

  const count = useSelector((state) => {
    const item = state.cart.cart.find((item) => item.id === id);
    return item ? item.count : 0;
  });

  return (
    <div className={styles.foodContainer}>
      <div className={styles.foodBlock}>
        <img src={image} alt="" className={styles.foodImg} />
        <button className={styles.foodBtn} onClick={onHandleAdd}>
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
