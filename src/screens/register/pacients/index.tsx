import React, { useState } from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigation } from "@react-navigation/native"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import Logo2 from "../../../assets/Logo2.svg"
import { ButtonComponent } from "../../../components/ButtonComponent"
import { DropdownComponent } from "../../../components/DropDonwList"
import { InputForm } from "../../../components/InputForm"
import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerForm,
  ContainerLogo,
  Content,
  ContentRegister,
} from "./styles"

const data = [
  { label: "Masculino", value: "M" },
  { label: "Feminino", value: "F" },
] as any

export function RegisterPatients() {
  const [genre, setGenre] = useState()
  const { navigate } = useNavigation<any>()

  const schema = Yup.object().shape({
    cpf: Yup.string().required("digite seu CPF"),
    name: Yup.string().required("digite o nome do paciente"),
    idade: Yup.string().required("digite seu sobrenome"),
  })

  const handleRegister = () => {
    navigate("ListCalculate")
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  console.log("🔥", genre)
  return (
    <Container>
      <BackgroundContent>
        <Content showsVerticalScrollIndicator={false}>
          <ContainerLogo>
            <Logo2 />
          </ContainerLogo>
          <ContentRegister>
            <ContainerForm>
              <InputForm
                type="cpf"
                name="cpf"
                control={control}
                placeholder={"Digite seu cpf"}
                errorInput={errors.cpf && errors.cpf.message}
              />
            </ContainerForm>
            <ContainerForm>
              <InputForm
                name="name"
                type="custom"
                options={{
                  mask: "*******************************************",
                }}
                control={control}
                placeholder={"Digite o nome completo do paciente"}
                errorInput={errors.name && errors.name.message}
              />
            </ContainerForm>
            <ContainerForm>
              <InputForm
                name="idade"
                type="custom"
                options={{
                  mask: "999",
                }}
                control={control}
                placeholder={"Digite o a idade do paciente"}
                errorInput={errors.idade && errors.idade.message}
              />
            </ContainerForm>
            <ContainerForm>
              <DropdownComponent
                data={data}
                placeholder="Escolha o sexo do paciente"
                setValue={setGenre}
                value={genre}
              />
            </ContainerForm>
          </ContentRegister>
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
