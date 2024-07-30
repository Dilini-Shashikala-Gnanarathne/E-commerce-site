import React, { useState } from 'react';
import './Product.css';
import { Table, Button } from 'react-bootstrap';

import Image1 from './Pictures/1.jpg';
import Image2 from './Pictures/2.jpg';
import Image3 from './Pictures/3.jpg';
import Image4 from './Pictures/4.jpg';
import Image5 from './Pictures/5.jpg';
import Image7 from './Pictures/7.png';
import Image8 from './Pictures/8.jpg';
import Image9 from './Pictures/9.jpg';
import Image10 from './Pictures/10.jpg';
import Image11 from './Pictures/11.jpg';
import Image12 from './Pictures/12.jpg';
import Image13 from './Pictures/13.jpg';
import Image14 from './Pictures/14.jpg';
import Image15 from './Pictures/15.jpg';
import Image16 from './Pictures/16.jpg';
import Image17 from './Pictures/17.jpg';
import Image18 from './Pictures/18.jpg';
import Image19 from './Pictures/19.jpg';
import Image20 from './Pictures/20.jpg';
import Image21 from './Pictures/21.jpg';
import Image22 from './Pictures/22.jpg';
import Image23 from './Pictures/23.jpg';
import Image24 from './Pictures/24.jpg';
import Image25 from './Pictures/25.jpg';
import Image26 from './Pictures/26.jpg';
import Image27 from './Pictures/27.jpg';
import Image28 from './Pictures/28.jpg';
import Image29 from './Pictures/29.jpg';
import Image30 from './Pictures/30.jpg';
import Image31 from './Pictures/31.jpg';
import Image32 from './Pictures/32.jpg';

const categories = [
  {
    sectionId: "wsection",
    sectionTitle: "WOMEN'S FASHION",
    items: [
      { id: "w1", title: "Women's Clothing", imgSrc: Image1, description: "Kurtis Frock", price: 5000.00 },
      { id: "w2", title: "Cosmetics", imgSrc: Image2, description: "Branded Cosmetics", price: 2500.00 },
      { id: "w3", title: "Women's Watches", imgSrc: Image2, description: "Quartz", price: 1000.00 },
      { id: "w4", title: "Women's Sunglasses", imgSrc: Image3, description: "Luxury Watch", price: 1500.00 },
      { id: "w5", title: "Handbags & Clutches", imgSrc: Image4, description: "Casual Handbag", price: 1600.00 },
      { id: "w6", title: "Slippers", imgSrc: Image5, description: "Nilsara", price: 1750.00 },
    ],
  },
  {
    sectionId: "msection",
    sectionTitle: "MEN'S FASHION",
    items: [
      { id: "m1", title: "Men's Clothing", imgSrc: Image7, description: "T-Shirt", price: 800.00 },
      { id: "m2", title: "Men's Belts", imgSrc: Image8, description: "Belt", price: 599.00 },
      { id: "m3", title: "Men's Watches", imgSrc: Image9, description: "Luxury Watch", price: 2000.00 },
      { id: "m4", title: "Men's Sunglasses", imgSrc: Image10, description: "Luxury Fashion", price: 900.00 },
      { id: "m5", title: "Men's Wallets", imgSrc: Image11, description: "Luxury Time", price: 2500.00 },
      { id: "m6", title: "Men's Shoes", imgSrc: Image12, description: "Sneaker Shoes", price: 1700.00 },
    ],
  },
  {
    sectionId: "ksection",
    sectionTitle: "KIDS FASHION",
    items: [
      { id: "k1", title: "Boys Clothing", imgSrc: Image30, description: "Full Dress", price: 750.00 },
      { id: "k2", title: "Girls Clothing", imgSrc: Image31, description: "Frock", price: 850.00 },
      { id: "k3", title: "Baby Clothing", imgSrc: Image32, description: "Snap", price: 750.00 },
    ],
  },
  {
    sectionId: "csection",
    sectionTitle: "COSMETICS",
    items: [
      { id: "c1", title: "Eyeliner & Eyeshadow", imgSrc: Image13, description: "Luxury Brand Cosmetics", price: 1250.00 },
      { id: "c2", title: "Lipstick & Lipliners", imgSrc: Image14, description: "Luxury Lipsticks", price: 1500.00 },
      { id: "c3", title: "Foundation & Concealers", imgSrc: Image15, description: "Luxury Foundation", price: 1000.00 },
      { id: "c4", title: "Jewellery", imgSrc: Image16, description: "Luxury Jewellery set", price: 850.00 },
      { id: "c5", title: "Accessories", imgSrc: Image17, description: "Diamond", price: 3500.00 },
      { id: "c6", title: "Nail Accessories", imgSrc: Image18, description: "Red Nail", price: 250.00 },
    ],
  },
  {
    sectionId: "hsection",
    sectionTitle: "HOME & LIVING",
    items: [
      { id: "h1", title: "Artificial Flowers", imgSrc: Image19, description: "Pink Flower", price: 550.00 },
      { id: "h2", title: "Wall Tapestries", imgSrc: Image20, description: "Pink Wall", price: 800.00 },
      { id: "h3", title: "Wall Stickers", imgSrc: Image21, description: "Pink Stickers", price: 500.00 },
      { id: "h4", title: "Dreamcatchers", imgSrc: Image22, description: "Pink Dreamcatchers", price: 750.00 },
      { id: "h5", title: "Wall Clocks", imgSrc: Image23, description: "Pink Brand", price: 1500.00 },
      { id: "h6", title: "Wall Shelves", imgSrc: Image24, description: "Pink", price: 850.00 },
    ],
  },
  {
    sectionId: "gsection",
    sectionTitle: "THE GIFT CORNER",
    items: [
      { id: "g1", title: "Cards", imgSrc: Image25, description: "Card", price: 250.00 },
      { id: "g2", title: "Exclusive Gift Ideas", imgSrc: Image26, description: "Magic Box", price: 1500.00 },
      { id: "g3", title: "Gift Vouchers", imgSrc: Image27, description: "Best Voucher", price: 750.00 },
      { id: "g4", title: "Snowglobe", imgSrc: Image28, description: "Purple Snowglobe", price: 700.00 },
      { id: "g5", title: "Teddy Bears", imgSrc: Image29, description: "Best Teddy", price: 1250.00 },
    ],
  },
];

const Category = ({ sectionId, sectionTitle, items, cartItems, addToCart, removeFromCart }) => (
  <div>
    <h2 className="title"><a name={sectionId}></a>{sectionTitle}</h2>
    <div className="row">
      {items.map(item => (
        <div className="Account-page" key={item.id}>
          <div className="col-4">
            <h4 className="Acc"><a name={item.id}></a>{item.title}</h4><br />
            <div className="list">
              <img src={item.imgSrc} className="offer-img" alt={item.title} />
              <br />{item.description}<br />{item.price.toFixed(2)}<br/>
              {cartItems.some(cartItem => cartItem.id === item.id) ? (
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button className="btn btn-danger" onClick={() => addToCart(item.id, item.title)}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    <br /><br /><br /><br />
  </div>
);

const Product = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id, title) => {
    const product = categories.flatMap(category => category.items).find(item => item.id === id);
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="small-container">
      <h2 className="mt-4 mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total Amount</td>
              <td>{calculateTotalAmount()}</td>
            </tr>
          </tfoot>
        </Table>
      )}
      <h2 className="title">ALL CATEGORIES</h2>
      <div className="nav1">
        <ul>
          {categories.map(category => (
            <li key={category.sectionId}>
              <a href={`#${category.sectionId}`}>{category.sectionTitle}</a>
              <ul>
                {category.items.map(item => (
                  <li key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {categories.map(category => (
        <Category
          key={category.sectionId}
          sectionId={category.sectionId}
          sectionTitle={category.sectionTitle}
          items={category.items}
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default Product;
