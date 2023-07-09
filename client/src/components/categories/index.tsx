import { useSelector, useDispatch } from 'react-redux';
import { setCtg } from '../../redux/slices/filterSlice';
import styles from './categories.module.scss';

const Categories = () => {
  const ctg = useSelector((store) => store.filter.category);
  const dispatch = useDispatch();

  const arr = [
    { name: 'Water', ctg: 'water' },
    { name: 'Vegetable', ctg: 'vegetable' },
    { name: 'Fruit', ctg: 'fruit' },
    { name: 'Cheese', ctg: 'cheese' },
    { name: 'Bread', ctg: 'bread' },
  ];

  const handleCategory = (obj) => {
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
        {arr.map((item, id) => (
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
