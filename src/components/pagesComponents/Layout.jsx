import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { NavButton } from "./NavButton";

export function Layout({
  title = "Inventario",
  subtitle = "Lista de productos",
  children,
}) {
  const location = useLocation();

  return (
    <Box bgGradient="linear(to-b, sand.50, sand.100)" minH="100dvh">
      <Box as="header" borderBottomWidth="1px" bg="white">
        <Container maxW="6xl" py={3}>
          <Flex align="center" gap={3}>
            <HStack gap={2}>
              <Heading as="h1" size="md" color="brand.700">
                Inventario
              </Heading>
            </HStack>

            <HStack as="nav" gap={2} ml={6}>
              <NavButton to="/" active={location.pathname === "/"}>
                Inicio
              </NavButton>
              <NavButton
                to="/addProducts"
                active={location.pathname === "/addProducts"}
              >
                Agregar Productos
              </NavButton>
            </HStack>
            <Spacer />
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl" py={8}>
        <Outlet />
      </Container>

      <Box
        as="footer"
        mt={12}
        borderTopWidth="1px"
        bg="white"
        style={{
          maxHeight: "100vh",
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <Container maxW="6xl" py={4}>
          <Flex align="center" gap={3}>
            <Text color="sand.700" fontSize="sm">
              © {new Date().getFullYear()} Inventario
            </Text>
            <Spacer />
            <Text color="sand.700" fontSize="sm">
              <Button
                as={NavLink}
                to="/addProducts"
                variant="ghost"
                size="xs"
                _hover={{ bg: "sand.100" }}
              >
                Agregar productos
              </Button>
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
