import styles from './categories.module.scss';

const Categories = ({ ctgName, setCtgName }) => {
  const arr = [
    { name: 'Water', ctg: 'water' },
    { name: 'Vegetable', ctg: 'vegetable' },
    { name: 'Fruit', ctg: 'fruit' },
    { name: 'Cheese', ctg: 'cheese' },
    { name: 'Bread', ctg: 'bread' },
  ];

  const handleCategory = (obj) => {
    setCtgName(obj);
  };

  return (
    <div className={styles.ctg}>
      <ul className={styles.ctgList}>
        <li
          className={ctgName.ctg === null ? styles.activeCtgItem : styles.ctgItem}
          onClick={() => handleCategory({ name: '', ctg: null })}>
          All
        </li>
        {arr.map((item, id) => (
          <li
            key={id}
            className={item.ctg === ctgName.ctg ? styles.activeCtgItem : styles.ctgItem}
            onClick={() => handleCategory(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
