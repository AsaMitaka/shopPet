import React from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import styles from './search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.filter.search);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(setSearch(value));
  };

  const handleClearSearch = () => {
    dispatch(setSearch(''));
  };

  return (
    <div className={styles.search}>
      <AiOutlineSearch style={{ position: 'absolute', top: '5px', left: '5px' }} />
      <input
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      {searchValue && (
        <AiOutlineClose
          style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }}
          onClick={handleClearSearch}
        />
      )}
    </div>
  );
};

export default Search;
