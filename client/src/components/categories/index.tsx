import { useState } from 'react';
import styles from './categories.module.scss';

const Categories = () => {
  const arr = ['Water', 'Vegetables', 'Fruits', 'Meat', 'Cheese', 'Bread'];
  const [activeCategory, setActiveCategory] = useState(null);
  const handleCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className={styles.ctg}>
      <ul className={styles.ctgList}>
        <li
          className={activeCategory === null ? styles.activeCtgItem : styles.ctgItem}
          onClick={() => handleCategory(null)}>
          All
        </li>
        {arr.map((item, id) => (
          <li
            key={id}
            className={id === activeCategory ? styles.activeCtgItem : styles.ctgItem}
            onClick={() => handleCategory(id)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
