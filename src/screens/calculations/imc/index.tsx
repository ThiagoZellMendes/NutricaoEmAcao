import React, { useEffect, useState } from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Alert, Text } from "react-native"
import uuid from "react-native-uuid"
import * as Yup from "yup"
import { ButtonComponent } from "../../../components/ButtonComponent"
import { GenreButton } from "../../../components/Forms/GenreButton"
import { InputCalculations } from "../../../components/Forms/InputCalculations"
import { ResultCalculationsComponent } from "../../../components/ResultCalculations"
import firestore from "@react-native-firebase/firestore"

import { calcularIMC } from "./functions"
import { FormDataCalc, ResultadoIMC, Sexo } from "./props"
import {
  BackgroundContent,
  ButtonContainer,
  ButtonContainerSave,
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
import { useRoute } from "@react-navigation/native"
import { PatientProps } from "../../globalProps"
import { ConfirmationModal } from "../../../components/modal"

export function CalculationImc() {
  const route = useRoute()
  const { patient } = route.params as { patient: PatientProps }
  const [genre, setGenre] = useState<Sexo>(patient.genre || ("" as any))
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [formValues, setFormValues] = useState({
      age: '',
      weight: '',
      height: '',
      imc: patient.imc,
      diagnosticImc: patient.diagnosticImc,
    } as PatientProps)

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const schema = Yup.object().shape({
    age: Yup.string()
      .required("Digite sua idade")
      .min(1)
      .max(3)
      .required()
      .matches(/^[0-9]+$/, "Must be only digits"),
    weight: Yup.string().required("Digite o peso").min(1),
    height: Yup.string().required("Digite a altura").min(1),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      age: patient.age,
      weight: patient.weight,
      height: patient.height,
      imc: patient.imc,
      diagnosticImc: patient.diagnosticImc,
    } as PatientProps,
    resolver: yupResolver(schema),
  })

  const handleCalculate = (form: PatientProps) => {
    if (!genre) return Alert.alert("Selecione um gênero")

    const newCalculation = {
      id: String(uuid.v4()),
      age: form.age,
      genre: genre,
      weight: form.weight,
      height: form.height,
      imc: form.imc,
      diagnosticImc: form.diagnosticImc,
    }

    try {
      const result = calcularIMC(
        parseFloat(form.weight),
        parseFloat(form.height),
        parseInt(form.age),
        genre
      )
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        age: form.age,
        genre: genre,
        weight: form.weight,
        height: form.height,
        imc: result.imc,
        diagnosticImc: result.diagnostico,
      }))
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

  function handleSavePatient() {
    firestore()
      .collection("patients")
      .doc(patient.key)
      .update({
        age: formValues.age,
        genre: genre,
        weight: formValues.weight,
        height: formValues.height,
        imc: formValues.imc,
        diagnosticImc: formValues.diagnosticImc,
       })
      .then(() => {
      <ConfirmationModal isVisible={isModalVisible} closeModal={closeModal} title={"Paciente salvo com sucesso"}/>
      })
  }

  function handlegenreButton(type: Sexo) {
    setGenre(type)
  }

  function handleClean() {
    setGenre(null),
      setFormValues({
        age: '',
        weight: '',
        height: '',
        imc: '',
        diagnosticImc: ''
      } as unknown as PatientProps)
    reset({
      age: '',
      weight: '',
      height: '',
    })
    Alert.alert("Calculos Resetados")
  }

  // useEffect(() => {
  // }, [])

  console.log(formValues)
  return (
    <Container>
      <BackgroundContent>
        <Content showsVerticalScrollIndicator={false}>
          <ContainerCalculaters>
            <ResultCalculationsComponent
              colorResult={
                (formValues?.diagnosticImc as any || '')
              }
              percentageResult={
                formValues?.imc ? (
                  patient.imc || formValues?.imc.toString()
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
              tableResult={formValues?.diagnosticImc}
            />
            <ContainerPatient>
              <PatientTitle>Paciente:</PatientTitle>
              <PatientName>{` ${patient.fullName}`}</PatientName>
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
                name="age"
                type="custom"
                options={{
                  mask: "999",
                }}
                TitleCalculate="Idade"
                isActive={true}
                control={control}
                placeholder="0"
                errorInput={errors.age && errors.age.message}
              />
            </ContainerAge>
            <ContainerSkinFolds>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="weight"
                  type="custom"
                  options={{
                    mask: "999",
                  }}
                  TitleCalculate="Peso"
                  isActive={true}
                  control={control}
                  placeholder="0"
                  errorInput={errors.weight && errors.weight.message}
                />
              </ContainerInputsdoubles>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="height"
                  type="custom"
                  options={{
                    mask: "9.99",
                  }}
                  TitleCalculate="Altura"
                  isActive={true}
                  control={control}
                  placeholder="0"
                  errorInput={errors.height && errors.height.message}
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
          <ButtonContainerSave>
            <ButtonComponent
              title={"Salvar Calculos do paciente"}
              type="save"
              onPress={handleSavePatient}
            />
          </ButtonContainerSave>
        </Content>
      </BackgroundContent>
    </Container>
  )
}
