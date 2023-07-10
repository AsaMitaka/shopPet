import { CartItem } from '../../components';
import CartEmpty from './cartEmpty';
import styles from './cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllProducts } from '../../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = useSelector((state) => state.cart.cart);

  if (!totalPrice) {
    return (
      <section className={styles.cart}>
        <h1>Cart</h1>
        <CartEmpty />
      </section>
    );
  }

  const onHandleClearCart = () => {
    dispatch(deleteAllProducts());
  };

  return (
    <section className={styles.cart}>
      <div className={styles.cartBlock}>
        <div className={styles.cartBlockRow}>
          <h1>Cart</h1>
          <button className={styles.cartBlockBtn} onClick={onHandleClearCart}>
            Clear cart
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cartAmount}>
        Amount: <span className={styles.cartAmountSpan}>{totalPrice} $</span>
      </div>
    </section>
  );
};

export default Cart;
