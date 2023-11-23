import React from "react"

import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerLogo,
  ContainerTitle,
  Title,
} from "./styles"
import { ButtonComponent } from "../../components/ButtonComponent"
import Logo2 from "../../assets/Logo2.svg"
import { useNavigation } from "@react-navigation/native"

export function CalculateList() {
  const navigation = useNavigation<any>()
  return (
    <Container>
      <BackgroundContent>
        <ContainerLogo>
          <Logo2 />
        </ContainerLogo>
        <ContainerTitle>
          <Title>Escolha uma opção</Title>
        </ContainerTitle>
        <ButtonContainer>
          <ButtonComponent
            type="default"
            title={"Indice de Massa \n Corporal"}
            nameIcon="chevron-right"
            onPress={() => navigation.navigate("CalculationImc")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <ButtonComponent
            type="default"
            title={"Percentual de \n Gordura Corporal"}
            nameIcon="chevron-right"
            onPress={() => navigation.navigate("CalculationPgc")}
          />
        </ButtonContainer>
      </BackgroundContent>
    </Container>
  )
}
