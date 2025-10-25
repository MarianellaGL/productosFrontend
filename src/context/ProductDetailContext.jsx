import React, { createContext, useContext, useReducer } from "react";
import {
  detailReducer,
  detailInitialState,
  DETAIL_ACTIONS,
} from "./reducers/DetailReducer";

const DetailContext = createContext(null);

export function DetailProvider({
  children,
  initialState = detailInitialState,
}) {
  const [state, dispatch] = useReducer(detailReducer, initialState);

  const value = {
    selectedId: state.selectedId,
    open: state.open,
    openDetail: (id) => dispatch({ type: DETAIL_ACTIONS.OPEN, payload: id }),
    closeDetail: () => dispatch({ type: DETAIL_ACTIONS.CLOSE }),
  };

  return (
    <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
  );
}

export function useProductDetailContext() {
  const ctx = useContext(DetailContext);
  if (!ctx) throw new Error("useDetail must be used within DetailProvider");
  return ctx;
}
