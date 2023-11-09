import React from "react"

import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerAge,
  ContainerCalculaters,
  ContainerInputsdoubles,
  ContainerSkinFolds,
  Content,
} from "./styles"
import { InputCalculations } from "../../../components/Forms/InputCalculations"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ButtonComponent } from "../../../components/ButtonComponent"
import { Input } from "../../../components/Forms/Input"

export function CalculationPgc() {
  const schema = Yup.object().shape({
    idade: Yup.string().trim().required("Digite sua idade"),
  })

  const handleCalculate = () => {
    console.log("Calculo feito")
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
        <Content>
          <ContainerCalculaters>
            <ContainerAge>
              <InputCalculations
                name="idade"
                TitleCalculate="Idade"
                isActive={true}
                control={control}
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
                  errorInput={errors.idade && errors.idade.message}
                />
              </ContainerInputsdoubles>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="biceps"
                  TitleCalculate="Bíceps"
                  isActive={true}
                  control={control}
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
                  errorInput={errors.idade && errors.idade.message}
                />
              </ContainerInputsdoubles>
              <ContainerInputsdoubles>
                <InputCalculations
                  name="SupraIliaca"
                  TitleCalculate="Supra Íliaca"
                  isActive={true}
                  control={control}
                  errorInput={errors.idade && errors.idade.message}
                />
              </ContainerInputsdoubles>
            </ContainerSkinFolds>
          </ContainerCalculaters>
          <ButtonContainer>
            <ButtonComponent
              title={"Calcular"}
              nameIcon="chevron-right"
              onPress={handleSubmit(handleCalculate)}
            />
          </ButtonContainer>
        </Content>
      </BackgroundContent>
    </Container>
  )
}
