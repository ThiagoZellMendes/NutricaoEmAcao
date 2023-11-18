import React from "react"
import {
  Container,
  BackgroundContent,
  ContainerForm,
  ButtonContainer,
  Content,
  ContainerLogo,
} from "./styles"
import Logo2 from "../../../assets/Logo2.svg"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { InputForm } from "../../../components/InputForm"
import { ButtonComponent } from "../../../components/ButtonComponent"
import { useForm } from "react-hook-form"
import { useNavigation } from "@react-navigation/native"

export function RegisterNutritionists() {
  const { navigate } = useNavigation<any>()

  const schema = Yup.object().shape({
    name: Yup.string().required("digite seu nome"),
    lastName: Yup.string().required("digite seu sobrenome"),
    cpf: Yup.string().required("digite seu CPF"),
    email: Yup.string()
      .email("email obrigartorio")
      .required("digite seu email"),
    password: Yup.string().required("digite sua senha"),
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
    <Container>
      <BackgroundContent>
        <Content showsVerticalScrollIndicator={false}>
          <ContainerLogo>
            <Logo2 />
          </ContainerLogo>
          <ContainerForm>
            <InputForm
              type="custom"
              options={{
                mask: "AAA",
              }}
              name="name"
              control={control}
              placeholder={"Digite seu nome"}
              errorInput={errors.name && errors.name.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              type="custom"
              options={{
                mask: "AAA",
              }}
              name="lastName"
              control={control}
              placeholder={"Digite seu sobrenome"}
              errorInput={errors.lastName && errors.lastName.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              name="cpf"
              type="cpf"
              control={control}
              placeholder={"Digite seu cpf"}
              errorInput={errors.cpf && errors.cpf.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              type="custom"
              options={{
                mask: "*",
              }}
              name="email"
              control={control}
              placeholder={"Digite seu e-mail"}
              errorInput={errors.email && errors.email.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              name="password"
              type="custom"
              options={{
                mask: "*",
              }}
              control={control}
              placeholder={"Digite sua senha"}
              errorInput={errors.password && errors.password.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              name="passwordConfirmation"
              type="custom"
              options={{
                mask: "*",
              }}
              control={control}
              placeholder={"Confirme sua senha"}
              errorInput={
                errors.passwordConfirmation &&
                errors.passwordConfirmation.message
              }
            />
          </ContainerForm>

          <ButtonContainer>
            <ButtonComponent
              type="default"
              title={"Cadastar"}
              nameIcon="chevron-right"
              onPress={handleSubmit(handleRegister)}
            />
          </ButtonContainer>
        </Content>
      </BackgroundContent>
    </Container>
  )
}
