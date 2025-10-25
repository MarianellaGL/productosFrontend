import React from "react";
import { Button, Drawer, Stack } from "@chakra-ui/react";
import { ProductDetailContent } from "../../../components/pagesComponents/ProductDetailContent";

export function ProductDetailDrawer({ isOpen, onClose, product }) {
  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose} placement="end">
      <Drawer.Backdrop />

      <Drawer.Positioner>
        <Drawer.Content borderLeftRadius="2xl" maxW="md">
          <Drawer.Header>
            <Stack
              direction="row"
              align="center"
              justify="space-between"
              w="full"
            >
              Detalle del producto
              <Drawer.CloseTrigger />
            </Stack>
          </Drawer.Header>

          <Drawer.Body>
            <ProductDetailContent product={product} />
          </Drawer.Body>

          <Drawer.Footer>
            <Button colorScheme="brand" onClick={() => {}}>
              Agregar al movimiento
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cerrar
            </Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}
