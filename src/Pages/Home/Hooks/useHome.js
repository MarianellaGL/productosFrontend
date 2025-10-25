import { useProducts } from "../../../context/ProductContext";
import { getProductsByCategory } from "../../../Services/getProductsByCategory";
import { useEffect, useState } from "react";

export const useHome = () => {
  const [cat, setCat] = useState(null);
  const [categories, setCategories] = useState();
  const { products, setProducts } = useProducts();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory(cat).then((res) => {
      setProducts(res), setLoading(false);
    });
  }, [cat]);

  useEffect(() => {
    if (products) {
      const uniqueCategories = [
        ...new Set(products.map((prod) => prod.categoria)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  return { cat, setCat, categories, products, loading };
};
