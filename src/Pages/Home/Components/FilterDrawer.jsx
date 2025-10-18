import {
  Drawer,
  IconButton,
  Select,
  Button,
  HStack,
  Text,
  Icon,
  createListCollection,
} from "@chakra-ui/react";
import { Filter } from "lucide-react";
import React, { useState } from "react";

export function FilterDrawer({ categories = [], onApply }) {
  const [selected, setSelected] = useState("");

  console.log(selected);

  const categorieSelection = createListCollection({ items: categories });
  return (
    <Drawer.Root placement="right">
      <Drawer.Trigger asChild>
        <IconButton
          aria-label="Abrir filtro"
          icon={<Filter />}
          colorScheme="brand500"
          borderRadius="xl"
          padding={8}
        >
          Filtros
        </IconButton>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.CloseTrigger />
          <Drawer.Header>
            <Drawer.Title>Filtrar por categoría</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <HStack align="center" gap={3}>
              <Select.Root
                value={selected}
                onValueChange={(e) => setSelected(e.value)}
                collection={categorieSelection}
                name="categoria"
                size="md"
              >
                <Select.HiddenSelect />

                <Select.Label>Categoría</Select.Label>

                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Seleccioná una categoría" />
                  </Select.Trigger>

                  <Select.IndicatorGroup>
                    <Select.Indicator />
                    <Select.ClearTrigger />
                  </Select.IndicatorGroup>
                </Select.Control>

                <Select.Positioner>
                  <Select.Content>
                    {categories.map((c, index) => (
                      <Select.Item key={`${c}-${index}`} item={c}>
                        {c}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </HStack>
          </Drawer.Body>
          <Drawer.Footer>
            <HStack justify="end" w="full">
              <Drawer.CloseTrigger asChild>
                <Button
                  colorScheme="brand"
                  onClick={() => onApply(selected[0])}
                >
                  Aplicar
                </Button>
              </Drawer.CloseTrigger>
            </HStack>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}
