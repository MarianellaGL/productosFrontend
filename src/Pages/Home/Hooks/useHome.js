import { getProductsByCategory } from "../../../Services/getProductsByCategory";
import { useEffect, useState } from "react";

export const useHome = () => {
  const [cat, setCat] = useState(null);
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();

  useEffect(() => {
    getProductsByCategory(cat).then((res) => {
      setProducts(res), setLoading(false);
    });
  }, [cat]);

  useEffect(() => {
    const cat = products?.map((prod) => {
      return prod.categoria;
    });
    setCategories(cat);
  }, [products]);

  return { cat, setCat, categories, products, loading };
};
