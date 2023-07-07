import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './foodcatalog.module.scss';
import { Categories, FoodComponent, Loader, Sort } from '../../components';

const FoodCatalog = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);
  const [food, setFood] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios.get('https://64a83dc3dca581464b858768.mockapi.io/products').then((response) => {
          setFood(response.data);
          setLoading(false);
        });
      } catch (error) {
        setError(error);
        setLoading(false);
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className={styles.foodcatalog}>
      <h1>Food Catalog</h1>
      <div className={styles.foodRow}>
        <Categories />
        <Sort />
      </div>
      <div className={styles.foodCatalogBlock}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Loader key={index} />)
          : food.map((item) => <FoodComponent key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FoodCatalog;
