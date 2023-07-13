import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCtg } from '../../redux/slices/filterSlice';
import styles from './categories.module.scss';
import { RootState } from '../../redux/store';

type CategoryItem = {
  name: string;
  ctg: string | null;
};

export const categoryItems: CategoryItem[] = [
  { name: 'Water', ctg: 'water' },
  { name: 'Vegetable', ctg: 'vegetable' },
  { name: 'Fruit', ctg: 'fruit' },
  { name: 'Cheese', ctg: 'cheese' },
  { name: 'Bread', ctg: 'bread' },
];

const Categories: React.FC = () => {
  const ctg = useSelector((state: RootState) => state.filter.category);
  const dispatch = useDispatch();

  const handleCategory = (obj: CategoryItem) => {
    dispatch(setCtg(obj));
  };

  return (
    <div className={styles.ctg}>
      <ul className={styles.ctgList}>
        <li
          className={ctg.ctg === null ? styles.activeCtgItem : styles.ctgItem}
          onClick={() => handleCategory({ name: '', ctg: null })}>
          All
        </li>
        {categoryItems.map((item, id) => (
          <li
            key={id}
            className={item.ctg === ctg.ctg ? styles.activeCtgItem : styles.ctgItem}
            onClick={() => handleCategory(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
