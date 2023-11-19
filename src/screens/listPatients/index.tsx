import React, { useEffect, useState } from "react"

import Logo2 from "../../assets/Logo2.svg"
import { ButtonComponent } from "../../components/ButtonComponent"
import { DATA } from "./data"
import { PropsData } from "./props"
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
import { useNavigation } from "@react-navigation/native"

export function ListPatients() {
  const [pacientsData, setPacientsData] = useState<PropsData[]>(
    [] as PropsData[]
  )

  const navigation = useNavigation<any>()

  useEffect(() => {
    setPacientsData(DATA)
  }),
    [pacientsData]

  return (
    <Container>
      <BackgroundContent>
        <ContainerLogo>
          <Logo2 />
        </ContainerLogo>
        <ContainerTitle>
          <Title>Lista de Pacientes:</Title>
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
                  type="default"
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
          <IconAdd name={"plus"} onPress={() => navigation.navigate('RegisterPatients')}/>
        </ContainerAddPatients>
      </BackgroundContent>
    </Container>
  )
}
