import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    const product = { id, name: "Product " + id };
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };
  return (
    <>
      <div className="container"> </div>
      <h2 className="mt-4 mt-4"> Product List</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="" className="card-img-top" alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">$19.99</p>
              {cartItems.some((item) => item.id === 1) ? (
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(1)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button className="btn btn-danger" onClick={() => addToCart(1)}>
                  Add to Cart
                </button>
              )}
              
            </div>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">$19.99</p>
              {cartItems.some((item) => item.id === 2) ? (
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(1)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button className="btn btn-danger" onClick={() => addToCart(1)}>
                  Add to Cart
                </button>
              )}
              
            </div>
          </div>
        </div>
        {/* Add more Products here */}
        <h2 className="mt-4 mb-4">Shpping Cart</h2>
        {cartItems.length === 0 ? (
          <p> Cart is Empty</p>
        ) : (
          <ul className="list-group">
            {cartItems.map((item) => (
              <li className="list-group-item" key={item.id}>
                {item.name}
                <button
                  className="btn btn-danger float-end"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;
