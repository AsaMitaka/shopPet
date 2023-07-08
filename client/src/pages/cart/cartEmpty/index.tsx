import styles from './cartEmpty.module.scss';

const CartEmpty = () => {
  return (
    <div className={styles.cartEmpty}>
      <div className={styles.cartEmptyBlock}>
        <h1>Cart is empty</h1>
      </div>
    </div>
  );
};

export default CartEmpty;
