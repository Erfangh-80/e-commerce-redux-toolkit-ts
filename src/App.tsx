// route
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/module/Footer";
import FilterProducts from "./pages/FilterProducts";
// components
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import ShopCart from "./pages/ShopCart";

function App() {
  return (
    <div className="App">
      <Navbar />
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
