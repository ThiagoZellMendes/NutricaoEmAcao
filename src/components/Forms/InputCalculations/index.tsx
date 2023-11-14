import React from "react"
import { Container, Content, ErrorInput, Input, TextCalculater } from "./styles"
import { Control, Controller } from "react-hook-form"
import { Text, TextInputProps } from "react-native"

interface Props extends TextInputProps {
  name: string
  TitleCalculate: string
  isActive?: boolean
  placeholder?: string
  control: Control
  errorInput: Object
}
export function InputCalculations({
  name,
  TitleCalculate,
  isActive = false,
  placeholder,
  control,
  errorInput,
  ...rest
}: Props) {
  return (
    <Container isActive={isActive}>
      <Content>
        <TextCalculater>{TitleCalculate}:</TextCalculater>
        <Controller
          control={control}
          render={({ field: { onChange, value, onBlur} }) => (
            <Input
              onChangeText={onChange}
              value={value}
              {...rest}
              placeholder={placeholder}
              keyboardType="numeric"
              textAlign="right"
            />
          )}
          name={name}
        />
      </Content>
        {errorInput && <ErrorInput>{errorInput}</ErrorInput>}
    </Container>
  )
}
