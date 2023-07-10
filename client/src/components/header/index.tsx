import { LuShoppingCart } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { Search } from '..';
import { useSelector } from 'react-redux';

const Header = ({ searchValue, setSearchValue }) => {
  const amount = useSelector((state) => state.cart.totalPrice);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <div className={styles.navListLeft}>
            <Link to="/" className={styles.navListLogo}>
              Shop
            </Link>
          </div>
          <div className={styles.navListCenter}>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <Link to="/catalog" className={styles.navListLink}>
              Catalog
            </Link>
          </div>
          <div className={styles.navListRight}>
            <Link to="/cart" className={styles.navListLink}>
              <LuShoppingCart />
              <span className={styles.navListLinkSpan}>Cart: {amount}</span>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
