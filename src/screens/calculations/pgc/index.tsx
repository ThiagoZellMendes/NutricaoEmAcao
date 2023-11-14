import React, { useEffect, useRef, useState } from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import { Form, UseFormHandleSubmit, useForm } from "react-hook-form"
import { Alert } from "react-native"
import uuid from "react-native-uuid"
import * as Yup from "yup"
import { ButtonComponent } from "../../../components/ButtonComponent"
import { GenreButton } from "../../../components/Forms/GenreButton"
import { InputCalculations } from "../../../components/Forms/InputCalculations"
import { ResultCalculationsComponent } from "../../../components/ResultCalculations"
import { calcularGorduraCorporal } from "./functions"
import { FormDataCalc, ResultadoGordura, Sexo } from "./props"
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

export function CalculationPgc() {
  const [genre, setGenre] = useState<Sexo>()
  const [resultCalc, setResultCalc] = useState<ResultadoGordura>(
    {} as ResultadoGordura
  )

  const schema = Yup.object().shape({
    idade: Yup.number().required("Digite sua idade"),
    triceps: Yup.number().required("Digite triceps"),
    biceps: Yup.number().required("Digite biceps"),
    subescapular: Yup.number().required("Digite subescapular"),
    suprailiaca: Yup.number().required("Digite suprailiaca"),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues: {
    //   idade: 4,
    //   triceps: 4,
    //   biceps: 4,
    //   subescapular: 4,
    //   suprailiaca: 4,
    // },
  })

  const handleCalculate = (form: FormDataCalc) => {
    console.log("jack")
    if (!genre) return Alert.alert("Selecione um gênero")

    const newCalculation = {
      id: String(uuid.v4()),
      idade: form.idade,
      sexo: genre,
      dobras: {
        triceps: form.triceps,
        biceps: form.biceps,
        subescapular: form.subescapular,
        suprailiaca: form.suprailiaca,
      },
    }

    try {
      const result = calcularGorduraCorporal(
        genre,
        form.idade,
        newCalculation.dobras
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
    setResultCalc({ categoria: "", percentual: 0 })
    Alert.alert("Calculos Resetados")
  }

  return (
    <Container>
      <BackgroundContent>
        <Content>
          <ContainerCalculaters>
            <ResultCalculationsComponent
              colorResult={resultCalc.categoria as any}
              percentageResult={
                resultCalc.percentual
                  ? resultCalc.percentual?.toFixed(2) + "%"
                  : "Não Calculado"
              }
              tableResult={resultCalc.categoria}
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
                  name="triceps"
                  TitleCalculate="Tríceps"
                  isActive={true}
                  control={control}
                  placeholder="0"
                  errorInput={errors.triceps && errors.triceps.message}
                />
              </ContainerInputsdoubles>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="biceps"
                  TitleCalculate="Bíceps"
                  isActive={true}
                  control={control}
                  placeholder="0"
                  errorInput={errors.biceps && errors.biceps.message}
                />
              </ContainerInputsdoubles>
            </ContainerSkinFolds>
            <ContainerSkinFolds>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="subescapular"
                  TitleCalculate="subescapular"
                  isActive={true}
                  control={control}
                  placeholder="0"
                  errorInput={
                    errors.subescapular && errors.subescapular.message
                  }
                />
              </ContainerInputsdoubles>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="suprailiaca"
                  TitleCalculate="Supra Íliaca"
                  isActive={true}
                  control={control}
                  placeholder="0"
                  errorInput={errors.suprailiaca && errors.suprailiaca.message}
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
                // onPress={() => console.log("Calcular")}
              />
            </ContainerInputsdoubles>
          </ButtonContainer>
        </Content>
      </BackgroundContent>
    </Container>
  )
}
