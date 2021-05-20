import React, { useState } from "react";
import logo from "./image/logo.jpeg";
import "./App.css";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cards, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([
    {
      name: "M4A4-S | Vandall",
      price: "12.99",
      image: "https://csgopedia.com/uploads/blog/image036.jpg",
    },
    {
      name: "AK47 | Sewer",
      price: "24.99",
      image: "https://csgopedia.com/uploads/blog/image024-1.jpg",
    },
    {
      name: "Glock-18 | Dragon Splash",
      price: "6.50",
      image: "https://csgopedia.com/uploads/blog/image033.jpg",
    },
    {
      name: "Bayonet | Doppler",
      price: "321",
      image: "https://csgopedia.com/uploads/blog/image030.jpg",
    },
    {
      name: "M4A4 | Dragon King",
      price: "43.20",
      image: "https://csgopedia.com/uploads/blog/image034.jpg",
    },
    {
      name: "USP-S | Overwatch",
      price: "16.99",
      image: "https://csgopedia.com/uploads/blog/image041.jpg",
    },
  ]);

  const addToCart = (prod) => {
    setCart([...cards, { ...prod }]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cards.filter((prod) => prod !== productToRemove));
  };

  const renderProduct = () => (
    <>
      {products.map((prod) => {
        return (
          <div key={prod.name} className="cards">
            <p className="title">{prod.name}</p>
            <h4 className="price">${prod.price}</h4>
            <div className="image">
              <img src={prod.image} alt="" width="100%" />
            </div>
            <br />
            <button onClick={() => addToCart(prod)}>
              <i className="fa fa-shopping-cart" />
            </button>
          </div>
        );
      })}
    </>
  );
  const renderCart = () => (
    <div className="orderBtn">
      <p style={{ marginBottom: "0px", textDecoration: "underline" }}>
        Order button down below!
      </p>
      <div className="cardBox">
        {cards.map((prod) => {
          return (
            <div key={prod.name} className="cards">
              <p className="title">{prod.name}</p>
              <h4 className="price">${prod.price}</h4>
              <div className="image">
                <img src={prod.image} alt="" width="100%" />
              </div>
              <br />
              <button onClick={() => removeFromCart(prod)}>
                <i
                  className="fas fa-dumpster-fire"
                  style={{ color: "red" }}
                ></i>
              </button>
            </div>
          );
        })}
      </div>

      <button
        className="button"
        style={{
          width: "115px",
        }}
      >
        Order Now!
      </button>
    </div>
  );
  return (
    <div className="App">
      <div className="navBtns">
        <div className="productBtn" onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products
        </div>
        <img src={logo} width="15%" alt="" />
        <div className="button" onClick={() => navigateTo(PAGE_CART)}>
          View Cart
          <i className="fa fa-shopping-cart" />
        </div>
      </div>
      <div id="container">
        {page === PAGE_PRODUCTS && renderProduct()}
        {page === PAGE_CART && renderCart()}
      </div>
    </div>
  );
}

export default App;
