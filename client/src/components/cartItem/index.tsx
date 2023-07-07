import styles from './cartItem.module.scss';

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.left}>
        <img src="" alt="" className={styles.cartItemImg} />
      </div>
      <div className={styles.center}>
        <p className={styles.cartItemTitle}>name</p>
        <div className={styles.cartItemBtns}>
          <button className={styles.btns}>-</button>
          <p className={styles.cartAmount}>Amount</p>
          <button className={styles.btns}>+</button>
        </div>
      </div>
      <div className={styles.right}>
        <button className={styles.btns}>x</button>
      </div>
    </div>
  );
};

export default CartItem;
