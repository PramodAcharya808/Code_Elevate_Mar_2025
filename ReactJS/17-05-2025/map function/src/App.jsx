import React from "react";
import Products from "./components/Products/Products";

const App = () => {
  const mobileData = [
    {
      id: 1,
      name: "Apple iPhone 13",
      price: 28000,
    },
    {
      id: 2,
      name: "Samsung Galaxy S22",
      price: 30000,
    },
    {
      id: 3,
      name: "OnePlus 9 Pro",
      price: 25000,
    },
    {
      id: 4,
      name: "Google Pixel 6",
      price: 27000,
    },
    {
      id: 5,
      name: "Xiaomi Redmi Note 11",
      price: 18000,
    },
  ];

  return (
    <ul>
      {mobileData.map((item, key, array) => (
        <Products key={item.id} item={item.name} price={item.price} />
      ))}
    </ul>
  );
};

export default App;
