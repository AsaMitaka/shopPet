import { RootState, useAppDispatch } from '../../redux/store';
import React, { useEffect } from 'react';
import styles from './foodcatalog.module.scss';
import { Categories, FoodComponent, Loader, Sort } from '../../components';
import { useSelector } from 'react-redux';
import { fetchAllProducts } from '../../redux/slices/productsSlice';

const FoodCatalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  // const searchValue = useSelector((state) => state.filter.search);

  const ctg = useSelector((state: RootState) => state.filter.category);
  const sort = useSelector((state: RootState) => state.filter.sort);

  useEffect(() => {
    const getData = async () => {
      const category = ctg.ctg === null ? '' : `category=${ctg.ctg}`;
      const sortBy = sort.sortType.replace('-', '');
      const orderBy = sort.sortType.includes('-') ? 'asc' : 'desc';
      // const search = searchValue.length > 0 ? `&search=${searchValue.toLowerCase()}` : ''; ${search}

      dispatch(fetchAllProducts({ category, sortBy, orderBy }));
    };

    getData();
  }, [ctg, sort]);

  return (
    <div className={styles.foodcatalog}>
      <h1>Food Catalog</h1>
      <div className={styles.foodRow}>
        <Categories />
        <Sort />
      </div>
      <div className={styles.foodCatalogBlock}>
        {status === 'error'
          ? 'Error'
          : status === 'loading'
          ? [...new Array(8)].map((_, index) => <Loader key={index} />)
          : products.map((item) => <FoodComponent key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FoodCatalog;
