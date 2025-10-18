import React from "react";
import { Field, NativeSelect, For, Input } from "@chakra-ui/react";

export default function CategoryField({
  categorias,
  categoriaControl,
  onChangeCategoria,
  nuevaCategoria,
  setNuevaCategoria,
  errorCategoria,
  errorNuevaCategoria,
}) {
  const hasErr = !!errorCategoria || !!errorNuevaCategoria;

  return (
    <Field.Root required invalid={hasErr}>
      <Field.Label>Categoría</Field.Label>

      <NativeSelect.Root>
        <NativeSelect.Field
          name="categoriaControl"
          value={categoriaControl}
          onChange={onChangeCategoria}
          aria-invalid={hasErr}
        >
          <option value="">Seleccioná una categoría o añadí otra</option>
          <For each={categorias}>
            {(cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            )}
          </For>
          <option value="añadir">➕ Añadir nueva categoría</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>

      {errorCategoria && <Field.ErrorText>{errorCategoria}</Field.ErrorText>}

      {categoriaControl === "añadir" && (
        <>
          <Input
            mt={3}
            name="nuevaCategoria"
            placeholder="Ingresá una nueva categoría..."
            value={nuevaCategoria}
            onChange={(e) => setNuevaCategoria(e.target.value)}
            aria-invalid={!!errorNuevaCategoria}
          />
          {errorNuevaCategoria && (
            <Field.ErrorText>{errorNuevaCategoria}</Field.ErrorText>
          )}
        </>
      )}
    </Field.Root>
  );
}
