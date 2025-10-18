import React from "react";
import { Field, Input } from "@chakra-ui/react";

export default function PriceField({ value, onChange, error }) {
  return (
    <Field.Root required invalid={!!error}>
      <Field.Label>Precio</Field.Label>
      <Input
        name="precio"
        type="number"
        min="0"
        placeholder="Ej: 120000"
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
      />
      {error && <Field.ErrorText>{error}</Field.ErrorText>}
    </Field.Root>
  );
}
