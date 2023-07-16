const getItemsFromLC = () => {
  const data = localStorage.getItem('cart');
  const cart = data ? JSON.parse(data) : [];
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return {
    cart,
    totalPrice,
  };
};

export default getItemsFromLC;
