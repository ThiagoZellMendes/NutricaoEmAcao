import React from "react"
import {
  Container,
  BackgroundContent,
  ContainerForm,
  ButtonContainer,
  ContentRegister,
} from "./styles"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { InputForm } from "../../../components/InputForm"
import { ButtonComponent } from "../../../components/ButtonComponent"
import { useForm } from "react-hook-form"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

export function RegisterNutritionists() {
  const { navigate } = useNavigation<any>()

  const schema = Yup.object().shape({
    name: Yup.string().required("digite seu nome"),
    lastName: Yup.string().required("digite seu sobrenome"),
    cpf: Yup.string().required("digite seu CPF"),
    email: Yup.string()
      .email("digite um email obrigartorio")
      .required("digite seu email"),
    password: Yup.string().required("digite seu senha"),
    passwordConfirmation: Yup.string()
      .required("confirme sua senha")
      .oneOf([Yup.ref("password")], "As senhas não coincidem "),
  })

  const handleRegister = () => {
    navigate("SignIn")
    console.log("Nutricionista cadastrado com sucesso")
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundContent>
          <ContentRegister>
            <ContainerForm>
              <InputForm
                name="name"
                control={control}
                placeholder={"Digite seu nome"}
                errorInput={errors.name && errors.name.message}
              />
            </ContainerForm>
            <ContainerForm>
              <InputForm
                name="lastName"
                control={control}
                placeholder={"Digite seu sobrenome"}
                errorInput={errors.lastName && errors.lastName.message}
              />
            </ContainerForm>
            <ContainerForm>
              <InputForm
                name="cpf"
                control={control}
                placeholder={"Digite seu cpf"}
                errorInput={errors.cpf && errors.cpf.message}
              />
            </ContainerForm>
            <ContainerForm>
              <InputForm
                name="email"
                control={control}
                placeholder={"Digite seu e-mail"}
                errorInput={errors.email && errors.email.message}
              />
            </ContainerForm>
            <ContainerForm>
              <InputForm
                name="password"
                control={control}
                placeholder={"Digite sua senha"}
                errorInput={errors.password && errors.password.message}
              />
            </ContainerForm>
            <ContainerForm>
              <InputForm
                name="passwordConfirmation"
                control={control}
                placeholder={"Confirme sua senha"}
                errorInput={
                  errors.passwordConfirmation &&
                  errors.passwordConfirmation.message
                }
              />
            </ContainerForm>
          </ContentRegister>
          <ButtonContainer>
            <ButtonComponent
              title={"Cadastar"}
              nameIcon="chevron-right"
              onPress={handleSubmit(handleRegister)}
            />
          </ButtonContainer>
        </BackgroundContent>
      </Container>
    </SafeAreaView>
  )
}
