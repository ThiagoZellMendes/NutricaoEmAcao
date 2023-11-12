import React, { useState } from "react"

import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerAge,
  ContainerCalculaters,
  ContainerInputsdoubles,
  ContainerSex,
  ContainerSkinFolds,
  Content,
} from "./styles"
import { InputCalculations } from "../../../components/Forms/InputCalculations"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ButtonComponent } from "../../../components/ButtonComponent"
import { Input } from "../../../components/Forms/Input"
import { SexButton } from "../../../components/Forms/SexButton"
import { Alert } from "react-native"
import { ResultCalculationsComponent } from "../../../components/ResultCalculations"
import { calcularGorduraCorporal } from "./functions"

export function CalculationPgc() {
  const [sex, setSex] = useState("")
  const [isActive, setIsActive] = useState(null)
  const [] = useState({
     
  })

  const schema = Yup.object().shape({
    idade: Yup.string().trim().required("Digite sua idade"),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const handleCalculate = () => {
    Alert.alert("Calculo Feito com sucesso!")
  }

  function handleSexButton(type: "M" | "F") {
    setSex(type)
  }

  function handleClean() {
    setSex("")
    reset()
    Alert.alert("Calculos Resetados")
  }

  return (
    <Container>
      <BackgroundContent>
        <Content>
          <ContainerCalculaters>
            <ResultCalculationsComponent
              colorResult="Excelente"
              percentageResult="24.23%"
              tableResult="Bom 24 - 26%"
            />
            <ContainerSex>
              <SexButton
                isActive={sex === "M"}
                type="M"
                onPress={() => handleSexButton("M")}
              />
              <SexButton
                isActive={sex === "F"}
                type="F"
                onPress={() => handleSexButton("F")}
              />
            </ContainerSex>
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
                  errorInput={errors.idade && errors.idade.message}
                />
              </ContainerInputsdoubles>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="biceps"
                  TitleCalculate="Bíceps"
                  isActive={true}
                  control={control}
                  placeholder="0"
                  errorInput={errors.idade && errors.idade.message}
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
                  errorInput={errors.idade && errors.idade.message}
                />
              </ContainerInputsdoubles>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="SupraIliaca"
                  TitleCalculate="Supra Íliaca"
                  isActive={true}
                  control={control}
                  placeholder="0"
                  errorInput={errors.idade && errors.idade.message}
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
                // onPress={handleSubmit(handleCalculate)}
                onPress={() => calcularGorduraCorporal}
              />
            </ContainerInputsdoubles>
          </ButtonContainer>
        </Content>
      </BackgroundContent>
    </Container>
  )
}
