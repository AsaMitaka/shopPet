import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import styles from './sort.module.scss';

const Sort = () => {
  const [isActive, setActive] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);
  const arr = ['popular', 'price', 'alphabet'];
  const sortName = arr[selectedSort];

  const handleSort = (index) => {
    setSelectedSort(index);
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
          {sortName}
        </span>
      </div>
      {isActive && (
        <div className={styles.sortBlock}>
          <ul className={styles.sortBlockList}>
            {arr.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSort(index)}
                className={
                  index === selectedSort ? styles.sortBlockActiveItem : styles.sortBlockItem
                }>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
