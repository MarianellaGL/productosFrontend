import React from "react";
import { Field, Textarea } from "@chakra-ui/react";

export default function DescriptionField({ value, onChange }) {
  return (
    <Field.Root>
      <Field.Label>Descripción</Field.Label>
      <Textarea
        name="descripcion"
        placeholder="Detalles del producto..."
        value={value}
        onChange={onChange}
      />
    </Field.Root>
  );
}
