// route
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Layout/Navbar/Category";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/module/Footer";
import FilterProducts from "./pages/FilterProducts";
// components
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import ShopCart from "./pages/ShopCart";

function App() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const clickHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="App" onClick={clickHandler}>
      <Navbar />
      <Category isMenuOpen={isOpen} setIsMenuOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping-card" element={<ShopCart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/filter-product/:id" element={<FilterProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
