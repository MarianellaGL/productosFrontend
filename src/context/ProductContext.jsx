import React, { createContext, useContext, useReducer } from "react";
import {
  productsReducer,
  productsInitialState,
  PRODUCTS_ACTIONS,
} from "./reducers/ProductsReducer";

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, productsInitialState);

  const value = {
    products: state.products,
    setProducts: (arr) =>
      dispatch({ type: PRODUCTS_ACTIONS.SET, payload: arr }),
    addProduct: (prod) =>
      dispatch({ type: PRODUCTS_ACTIONS.ADD, payload: prod }),
    updateProduct: (_id, patch) =>
      dispatch({ type: PRODUCTS_ACTIONS.UPDATE, payload: { _id, patch } }),
    removeProduct: (_id) =>
      dispatch({ type: PRODUCTS_ACTIONS.REMOVE, payload: _id }),
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
}
