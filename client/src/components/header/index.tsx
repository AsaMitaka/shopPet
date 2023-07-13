import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import { Search } from '..';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Header: React.FC = () => {
  const location = useLocation();
  const amount = useSelector((state: RootState) => state.cart.totalPrice);

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
            {location.pathname !== '/cart' && location.pathname !== '/' && <Search />}
          </div>
          <div className={styles.navListRight}>
            {location.pathname !== '/cart' && (
              <Link to="/cart" className={styles.navListLink}>
                <LuShoppingCart />
                <span className={styles.navListLinkSpan}>Cart: {amount}</span>
              </Link>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
