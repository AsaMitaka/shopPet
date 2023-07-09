import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import styles from './search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchValue(value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
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
