import React from "react";
import { Box, SimpleGrid, HStack, Spinner } from "@chakra-ui/react";
import { FilterDrawer } from "./Components/FilterDrawer";
import { useHome } from "./Hooks/useHome";

export default function Home() {
  const { categories, setCat, products, loading } = useHome();

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <>
      <HStack justify="end" mb={4}>
        <FilterDrawer categories={categories} onApply={setCat} />
      </HStack>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
        {products?.map((item) => (
          <Box
            key={item._id}
            borderWidth="1px"
            borderRadius="2xl"
            p={4}
            cursor="pointer"
            _hover={{ bg: "sand.100", transform: "translateY(-3px)" }}
            transition="all 0.2s ease"
            onClick={() => console.log("Ver detalle de", item.nombre)}
          >
            <strong>{item.nombre}</strong>
            <br />
            <small>{item.categoria}</small>
            <br />${item.precio}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
