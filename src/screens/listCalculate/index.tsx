import React from "react"

import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerLogo,
  ContainerTitle,
  Title
} from "./styles"
import { ButtonComponent } from "../../components/ButtonComponent"
import Logo2 from "../../assets/Logo2.svg"

export function ListCalculate() {
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
            title={"Indice de Massa \n Corporal"}
            nameIcon="chevron-right"
            onPress={() => console.log("teste 1")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <ButtonComponent
            title={"Percentual de \n Gordura Corporal"}
            nameIcon="chevron-right"
            onPress={() => console.log("teste 2")}
          />
        </ButtonContainer>
      </BackgroundContent>
    </Container>
  )
}
