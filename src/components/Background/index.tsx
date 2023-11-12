import React from "react"
import { Platform, SafeAreaView, StatusBar } from "react-native"
import BackGround from "../../assets/bgImage.jpg"
import { Container } from "./styles"


export const BackgroundComponent = ({ children }) => {
  return (
    <Container source={BackGround} resizeMode="cover">
      <SafeAreaView>{children}</SafeAreaView>
    </Container>
  )
}
