import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/pagesComponents/Layout";
import Home from "./Pages/Home/Home";
import AddProducts from "./Pages/AddProducts/AddProducts";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/addProducts" element={<AddProducts />} />
      </Route>
    </Routes>
  );
}

export default App;
