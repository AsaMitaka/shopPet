import React, { useState, useEffect, useRef } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import styles from './sort.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';

type SortItem = {
  name: string;
  sortType: string;
};

export const sortItems: SortItem[] = [
  { name: 'Popular↑', sortType: 'rating' },
  { name: 'Popular↓', sortType: '-rating' },
  { name: 'Price↑', sortType: 'price' },
  { name: 'Price↓', sortType: '-price' },
  { name: 'Alphabet↑', sortType: 'name' },
  { name: 'Alphabet↓', sortType: '-name' },
];

const Sort: React.FC = () => {
  const sort = useSelector((state: RootState) => state.filter.sort);
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const handleSort = (obj: SortItem) => {
    dispatch(setSort(obj));
    setActive(false);
  };

  const handleActive = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className={styles.sort}>
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
            {sortItems.map((item, index) => (
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
