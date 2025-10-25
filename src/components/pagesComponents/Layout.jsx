import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  Stack,
} from "@chakra-ui/react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { NavButton } from "./NavButton";

export function Layout({
  title = "Inventario",
  subtitle = "Lista de productos",
}) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Box
      bgGradient="linear(to-b, sand.50, sand.100)"
      minH="100dvh"
      display="flex"
      flexDir="column"
    >
      <Box as="header" borderBottomWidth="1px" bg="white">
        <Container maxW="6xl" py={3}>
          <Stack gap={2}>
            <Flex align="center" gap={3}>
              <Heading as="h1" size="md" color="brand.700">
                {title}
              </Heading>
              <Spacer />
            </Flex>

            {subtitle && (
              <Text fontSize="sm" color="sand.700">
                {subtitle}
              </Text>
            )}

            <HStack as="nav" gap={2}>
              <NavButton to="/" active={pathname === "/"}>
                Inicio
              </NavButton>

              <NavButton to="/addProducts" active={pathname === "/addProducts"}>
                Agregar
              </NavButton>

              <NavButton
                to="/products/edit"
                active={pathname.startsWith("/products/edit")}
              >
                Editar
              </NavButton>

              <NavButton
                to="/products/delete"
                active={pathname.startsWith("/products/delete")}
              >
                Eliminar
              </NavButton>
            </HStack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={8} flex="1">
        <Outlet />
      </Container>

      <Box as="footer" borderTopWidth="1px" bg="white">
        <Container maxW="6xl" py={4}>
          <Flex align="center" gap={3}>
            <Text color="sand.700" fontSize="sm">
              © {new Date().getFullYear()} Inventario
            </Text>
            <Spacer />
            <Button
              as={NavLink}
              to="/addProducts"
              variant="ghost"
              size="xs"
              _hover={{ bg: "sand.100" }}
            >
              Agregar productos
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
