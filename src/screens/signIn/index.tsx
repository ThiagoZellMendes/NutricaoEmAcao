import React from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigation } from "@react-navigation/native"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import Logo2 from "../../assets/Logo2.svg"
import { ButtonComponent } from "../../components/ButtonComponent"
import { InputForm } from "../../components/InputForm"
import auth from "@react-native-firebase/auth"

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
import { PropsSignIn } from "./props"
import { Alert } from "react-native"

export function SignIn() {
  const { navigate } = useNavigation<any>()
  const schema = Yup.object().shape({
    email: Yup.string().required("digite seu CPF").trim(),
    password: Yup.string().required("Campo obrigatorio"),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function handleSignIn(form: PropsSignIn) {
    if (form.email && form.password) {
      try {
        await auth().signInWithEmailAndPassword(form.email, form.password)
        navigate("ListPatients")
      } catch (error) {
        if (error.code === 'auth/internal-error') {
          Alert.alert("Email ou senha incorreta")
        }
      }
    }
  }
  return (
    <Container>
      <BackgroundContent>
        <Content>
          <ContainerLogo>
            <Logo2 />
          </ContainerLogo>
          <ContainerForm>
            <InputForm
              name="email"
              type="custom"
              options={{
                mask: "******************************",
              }}
              control={control}
              autoCapitalize={"none"}
              autoCorrect={false}
              placeholder={"Digite seu email"}
              errorInput={errors.email && errors.email.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              type="custom"
              options={{
                mask: "************************************",
              }}
              name="password"
              autoCapitalize={"none"}
              autoCorrect={false}
              control={control}
              secureTextEntry={true}
              placeholder={"Digite sua senha"}
              errorInput={errors.password && errors.password.message}
            />
          </ContainerForm>
          <ButtonContainer>
            <ButtonComponent
              type="default"
              title={"Acessar"}
              nameIcon="chevron-right"
              onPress={handleSubmit(handleSignIn)}
            />
          </ButtonContainer>
          <ContainerLink onPress={() => navigate("RegisterNutritionists")}>
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
