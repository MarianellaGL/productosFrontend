import React from "react";
import { ProductsTableDesktop } from "./DesktopTable/ProductDesktopTable";
import { ProductsTableMobile } from "./MobileTable/ProductTabletMobile";
import { useBreakpointValue } from "@chakra-ui/react";

export function ProductsTable({ products = [], onEdit, onDelete }) {
  const isDesktop = useBreakpointValue(
    { base: false, md: true },
    { ssr: false }
  );
  if (isDesktop) {
    return (
      <ProductsTableDesktop
        products={products}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  }

  return (
    <ProductsTableMobile
      products={products}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  );
}
