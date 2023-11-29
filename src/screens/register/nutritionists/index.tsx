import { yupResolver } from "@hookform/resolvers/yup"
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { ActivityIndicator, Alert, Modal, StyleSheet, View } from "react-native"
import uuid from "react-native-uuid"
import * as Yup from "yup"
import Logo2 from "../../../assets/Logo2.svg"
import { ButtonComponent } from "../../../components/ButtonComponent"
import { InputForm } from "../../../components/InputForm"
import { NutritionistProps } from "./props"
import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerForm,
  ContainerLogo,
  Content,
} from "./styles"
import { ConfirmationModal } from "../../../components/modal"

export function RegisterNutritionists() {
  const { navigate } = useNavigation<any>()
  const [nutritionist, setNutritionist] = useState<NutritionistProps>()
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const schema = Yup.object().shape({
    firstName: Yup.string().required("digite seu nome").trim(),
    lastName: Yup.string().required("digite seu sobrenome").trim(),
    cpf: Yup.string().required("digite seu CPF").trim(),
    email: Yup.string()
      .email("email obrigartorio")
      .required("digite seu email").trim(),
    password: Yup.string().required("digite sua senha").trim(),
    passwordConfirmation: Yup.string()
      .required("confirme sua senha")
      .oneOf([Yup.ref("password")], "As senhas não coincidem ").trim(),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function handleCreateNutritionist({
    firstName,
    lastName,
    cpf,
    email,
    password,
  }: NutritionistProps) {
    try {
      setLoading(true) 
      const emailSnapshot = await firestore()
        .collection("nutritionist")
        .where("email", "==", email)
        .get()

      if (!emailSnapshot.empty) {
        setLoading(false)
        Alert.alert("Email já cadastrado")
      } else {
        const RegisterNutritionist =
          await auth().createUserWithEmailAndPassword(email, password)

        if (RegisterNutritionist) {
          await firestore()
            .collection("nutritionist")
            .add({
              id: String(uuid.v4()),
              firstName,
              lastName,
              cpf,
              email,
              password,
            })
          setIsModalVisible(true)
          setLoading(false) 
        }
      }
    } catch (error) {
      setLoading(false)

      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Email já cadastrado")
      } else {
        Alert.alert("Ocorreu um erro ao processar o cadastro")
        console.error("Erro:", error)
      }
    }
  }

  const closeModal = () => {
    setIsModalVisible(false);
    navigate('SignIn');
  };


  return (
    <Container>
      <BackgroundContent>
        <Content showsVerticalScrollIndicator={false}>
          <ContainerLogo>
            <Logo2 />
          </ContainerLogo>
          <ContainerForm>
            <InputForm
              type="custom"
              options={{
                mask: "AAAAAAAAAAAAAAAAAAAAAAAAA",
              }}
              name="firstName"
              control={control}
              placeholder={"Digite seu nome"}
              errorInput={errors.firstName && errors.firstName.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              type="custom"
              options={{
                mask: "AAAAAAAAAAAAAAAAAAAAAAAAAAA",
              }}
              name="lastName"
              control={control}
              placeholder={"Digite seu sobrenome"}
              errorInput={errors.lastName && errors.lastName.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              name="cpf"
              type="cpf"
              control={control}
              placeholder={"Digite seu cpf"}
              errorInput={errors.cpf && errors.cpf.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              type="custom"
              options={{
                mask: "**************************************",
              }}
              autoCapitalize="none"
              name="email"
              control={control}
              placeholder={"Digite seu e-mail"}
              errorInput={errors.email && errors.email.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              name="password"
              type="custom"
              options={{
                mask: "************",
              }}
              control={control}
              secureTextEntry={true}
              placeholder={"Digite sua senha"}
              errorInput={errors.password && errors.password.message}
            />
          </ContainerForm>
          <ContainerForm>
            <InputForm
              name="passwordConfirmation"
              type="custom"
              options={{
                mask: "************",
              }}
              control={control}
              secureTextEntry={true}
              placeholder={"Confirme sua senha"}
              errorInput={
                errors.passwordConfirmation &&
                errors.passwordConfirmation.message
              }
            />
          </ContainerForm>

          <ButtonContainer>
            <ButtonComponent
              type="default"
              title={"Cadastar"}
              nameIcon="chevron-right"
              onPress={handleSubmit(handleCreateNutritionist)}
            />
          </ButtonContainer>
        </Content>
      </BackgroundContent>
      {loading && (
        <Modal transparent={true} animationType="fade" visible={loading}>
          <Modal transparent={true} animationType="fade" visible={loading}>
            <View style={styles.modalContainer}>
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="green" />
              </View>
            </View>
          </Modal>
        </Modal>
      )}
      <ConfirmationModal isVisible={isModalVisible} closeModal={closeModal} />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
})
