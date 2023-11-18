import React from "react";


import { Control, Controller } from "react-hook-form";
import { TextInputMaskProps } from "react-native-masked-text";
import { Input } from "../Forms/Input";
import { Container, ErrorInput } from "./styles";

interface Props extends TextInputMaskProps {
  control: Control;
  name: string;
  errorInput: Object;  
}

export function InputForm({ control, name, errorInput, type, ...rest}: Props) {
  return(
    <Container>
      <Controller 
        control={control}
        render={({ field: { onChange, value }}) => (
          <Input 
            type={type}
            onChangeText={onChange}
            value={value}
          {...rest} 
        />
        )}
        name={name} 
      />
      {errorInput && <ErrorInput>{errorInput}</ErrorInput>}
  </Container>
  );
}
