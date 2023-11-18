import React, { useEffect, useState } from "react"

import {
  BackgroundContent,
  Container,
  ContainerAddPatients,
  ContainerList,
  ContainerLogo,
  ContainerTitle,
  FeedBackWithoutPatients,
  IconAdd,
  IconFeedBack,
  PatientsList,
  Separator,
  Title,
} from "./styles"
import { ButtonComponent } from "../../components/ButtonComponent"
import Logo2 from "../../assets/Logo2.svg"
import { DATA } from "./data"
import { PropsData } from "./props"
import { Text } from "react-native"

export function ListPatients() {
  const [pacientsData, setPacientsData] = useState<PropsData[]>([] as PropsData[])


useEffect(() => {
  setPacientsData(DATA)
}),[pacientsData]

  return (
    <Container>
      <BackgroundContent>
        <ContainerLogo>
          <Logo2 />
        </ContainerLogo>
        <ContainerTitle>
          <Title>Lista de Pacientes</Title>
        </ContainerTitle>
        <ContainerList>
          {!pacientsData || pacientsData.length === 0 ? (
            <>
              <IconFeedBack name={"activity"} />
              <FeedBackWithoutPatients>
                {`Não existem pacientes cadastrados`}
              </FeedBackWithoutPatients>
            </>
          ) : (
            <PatientsList
              data={pacientsData}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <ButtonComponent
                  type='default'
                  title={item.name}
                  nameIcon="chevron-right"
                  onPress={() => console.log("teste 1")}
                />
              )}
              ItemSeparatorComponent={() => <Separator />}
            />
          )}
        </ContainerList>
        <ContainerAddPatients>
          <IconAdd name={"plus"} />
        </ContainerAddPatients>
      </BackgroundContent>
    </Container>
  )
}
