import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './foodcatalog.module.scss';
import { Categories, FoodComponent, Loader, Sort } from '../../components';
import { useSelector } from 'react-redux';

const FoodCatalog = ({ searchValue }) => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);
  const [food, setFood] = useState([]);

  const ctg = useSelector((store) => store.filter.category);
  const sort = useSelector((store) => store.filter.sort);

  useEffect(() => {
    const getData = async () => {
      try {
        const category = ctg.ctg === null ? '' : `category=${ctg.ctg}`;
        const sortBy = sort.sortType.replace('-', '');
        const orderBy = sort.sortType.includes('-') ? 'asc' : 'desc';
        // const search = searchValue.length > 0 ? `&search=${searchValue.toLowerCase()}` : ''; ${search}

        await axios
          .get(
            `https://64a83dc3dca581464b858768.mockapi.io/products?${category}&sortBy=${sortBy}&order=${orderBy}`,
          )
          .then((response) => {
            console.log(response.data);
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
  }, [ctg, sort, searchValue]);

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
