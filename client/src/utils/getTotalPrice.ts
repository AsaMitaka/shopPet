const getTotalPrice = (obj) => {
  return obj.reduce((sum: number, item) => sum + item.price * item.count, 0).toFixed(2);
};

export default getTotalPrice;
