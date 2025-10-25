import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/pagesComponents/Layout";
import Home from "./Pages/Home/Home";
import AddProducts from "./Pages/AddProducts/AddProducts";
import ProductDetailPage from "./Pages/ProductDetail/ProductDetailPage";
import ProductsEditPage from "./Pages/ProductsEditPage/ProductsEditPage";
import ProductsDeletePage from "./Pages/ProductsDeletePage/ProductsDeletePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/addProducts" element={<AddProducts />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/products/edit" element={<ProductsEditPage />} />
        <Route path="/products/delete" element={<ProductsDeletePage />} />
      </Route>
    </Routes>
  );
}

export default App;
