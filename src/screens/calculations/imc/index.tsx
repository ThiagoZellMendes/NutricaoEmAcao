import React, { useState } from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Alert, Text } from "react-native"
import uuid from "react-native-uuid"
import * as Yup from "yup"
import { ButtonComponent } from "../../../components/ButtonComponent"
import { GenreButton } from "../../../components/Forms/GenreButton"
import { InputCalculations } from "../../../components/Forms/InputCalculations"
import { ResultCalculationsComponent } from "../../../components/ResultCalculations"

import { calcularIMC } from "./functions"
import { FormDataCalc, ResultadoIMC, Sexo } from "./props"
import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerAge,
  ContainerCalculaters,
  ContainerInputsdoubles,
  ContainerSkinFolds,
  Containergenre,
  Content,
} from "./styles"

export function CalculationImc() {
  const [genre, setGenre] = useState<Sexo>()
  const [resultCalc, setResultCalc] = useState<ResultadoIMC>()

  const schema = Yup.object().shape({
    idade: Yup.string()
      .required("Digite sua idade")
      .min(1)
      .max(3)
      .required()
      .matches(/^[0-9]+$/, "Must be only digits"),
    peso: Yup.string().required("Digite triceps").min(1),
    altura: Yup.string().required("Digite biceps").min(1),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleCalculate = (form: FormDataCalc) => {
    if (!genre) return Alert.alert("Selecione um gênero")

    const newCalculation = {
      id: String(uuid.v4()),
      idade: form.idade,
      sexo: genre,
      peso: form.peso,
      altura: form.altura,
    }

    try {
      const result = calcularIMC(
        parseFloat(form.peso),
        parseFloat(form.altura),
        parseInt(form.idade),
        genre
      )
      setResultCalc(result)
      if (!result) {
        reset()
      }

      console.log("🔥", result)
      console.log("✨", newCalculation)

      Alert.alert("Calculo Feito com sucesso!")
    } catch (err) {
      console.log(err)
    }
  }

  function handlegenreButton(type: Sexo) {
    setGenre(type)
  }

  function handleClean() {
    setGenre(null)
    reset()
    setResultCalc({ diagnostico: "", imc: 0 })
    Alert.alert("Calculos Resetados")
  }

  return (
    <Container>
      <BackgroundContent>
        <Content>
          <ContainerCalculaters>
            <ResultCalculationsComponent
              colorResult={resultCalc?.diagnostico as any}
              percentageResult={
                resultCalc?.imc ? (
                  resultCalc?.imc.toString()
                ) : (
                  <Text
                    style={{
                      fontSize: 20,
                      color: "red",
                      alignSelf: "center",
                      justifyContent: "center",
                    }}
                  >
                    {`Paciente não possui Calculos`}
                  </Text>
                )
              }
              tableResult={resultCalc?.diagnostico}
            />
            <Containergenre>
              <GenreButton
                isActive={genre === "M"}
                type="M"
                onPress={() => handlegenreButton(Sexo.masculino)}
              />
              <GenreButton
                isActive={genre === "F"}
                type="F"
                onPress={() => handlegenreButton(Sexo.feminino)}
              />
            </Containergenre>
            <ContainerAge>
              <InputCalculations
                name="idade"
                type="custom"
                options={{
                  mask: "999",
                }}
                TitleCalculate="Idade"
                isActive={true}
                control={control}
                placeholder="0"
                errorInput={errors.idade && errors.idade.message}
              />
            </ContainerAge>
            <ContainerSkinFolds>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="peso"
                  type="custom"
                  options={{
                    mask: "999",
                  }}
                  TitleCalculate="Peso"
                  isActive={true}
                  control={control}
                  placeholder="0"
                  errorInput={errors.peso && errors.peso.message}
                />
              </ContainerInputsdoubles>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="altura"
                  type="custom"
                  options={{
                    mask: '9.99',
                  }}
                  TitleCalculate="Altura"
                  isActive={true}
                  control={control}
                  placeholder="0"
                  errorInput={errors.altura && errors.altura.message}
                />
              </ContainerInputsdoubles>
            </ContainerSkinFolds>
          </ContainerCalculaters>
          <ButtonContainer>
            <ContainerInputsdoubles>
              <ButtonComponent
                title={"Limpar"}
                type="clean"
                onPress={() => handleClean()}
              />
            </ContainerInputsdoubles>
            <ContainerInputsdoubles>
              <ButtonComponent
                title={"Calcular"}
                type="default"
                onPress={handleSubmit(handleCalculate)}
              />
            </ContainerInputsdoubles>
          </ButtonContainer>
        </Content>
      </BackgroundContent>
    </Container>
  )
}
