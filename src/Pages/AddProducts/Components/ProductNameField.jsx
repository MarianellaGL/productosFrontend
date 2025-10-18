import React from "react";
import { Field, Input } from "@chakra-ui/react";

export default function ProductNameField({ value, onChange, error }) {
  return (
    <Field.Root required invalid={!!error}>
      <Field.Label>Nombre del producto</Field.Label>
      <Input
        name="nombre"
        placeholder="Ej: Notebook HP"
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
      />
      {error && <Field.ErrorText>{error}</Field.ErrorText>}
    </Field.Root>
  );
}
