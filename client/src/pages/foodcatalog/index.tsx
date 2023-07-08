import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './foodcatalog.module.scss';
import { Categories, FoodComponent, Loader, Sort } from '../../components';

const FoodCatalog = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);
  const [food, setFood] = useState([]);

  const [categoryName, setCategoryName] = useState({ name: '', ctg: null });
  const [sortName, setSortName] = useState({ name: 'Popular', sort: 'rating' });

  useEffect(() => {
    const getData = async () => {
      try {
        const category = categoryName.ctg === null ? '' : categoryName.ctg;
        const sortBy = sortName.sort.replace('-', '');
        const orderBy = sortName.sort.includes('-') ? 'asc' : 'desc';

        await axios
          .get(
            `https://64a83dc3dca581464b858768.mockapi.io/products?${category}&sortBy=${sortBy}&order=${orderBy}`,
          )
          .then((response) => {
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
  }, [categoryName, sortName]);

  return (
    <div className={styles.foodcatalog}>
      <h1>Food Catalog</h1>
      <div className={styles.foodRow}>
        <Categories ctgName={categoryName} setCtgName={setCategoryName} />
        <Sort sortName={sortName} setSortName={setSortName} />
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
