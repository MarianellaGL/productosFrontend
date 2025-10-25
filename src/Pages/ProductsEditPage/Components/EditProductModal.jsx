import React, { useEffect, useState } from "react";
import {
  Dialog,
  Stack,
  Input,
  Button,
  Fieldset,
  Field,
  Text,
} from "@chakra-ui/react";

export function EditProductModal({ isOpen, onClose, product, onSubmit }) {
  const [form, setForm] = useState({
    nombre: "",
    categoria: "",
    precio: 0,
    stock: 0,
  });

  useEffect(() => {
    if (product) {
      setForm({
        nombre: product.nombre ?? "",
        categoria: product.categoria ?? "",
        precio: Number(product.precio ?? 0),
        stock: Number(product.stock ?? 0),
      });
    }
  }, [product]);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: name === "precio" || name === "stock" ? Number(value) : value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    await onSubmit?.(form);
  };

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose?.();
      }}
    >
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          borderRadius="2xl"
          maxW="lg"
          as="form"
          onSubmit={submit}
        >
          <Dialog.Header>
            <Stack
              direction="row"
              align="center"
              justify="space-between"
              w="full"
            >
              <Text fontWeight="bold">Editar producto</Text>
              <Dialog.CloseTrigger />
            </Stack>
          </Dialog.Header>

          <Dialog.Body>
            <Fieldset.Root size="md">
              <Field.Root>
                <Field.Label>Nombre</Field.Label>
                <Input
                  name="nombre"
                  value={form.nombre}
                  onChange={handle}
                  required
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Categoría</Field.Label>
                <Input
                  name="categoria"
                  value={form.categoria}
                  onChange={handle}
                  required
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Precio</Field.Label>
                <Input
                  type="number"
                  name="precio"
                  value={form.precio}
                  onChange={handle}
                  min={0}
                  required
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Stock</Field.Label>
                <Input
                  type="number"
                  name="stock"
                  value={form.stock}
                  onChange={handle}
                  min={0}
                />
              </Field.Root>
            </Fieldset.Root>
          </Dialog.Body>

          <Dialog.Footer>
            <Stack direction="row" justify="flex-end" w="full" gap={2}>
              <Button variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" colorScheme="purple">
                Guardar cambios
              </Button>
            </Stack>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
