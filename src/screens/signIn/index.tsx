import React from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigation } from "@react-navigation/native"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import Logo2 from "../../assets/Logo2.svg"
import { ButtonComponent } from "../../components/ButtonComponent"
import { InputForm } from "../../components/InputForm"

import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerForm,
  ContainerLink,
  ContainerLogo,
  Content,
  TextLink,
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
        <Content>
          <ContainerLogo>
            <Logo2 />
          </ContainerLogo>
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
                mask: "**************************************",
              }}
              name="senha"
              control={control}
              placeholder={"Digite sua senha"}
              errorInput={errors.senha && errors.senha.message}
            />
          </ContainerForm>
          <ButtonContainer>
            <ButtonComponent
              type="default"
              title={"Acessar"}
              nameIcon="chevron-right"
              onPress={() => navigation.navigate("ListPatients")}
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
        </Content>
      </BackgroundContent>
    </Container>
  )
}
