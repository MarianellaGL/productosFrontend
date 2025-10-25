import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { DetailProvider } from "./context/ProductDetailContext";
import { ProductsProvider } from "./context/ProductContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <DetailProvider>
        <ProductsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <Toaster />
        </ProductsProvider>
      </DetailProvider>
    </Provider>
  </StrictMode>
);
