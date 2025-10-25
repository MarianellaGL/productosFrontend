export const productsInitialState = { products: [] };

export const PRODUCTS_ACTIONS = {
  SET: "SET_PRODUCTS",
  ADD: "ADD_PRODUCT",
  UPDATE: "UPDATE_PRODUCT",
  REMOVE: "REMOVE_PRODUCT",
};

export function productsReducer(state, action) {
  switch (action.type) {
    case PRODUCTS_ACTIONS.SET:
      return { ...state, products: action.payload || [] };

    case PRODUCTS_ACTIONS.ADD:
      return { ...state, products: [...state.products, action.payload] };

    case PRODUCTS_ACTIONS.UPDATE: {
      const { _id, patch } = action.payload;
      return {
        ...state,
        products: state.products.map((p) =>
          p._id === _id ? { ...p, ...patch } : p
        ),
      };
    }

    case PRODUCTS_ACTIONS.REMOVE:
      return {
        ...state,
        products: state.products.filter((p) => p._id !== action.payload),
      };

    default:
      return state;
  }
}
