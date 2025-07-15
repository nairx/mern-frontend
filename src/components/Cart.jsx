import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
export default function Cart() {
  const { user, cart, setCart } = useContext(AppContext);
  const increment = (id, qty) => {

  };

  const decrement = (id, qty) => {
    
  }
  return (
    <div>
      <h2>My Cart</h2>
      {cart &&
        cart.map((value) => (
          <li key={value._id}>
            {value.productName}-{value.price}-
            <button onClick={() => decrement(value._id.qty)}>-</button>
            {value.qty}
            <button onClick={() => increment(value._id, qty)}>+</button>-
            {value.price * value.qty}
          </li>
        ))}
    </div>
  );
}
