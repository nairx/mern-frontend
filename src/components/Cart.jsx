import React, { useState, useEffect } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { user, setUser, cart, setCart } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);
  const Navigate = useNavigate();
  const increment = (id) => {
    setCart(
      cart.map((item) => {
        if (item._id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }),
    );
  };

  const decrement = (id) => {
    setCart(
      cart.map((item) => {
        if (item._id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      }),
    );
  };

  useEffect(() => {
    setOrderValue(
      cart.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0),
    );
  }, [cart]);
  return (
    <div>
      <h3>My Cart</h3>
      {cart.length > 0 ? (
        <div>
          <ol>
            {cart &&
              cart.map((item) => (
                <li key={item._id}>
                  {item.name}-{item.price}-
                  <button onClick={() => decrement(item._id)}>-</button>
                  {item.quantity}
                  <button onClick={() => increment(item._id)}>+</button>-
                  {item.price * item.quantity}
                </li>
              ))}
          </ol>
          <hr />
          <p>
            <strong>Order Value:{orderValue}</strong>
          </p>
          {user?.email ? (
            <p>
              <button>Place Order</button>
            </p>
          ) : (
            <p>
              <button onClick={() => Navigate("/login")}>Login to Order</button>
            </p>
          )}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
