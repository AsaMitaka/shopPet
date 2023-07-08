import { CartItem } from '../../components';
import CartEmpty from './cartEmpty';
import styles from './cart.module.scss';

const Cart = () => {
  const totalPrice = 0;

  if (!totalPrice) {
    return (
      <section className={styles.cart}>
        <h1>Cart</h1>
        <CartEmpty />
      </section>
    );
  }

  return (
    <section className={styles.cart}>
      <h1>Cart</h1>
      <div className={styles.cartBlock}>
        <button className={styles.cartBlockBtn}>x</button>
        {[...new Array(1)].map((_, index) => (
          <CartItem key={index} />
        ))}
      </div>
      <div className={styles.cartAmount}>
        Amount: <span className={styles.cartAmountSpan}>24 $</span>
      </div>
    </section>
  );
};

export default Cart;
