import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './cartItem.module.scss';
import { addProduct, deleteOneProduct, deleteProduct } from '../../redux/slices/cartSlice';

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  count: number;
};

type CartItemProps = {
  item: CartItem;
};

const CartItem: React.FC<CartItemProps> = ({ item: { id, name, price, image, count } }) => {
  const dispatch = useDispatch();

  const onHandleAdd = () => {
    const item = {
      id,
      name,
      price,
      image,
    };

    dispatch(addProduct(item as CartItem));
  };

  const onHandleRemove = () => {
    dispatch(deleteOneProduct(id));
  };

  const onHandleDeleteProduct = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.left}>
        <img src={image} alt="" className={styles.cartItemImg} />
      </div>
      <div className={styles.center}>
        <p className={styles.cartItemTitle}>{name}</p>
        <div className={styles.cartItemBtns}>
          <button className={styles.btns} onClick={onHandleRemove}>
            -
          </button>
          <p className={styles.cartAmount}>
            {count}, {price} $
          </p>
          <button className={styles.btns} onClick={onHandleAdd}>
            +
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <button className={styles.btns} onClick={onHandleDeleteProduct}>
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
