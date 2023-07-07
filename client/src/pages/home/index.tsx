import { Link } from 'react-router-dom';
import { FoodComponent } from '../../components';
import styles from './home.module.scss';

const Home = () => {
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
          <FoodComponent />
          <FoodComponent />
          <FoodComponent />
          <FoodComponent />
        </div>
      </div>
    </section>
  );
};

export default Home;
