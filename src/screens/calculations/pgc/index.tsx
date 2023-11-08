import React from "react"

import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerAge,
} from "./styles"
import { InputCalculations } from "../../../components/Forms/InputCalculations"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ButtonComponent } from "../../../components/ButtonComponent"

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
        <ContainerAge>
          <InputCalculations
            name="idade"
            isActive={true}
            placeholder="Anos"
            control={control}
            errorInput={errors.idade && errors.idade.message}
          />
        </ContainerAge>
        <ButtonContainer>
          <ButtonComponent
            title={"Calcular"}
            nameIcon="chevron-right"
            onPress={handleSubmit(handleCalculate)}
          />
        </ButtonContainer>
      </BackgroundContent>
    </Container>
  )
}
