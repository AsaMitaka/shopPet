import React from 'react';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
