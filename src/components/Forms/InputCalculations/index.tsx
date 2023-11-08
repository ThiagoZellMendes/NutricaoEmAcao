import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"
import { ButtonComponent, Container, Title } from "./styles"
import { InputForm } from "../../InputForm"



interface Props extends RectButtonProps {
  name: string
  isActive: boolean
  placeholder: string
  control: any
  errorInput: any
}
export function InputCalculations({ name, isActive, placeholder, control, errorInput, ...rest }: Props) {



  // const handleRegister = () => {
  //   navigate("SignIn")
  //   console.log("Nutricionista cadastrado com sucesso")
  // }


  return (
    <Container isActive={isActive}>
      <InputForm
        control={control}
        name={name}
        placeholder={placeholder}
        errorInput={errorInput}
        keyboardType="numeric"
      />
    </Container>
  )
}
