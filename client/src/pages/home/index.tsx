import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FoodComponent } from '../../components';
import styles from './home.module.scss';

const Home = () => {
  const [discountProducts, setDiscountProducts] = useState([]);

  useEffect(() => {
    const getDiscountProducts = async () => {
      const response = await axios.get('https://64a83dc3dca581464b858768.mockapi.io/products');
      setDiscountProducts(response.data.slice(0, 4));
    };
    getDiscountProducts();
  }, []);

  return (
    <section className={styles.main}>
      <h2>Main</h2>
      <div className={styles.mainAdvert}>
        <Link to={`/food/1`} className={styles.mainAdvertLink}>
          <img
            src="https://www.marketing91.com/wp-content/uploads/2020/06/COKE-Advertising-Example-Share-a-Coke-Campaign.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className={styles.mainBlock}>
        <h2>Promotions</h2>
        <div className={styles.mainRow}>
          {discountProducts.map((products) => (
            <FoodComponent key={products.id} item={products} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
