import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AiFillStar } from 'react-icons/ai';
import styles from './fooddetails.module.scss';

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get(`https://64a83dc3dca581464b858768.mockapi.io/products/${id}`)
          .then((response) => {
            setFood(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <section className={styles.foodDetails}>
      <div className={styles.foodBlock}>
        <div className={styles.left}>
          <img src={food.image} alt={food.name} className={styles.foodDetailsImg} />
        </div>
        <div className={styles.right}>
          <h2 className={styles.foodDetailsTitle}>{food.name}</h2>
          <p className={styles.foodDetailsPrice}>Price: {food.price} $</p>
          <p className={styles.foodDescr}>
            {food.description ? food.description : 'Description is empty'}
          </p>
          <div className={styles.foodInfo}>
            <p className={styles.foodInfoRating}>
              <AiFillStar />
              {food.rating}
            </p>
            <p>{food.weight}</p>
          </div>
          <button className={styles.foodDetailsBtn}>Add</button>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
