import { LuShoppingCart } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { Search } from '..';

const Header = () => {
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
            <Link to="/catalog" className={styles.navListLink}>
              Catalog
            </Link>
            <Search />
          </div>
          <div className={styles.navListRight}>
            <Link to="/cart" className={styles.navListLink}>
              <LuShoppingCart />
              <span className={styles.navListLinkSpan}>Cart</span>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
