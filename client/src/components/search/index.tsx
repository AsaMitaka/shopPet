import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import styles from './search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.search);

  const handleSearch = (e) => {
    const value = e.target.value;

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
        onChange={(e) => handleSearch(e)}
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
