import React from "react";
import { Box, HStack, VStack, Text, Badge, Button } from "@chakra-ui/react";
import { useResponsiveDetail } from "../../hooks/UseResponsive";

const formatPrice = (value) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(value || 0);

const productImage = (categoria = "product") =>
  `https://source.unsplash.com/800x500/?${encodeURIComponent(categoria)}`;

const onImgError = (e, seed) => {
  e.currentTarget.src = `https://picsum.photos/seed/${encodeURIComponent(
    seed || "producto"
  )}/800/500`;
};

export function ProductDetailContent({ product }) {
  const { isDesktop } = useResponsiveDetail();
  if (!product) return null;
  return (
    <VStack align="start" spacing={4}>
      <Box borderRadius="xl" overflow="hidden" w="full" h="220px" bg="gray.50">
        <img
          src={productImage(product.categoria)}
          alt={product.nombre}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => onImgError(e, product._id || product.nombre)}
          loading="lazy"
        />
      </Box>

      <HStack justify="space-between" w="full">
        <Text fontSize="xl" fontWeight="bold" noOfLines={2}>
          {product.nombre}
        </Text>
        <Badge colorScheme="purple">{product.categoria || "General"}</Badge>
      </HStack>

      <Box h="1px" bg="gray.200" w="full" />

      <VStack align="start" spacing={1}>
        <Text fontSize="2xl" fontWeight="bold">
          {formatPrice(product.precio)}
        </Text>

        {product?.stock != null && (
          <Text
            fontSize="sm"
            color={product.stock > 0 ? "green.600" : "red.600"}
          >
            {product.stock > 0 ? `Stock: ${product.stock}` : "Sin stock"}
          </Text>
        )}
      </VStack>

      {product?.descripcion && (
        <>
          <Box h="1px" bg="gray.200" w="full" />
          <Text fontSize="sm" color="gray.700">
            {product.descripcion}
          </Text>
        </>
      )}

      {!isDesktop && (
        <HStack w="full" pt={2}>
          <Button variant="outline">Compartir</Button>
        </HStack>
      )}
    </VStack>
  );
}
