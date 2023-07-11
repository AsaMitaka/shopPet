import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
