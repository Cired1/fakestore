import useStore from "../../store/store";
import styles from "./Cart.module.css";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const subtotal = useStore((state) => state.subtotal);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  return (
    <section className="page">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>My Bag</h2>
          <button className={styles.btnRemoveAll} onClick={clearCart}>
            Remove All
          </button>
        </header>

        {cart.length > 0 && (
          <>
            <div className={styles.list}>
              {cart.map((product) => (
                <div key={product.id} className={styles.item}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                  />
                  <div className={styles.info}>
                    <h4>$ {product.price * product.amount} USD</h4>
                    <h5>{product.title}</h5>
                    <p className={styles.desc}>{product.description}</p>
                    <p className={styles.category}>{product.category}</p>
                    <p>
                      Amount: <strong>{product.amount}</strong>
                    </p>
                  </div>
                  <button
                    aria-label="Remove Item"
                    className={styles.btnRemove}
                    onClick={() => removeFromCart(product.id)}
                  >
                    <IoMdClose />
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.subtotal}>
              <p className={styles.total}>
                Sub total: <strong>$ {subtotal.toFixed(2)} USD</strong>
              </p>
              <button className={styles.btnCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
