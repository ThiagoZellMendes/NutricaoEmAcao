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
import { calcularGorduraCorporal } from "./functions"
import { FormDataCalc, ResultadoGordura, Sexo } from "./props"
import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerAge,
  ContainerCalculaters,
  ContainerInputsdoubles,
  ContainerPatient,
  ContainerSkinFolds,
  Containergenre,
  Content,
  PatientName,
  PatientTitle,
} from "./styles"

const MockPatient = {
  patientName: "José Thiago Silva Mendes",
}

export function CalculationPgc() {
  const [genre, setGenre] = useState<Sexo>()
  const [resultCalc, setResultCalc] = useState<ResultadoGordura>(
    {} as ResultadoGordura
  )

  const schema = Yup.object().shape({
    idade: Yup.string()
      .required("Digite sua idade")
      .min(1)
      .max(3)
      .required()
      .matches(/^[0-9]+$/, "Must be only digits"),
    triceps: Yup.string().required("Digite triceps").min(1),
    biceps: Yup.string().required("Digite biceps").min(1),
    subescapular: Yup.string().required("Digite subescapular").min(1),
    suprailiaca: Yup.string().required("Digite suprailiaca").min(1),
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
      dobras: {
        triceps: parseFloat(form.triceps),
        biceps: parseFloat(form.biceps),
        subescapular: parseFloat(form.subescapular),
        suprailiaca: parseFloat(form.suprailiaca),
      },
    }

    try {
      const result = calcularGorduraCorporal(
        genre,
        parseInt(form.idade),
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
        <Content showsVerticalScrollIndicator={false}>
          <ContainerCalculaters>
            <ResultCalculationsComponent
              colorResult={resultCalc.categoria as any}
              percentageResult={
                resultCalc.percentual ? (
                  resultCalc.percentual?.toFixed(2) + "%"
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
              tableResult={resultCalc.categoria}
            />
            <ContainerPatient>
              <PatientTitle>Paciente: </PatientTitle>
              <PatientName>{`${MockPatient.patientName}`}</PatientName>
            </ContainerPatient>

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
                  name="triceps"
                  type="custom"
                  options={{
                    mask: "9.999,99",
                  }}
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
                  type="custom"
                  options={{
                    mask: "9.999,99",
                  }}
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
                  type="custom"
                  options={{
                    mask: "9.999,99",
                  }}
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
                  type="custom"
                  options={{
                    mask: "9.999,99",
                  }}
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
              />
            </ContainerInputsdoubles>
          </ButtonContainer>
        </Content>
      </BackgroundContent>
    </Container>
  )
}
