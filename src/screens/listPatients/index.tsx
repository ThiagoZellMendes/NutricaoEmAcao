import React, { useEffect, useState } from "react"

import Logo2 from "../../assets/Logo2.svg"
import { ButtonComponent } from "../../components/ButtonComponent"
import { DATA } from "./data"
import { PropsData } from "./props"
import firestore from "@react-native-firebase/firestore"
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
  const [pacientsData, setPacientsData] = useState([])

  const navigation = useNavigation<any>()


 function getPatients() {
   try {
     firestore()
     .collection("patients")
     .onSnapshot(onSnapshot  => {
       const patientsForData = []
       onSnapshot.forEach(documentSnapshot => {
         patientsForData.push({
           ...documentSnapshot.data(),
           key: documentSnapshot.id,
          });
        });
        setPacientsData(patientsForData);
      });
   }catch(error){

    }
  
 }

 useEffect(() => {
  getPatients();
}, []);

  console.log(pacientsData)

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
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ButtonComponent
                  type="default"
                  title={item.fullName}
                  nameIcon="chevron-right"
                  onPress={() => navigation.navigate("PatientDetails", { patient: item })}
                />
              )}
              ItemSeparatorComponent={() => <Separator />}
            />
          )}
        </ContainerList>
        <ContainerAddPatients onPress={() => navigation.navigate("RegisterPatients")}>
          <IconAdd
            name={"plus"}
          />
        </ContainerAddPatients>
      </BackgroundContent>
    </Container>
  )
}
