import { Box, Container, Heading, Text } from "@chakra-ui/react";

export function Layout({
  title = "Inventario",
  subtitle = "Lista de productos",
  children,
}) {
  return (
    <Box bgGradient="linear(to-b, sand.50, sand.100)" minH="100dvh" py={10}>
      <Container maxW="6xl">
        <Heading as="h1" size="lg" color="brand.700">
          {title}
        </Heading>
        {subtitle && (
          <Text mt={1} color="sand.700">
            {subtitle}
          </Text>
        )}
        <Box mt={6}>{children}</Box>
      </Container>
    </Box>
  );
}
