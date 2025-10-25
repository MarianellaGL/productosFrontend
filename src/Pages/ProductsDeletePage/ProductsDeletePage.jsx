import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Input,
  HStack,
  Button,
  Dialog,
  Text,
} from "@chakra-ui/react";
import { useProducts } from "../../context/ProductContext";
import { ProductsTable } from "../../components/pagesComponents/TableProducts";
import { toaster } from "../../components/ui/toaster";
import { DeleteProduct } from "../../Services/DeleteProduct";
import { getProductsByCategory } from "../../Services/getProductsByCategory";

export default function ProductsDeletePage() {
  const { products, setProducts } = useProducts();
  const [query, setQuery] = useState("");
  const [toDelete, setToDelete] = useState(null);
  const [open, setOpen] = useState(false);
  const [isResponseOk, setIsResponseOk] = useState(false);

  //para no usar useMemo, podemos usar un efecto secundario que escuche el onChange
  // del input del buscador y me retorne los valores buscados o puedo hacerlo
  // directamente deste esta constante
  const results = useMemo(() => {
    if (!query) return products || [];
    const q = query.toLowerCase().trim();
    return (products || []).filter(
      (p) =>
        String(p._id).toLowerCase().includes(q) ||
        String(p.nombre).toLowerCase().includes(q)
    );
  }, [products, query]);

  const onDelete = (prod) => {
    setToDelete(prod);
    setOpen(true);
  };

  const confirmDelete = async () => {
    const res = await DeleteProduct(toDelete?._id);
    if (res?.message !== "Producto eliminado") {
      toaster.create({
        title: "Error al eliminar producto",
        type: "error",
      });
    }
    if (res?.message === "Producto eliminado") {
      setIsResponseOk(true);
      toaster.create({
        title: "Producto eliminado exitosamente!",
        type: "success",
      });
    }
    setOpen(false);
    setIsResponseOk(false);
  };

  useEffect(() => {
    getProductsByCategory().then((res) => {
      setProducts(res);
    });
  }, [isResponseOk]);

  return (
    <Container maxW="container.xl" py={6}>
      <Heading size="lg" mb={4}>
        Eliminar productos
      </Heading>

      <HStack mb={4} gap={3}>
        <Input
          placeholder="Buscar por ID o nombre..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="ghost" onClick={() => setQuery("")}>
          Limpiar
        </Button>
      </HStack>

      <Box borderWidth="1px" borderRadius="2xl" p={4} bg="white">
        <ProductsTable products={results} onDelete={onDelete} />
      </Box>

      <Dialog.Root
        open={open}
        onOpenChange={(o) => {
          if (!o) setOpen(false);
        }}
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content borderRadius="2xl" maxW="md">
            <Dialog.Header>
              <HStack justify="space-between" w="full">
                <Text fontWeight="bold">Confirmar eliminación</Text>
                <Dialog.CloseTrigger />
              </HStack>
            </Dialog.Header>
            <Dialog.Body>
              <Text>
                ¿Seguro que querés eliminar <strong>{toDelete?.nombre}</strong>{" "}
                (ID: {toDelete?._id})? Esta acción no se puede deshacer.
              </Text>
            </Dialog.Body>
            <Dialog.Footer>
              <HStack justify="flex-end" w="full" gap={2}>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Cancelar
                </Button>
                <Button colorScheme="red" onClick={confirmDelete}>
                  Eliminar
                </Button>
              </HStack>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Container>
  );
}
