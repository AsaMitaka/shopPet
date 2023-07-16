import getTotalPrice from './getTotalPrice';

const getItemsFromLC = () => {
  const data = localStorage.getItem('cart');
  const cart = data ? JSON.parse(data) : [];
  const totalPrice = getTotalPrice(cart);

  return {
    cart,
    totalPrice,
  };
};

export default getItemsFromLC;
