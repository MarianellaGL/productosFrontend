// src/components/ProductsTableDesktop.jsx
import React from "react";
import { Box, Table, Badge, HStack, IconButton } from "@chakra-ui/react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const formatPrice = (v) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(v || 0);

export function ProductsTableDesktop({ products = [], onEdit, onDelete }) {
  return (
    <Box overflowX="auto">
      <Table.Root size="sm" variant="line" minW="760px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Nombre</Table.ColumnHeader>
            <Table.ColumnHeader display={{ base: "none", lg: "table-cell" }}>
              Categoría
            </Table.ColumnHeader>
            <Table.ColumnHeader isNumeric>Precio</Table.ColumnHeader>
            <Table.ColumnHeader
              isNumeric
              display={{ base: "none", lg: "table-cell" }}
            >
              Stock
            </Table.ColumnHeader>
            <Table.ColumnHeader>Acciones</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products?.map((p) => (
            <Table.Row key={p._id}>
              <Table.Cell>{p._id}</Table.Cell>
              <Table.Cell>{p.nombre}</Table.Cell>
              <Table.Cell display={{ base: "none", lg: "table-cell" }}>
                <Badge colorScheme="purple">{p.categoria || "General"}</Badge>
              </Table.Cell>
              <Table.Cell textAlign="right">{formatPrice(p.precio)}</Table.Cell>
              <Table.Cell
                textAlign="right"
                display={{ base: "none", lg: "table-cell" }}
              >
                {p.stock ?? "-"}
              </Table.Cell>
              <Table.Cell>
                <HStack gap={2}>
                  {onEdit && (
                    <IconButton
                      aria-label="Editar"
                      size="xs"
                      variant="subtle"
                      onClick={() => onEdit(p)}
                    >
                      <FiEdit />
                    </IconButton>
                  )}
                  {onDelete && (
                    <IconButton
                      aria-label="Eliminar"
                      size="xs"
                      variant="subtle"
                      colorPalette="red"
                      onClick={() => onDelete(p)}
                    >
                      <FiTrash2 />
                    </IconButton>
                  )}
                </HStack>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
