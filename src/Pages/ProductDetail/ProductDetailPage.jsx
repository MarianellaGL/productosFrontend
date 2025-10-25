import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import { useHome } from "../Home/Hooks/useHome";
import { ProductDetailContent } from "../../components/pagesComponents/ProductDetailContent";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { products } = useHome();

  const product = products?.find((p) => (p._id || String(p.id)) === id);

  return (
    <Container maxW="container.md" py={6}>
      <Box borderWidth="1px" borderRadius="2xl" p={5} bg="white">
        <ProductDetailContent product={product} />
      </Box>
    </Container>
  );
}
