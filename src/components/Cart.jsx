import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
export default function Cart() {
  const { user, cart, setCart } = useContext(AppContext);
  const increment = (id, qty) => {
    const updatedCart = cart.map((product) =>
      product._id === id ? { ...product, qty: qty + 1 } : product
    );
    setCart(updatedCart);
  };

  const decrement = (id, qty) => {
    const updatedCart = cart.map((product) =>
      product._id === id ? { ...product, qty: qty - 1 } : product
    );
    setCart(updatedCart);
  };
  return (
    <div>
      <h2>My Cart</h2>
      {cart &&
        cart.map(
          (value) =>
            value.qty > 0 && (
              <li key={value._id}>
                {value.productName}-{value.price}-
                <button onClick={() => decrement(value._id, value.qty)}>
                  -
                </button>
                {value.qty}
                <button onClick={() => increment(value._id, value.qty)}>
                  +
                </button>
                -{value.price * value.qty}
              </li>
            )
        )}
        <h5>Order Value:</h5>
    </div>
  );
}
