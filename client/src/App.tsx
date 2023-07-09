import styles from './app.module.scss';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Cart, FoodCatalog, FoodDetails } from './pages';
import { useState } from 'react';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.wrapper}>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/catalog" element={<FoodCatalog searchValue={searchValue} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
