import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  HStack,
  Spinner,
  Text,
  Badge,
  VStack,
} from "@chakra-ui/react";
import { FilterDrawer } from "./Components/FilterDrawer";
import { useHome } from "./Hooks/useHome";
import { useResponsiveDetail } from "../../hooks/UseResponsive";
import { ProductDetailDrawer } from "./Components/ProductDetailDrawer";

const formatPrice = (v) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(v || 0);

const productImage = (categoria = "product") =>
  `https://source.unsplash.com/600x400/?${encodeURIComponent(categoria)}`;

const onImgError = (e, seed) => {
  e.currentTarget.src = `https://picsum.photos/seed/${encodeURIComponent(
    seed || "producto"
  )}/600/400`;
};

export default function Home() {
  const { categories, setCat, products, loading } = useHome();
  const { isOpen, openDetail, onClose } = useResponsiveDetail();
  const [selected, setSelected] = useState(null);

  if (loading) {
    return (
      <HStack justify="center" minH="50vh">
        <Spinner size="xl" thickness="4px" />
      </HStack>
    );
  }

  const handleClick = (item) => {
    setSelected(item);
    openDetail(item);
  };

  return (
    <>
      <HStack justify="end" mb={6}>
        <FilterDrawer categories={categories} onApply={setCat} />
      </HStack>

      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing={12}
        gap={8}
        paddingBottom={12}
      >
        {products?.map((item) => (
          <Box
            key={item._id}
            borderWidth="1px"
            borderRadius="2xl"
            p={5}
            bg="white"
            shadow="sm"
            _hover={{
              shadow: "md",
              transform: "translateY(-3px)",
              transition: "all 0.2s ease",
            }}
            cursor="pointer"
            onClick={() => handleClick(item)}
          >
            <VStack align="start" spacing={2} w="full">
              <Box
                borderRadius="xl"
                overflow="hidden"
                w="full"
                h="180px"
                mb={2}
                bg="gray.50"
              >
                <img
                  src={productImage(item.categoria)}
                  alt={item.nombre}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => onImgError(e, item._id || item.nombre)}
                  loading="lazy"
                />
              </Box>

              <HStack justify="space-between" w="full">
                <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
                  {item.nombre}
                </Text>
                <Badge colorScheme="purple">
                  {item.categoria || "General"}
                </Badge>
              </HStack>

              <Box h="1px" bg="gray.200" w="full" my={2} />

              <Text fontSize="2xl" fontWeight="bold">
                {formatPrice(item.precio)}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <ProductDetailDrawer
        isOpen={isOpen}
        onClose={onClose}
        product={selected}
      />
    </>
  );
}
