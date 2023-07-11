import { Routes, Route } from 'react-router-dom';
import { Home, Cart, FoodCatalog, FoodDetails, MainLayout } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/catalog" element={<FoodCatalog />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
