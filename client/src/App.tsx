import styles from './app.module.scss';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Login, Signup, Cart, FoodCatalog, FoodDetails } from './pages';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/catalog" element={<FoodCatalog />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
