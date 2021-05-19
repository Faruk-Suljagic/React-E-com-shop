import React, { useState } from "react";

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
      name: "Dragon Splash",
      price: "6.50",
      image: "https://csgopedia.com/uploads/blog/image033.jpg",
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
    setCart([...cards, prod]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
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
            <button onClick={() => addToCart(prod)}>Add to cart</button>
          </div>
        );
      })}
    </>
  );
  const renderCart = () => (
    <>
      {cards.map((prod) => {
        return (
          <div key={prod.name} className="cards">
            <p className="title">{prod.name}</p>
            <h4 className="price">${prod.price}</h4>
            <div className="image">
              <img src={prod.image} alt="" width="100%" />
            </div>
            <br />
            {/* <button onClick={() => addToCart(prod)}>Add to cart</button> */}
          </div>
        );
      })}
      <button>Order Now!</button>
    </>
  );
  return (
    <div className="App">
      <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      <button onClick={() => navigateTo(PAGE_CART)}>Go to cart</button>
      <h2 style={{ color: "lightBlue" }}>You cart ({cards.length})</h2>

      <div id="container">
        {page === PAGE_PRODUCTS && renderProduct()}
        {page === PAGE_CART && renderCart()}
      </div>
    </div>
  );
}

export default App;
