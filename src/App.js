import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products data={data} />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
