import React from "react";
import { Box, Fieldset, VStack, Button } from "@chakra-ui/react";
import { useAddProductForm } from "./Hooks/useAddProducts";
import ProductNameField from "./Components/ProductNameField";
import PriceField from "./Components/PriceField";
import CategoryField from "./Components/CategoryField";
import DescriptionField from "./Components/DescriptionField";

export default function AddProducts() {
  const {
    form,
    categorias,
    categoriaControl,
    nuevaCategoria,
    errors,
    onChange,
    onChangeCategoria,
    onSubmit,
    setNuevaCategoria,
  } = useAddProductForm();

  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="2xl"
      p={8}
      shadow="md"
      _dark={{ bg: "sand.900" }}
    >
      <form id="add-product-form" onSubmit={onSubmit} noValidate>
        <Fieldset.Root size="lg">
          <Fieldset.Legend color="brand.700" fontSize="xl" mb={4}>
            Cargar nuevo producto
          </Fieldset.Legend>

          <VStack spacing={5} align="stretch">
            <ProductNameField
              value={form.nombre}
              onChange={onChange}
              error={errors.nombre}
            />

            <PriceField
              value={form.precio}
              onChange={onChange}
              error={errors.precio}
            />

            <CategoryField
              categorias={categorias}
              categoriaControl={categoriaControl}
              onChangeCategoria={onChangeCategoria}
              nuevaCategoria={nuevaCategoria}
              setNuevaCategoria={setNuevaCategoria}
              errorCategoria={errors.categoria}
              errorNuevaCategoria={errors.nuevaCategoria}
            />

            <DescriptionField value={form.descripcion} onChange={onChange} />
          </VStack>
        </Fieldset.Root>
      </form>

      <Button
        type="submit"
        form="add-product-form"
        mt={6}
        colorPalette="brand"
        size="lg"
        borderRadius="xl"
        _hover={{ transform: "translateY(-2px)", shadow: "md" }}
        transition="all 0.2s ease"
      >
        Guardar producto
      </Button>
    </Box>
  );
}
