import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import styles from './sort.module.scss';

const Sort = ({ sortName, setSortName }) => {
  const [isActive, setActive] = useState(false);

  const arr = [
    { name: 'Popular↑', sort: 'rating' },
    { name: 'Popular↓', sort: '-rating' },
    { name: 'Price↑', sort: 'price' },
    { name: 'Price↓', sort: '-price' },
    { name: 'Alphabet↑', sort: 'name' },
    { name: 'Alphabet↓', sort: '-name' },
  ];

  const handleSort = (obj) => {
    setSortName(obj);
    setActive(false);
  };

  const handleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortLabel}>
        {isActive ? <AiFillCaretUp /> : <AiFillCaretDown />}
        <b>Sort by: </b>
        <span className={styles.sortLabelSpan} onClick={handleActive}>
          {sortName.name}
        </span>
      </div>
      {isActive && (
        <div className={styles.sortBlock}>
          <ul className={styles.sortBlockList}>
            {arr.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSort(item)}
                className={
                  item.sort === sortName.sort ? styles.sortBlockActiveItem : styles.sortBlockItem
                }>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
