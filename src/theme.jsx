import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

export const system = createSystem(
  defaultConfig,
  defineConfig({
    theme: {
      tokens: {
        colors: {
          brand: {
            50: { value: "#FFF9F0" },
            100: { value: "#FFE8CC" },
            200: { value: "#FFD199" },
            300: { value: "#FFB566" },
            400: { value: "#FF9133" }, 
            500: { value: "#E06F00" },
            600: { value: "#B85800" },
            700: { value: "#8F4400" },
            800: { value: "#663100" },
            900: { value: "#402000" }, 
          },
          sand: {
            50: { value: "#FCFAF7" },
            100: { value: "#F7EFE6" },
            200: { value: "#EADFCC" },
            300: { value: "#D9C5A8" },
            400: { value: "#C6A983" },
            500: { value: "#AA8B62" },
            600: { value: "#8B6F4B" },
            700: { value: "#6C5438" },
            800: { value: "#4D3B26" },
            900: { value: "#2E2216" },
          },
        },
        fonts: {
          heading: {
            value:
              "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial",
          },
          body: {
            value:
              "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial",
          },
        },
        radii: {
          xl: { value: "1rem" },
          "2xl": { value: "1.5rem" },
        },
      },
    },
  })
);

export default system;
