import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import styles from './sort.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

const Sort = () => {
  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);

  const arr = [
    { name: 'Popular↑', sortType: 'rating' },
    { name: 'Popular↓', sortType: '-rating' },
    { name: 'Price↑', sortType: 'price' },
    { name: 'Price↓', sortType: '-price' },
    { name: 'Alphabet↑', sortType: 'name' },
    { name: 'Alphabet↓', sortType: '-name' },
  ];

  const handleSort = (obj) => {
    dispatch(setSort(obj));
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
          {sort.name}
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
                  item.sortType === sort.sortType
                    ? styles.sortBlockActiveItem
                    : styles.sortBlockItem
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
