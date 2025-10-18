import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function NavButton({ to, active, children }) {
  return (
    <Button
      as={NavLink}
      to={to}
      variant={active ? "solid" : "ghost"}
      colorPalette="brand"
      borderRadius="xl"
      size="sm"
    >
      {children}
    </Button>
  );
}
