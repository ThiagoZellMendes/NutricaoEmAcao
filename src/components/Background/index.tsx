import React, { PropsWithChildren } from "react"
import { Container } from "./styles"
import BackGround from "../../assets/bgImage.jpg"

export const BackgroundComponent = ({children}) => {
  return (
    <Container source={BackGround} resizeMode="cover">
      {children}
    </Container>
  )
}
