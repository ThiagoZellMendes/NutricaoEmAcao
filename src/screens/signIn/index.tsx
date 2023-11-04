import React from "react"

import { BackgroundComponent } from "../../components/Background"
import { InputForm } from "../../components/InputForm"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import Logo2 from "../../assets/Logo2.svg"
import { ButtonComponent } from "../../components/ButtonComponent"
import { useNavigation } from "@react-navigation/native"

import {
  Container,
  ContainerForm,
  ContainerLogo,
  ButtonContainer,
  ContainerLink,
  TextLink,
  BackgroundContent
} from "./styles"

export function SignIn() {
  const navigation = useNavigation<any>()

  const schema = Yup.object().shape({
    cpf: Yup.string().required("digite seu CPF"),
    senha: Yup.string().required("Campo obrigatorio"),
  })

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
        <ContainerLogo>
          <Logo2 />
        </ContainerLogo>
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
            name="senha"
            control={control}
            placeholder={"Digite sua senha"}
            errorInput={errors.senha && errors.senha.message}
          />
        </ContainerForm>
        <ButtonContainer>
          <ButtonComponent
            title={"Acessar"}
            nameIcon="chevron-right"
            onPress={() => navigation.navigate("RegisterPatients")}
          />
        </ButtonContainer>
        <ContainerLink
          onPress={() => navigation.navigate("RegisterNutritionists")}
        >
          <TextLink>Efetuar Cadastro</TextLink>
        </ContainerLink>
        <ContainerLink onPress={() => console.log("Press 2")}>
          <TextLink>Esqueceu a senha?</TextLink>
        </ContainerLink>
      </BackgroundContent>
    </Container>
  )
}
