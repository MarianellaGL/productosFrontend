import React, { useEffect, useState } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { useProducts } from "../../context/ProductContext";
import { ProductsTable } from "../../components/pagesComponents/TableProducts";
import { EditProductModal } from "./Components/EditProductModal";
import { UpdateProduct } from "../../Services/UpdateProduct";
import { toaster } from "../../components/ui/toaster";
import { getProductsByCategory } from "../../Services/getProductsByCategory";

export default function ProductsEditPage() {
  const { products, setProducts, updateProduct } = useProducts();
  const [editing, setEditing] = useState(null);
  const [isResponseOk, setIsResponseOk] = useState(false);
  const [productId, setProductId] = useState("");
  const [open, setOpen] = useState(false);

  const onEdit = (prod) => {
    setEditing(prod);
    setProductId(prod?._id);
    setOpen(true);
  };
  const onClose = () => setOpen(false);

  const handleSubmit = async (form) => {
    const res = await UpdateProduct(form, productId);
    if (!res?._id) {
      setIsResponseOk(true);
      toaster.create({
        title: "Error al guardar",
        type: "error",
      });
    }
    if (res?._id) {
      toaster.create({
        title: "Producto modificado exitosamente!",
        type: "success",
      });
    }
    updateProduct({ id: res._id, patch: res });
    onClose();
    setIsResponseOk(false);
  };

  useEffect(() => {
    getProductsByCategory().then((res) => {
      setProducts(res);
    });
  }, [isResponseOk]);

  const rows = products || [];

  return (
    <Container maxW="container.xl" py={6}>
      <Heading size="lg" mb={4}>
        Editar productos
      </Heading>
      <Box borderWidth="1px" borderRadius="2xl" p={4} bg="white">
        <ProductsTable products={rows} onEdit={onEdit} />
      </Box>

      <EditProductModal
        isOpen={open}
        onClose={onClose}
        product={editing}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}
