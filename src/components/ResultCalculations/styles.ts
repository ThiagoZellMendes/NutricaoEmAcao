import styled from "styled-components/native"
import { PropsResultComponentStyle } from "./props"
import { RFValue } from "react-native-responsive-fontsize"
import { css } from "styled-components"

export const Container = styled.View`
  height: ${RFValue(155)}px;
  width: 100%;
  border-radius: 4px;
  border: solid 2px;
  border-color: ${({ theme }) => theme.colors.title};
  margin: ${RFValue(20)}px 0 ${RFValue(20)}px 0;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const TextResultPercentage = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  /* font-style: oblique; */
  color: ${({ theme }) => theme.colors.genreMan};
  margin-top: ${RFValue(54)}px;
`

export const ContainerResult = styled.View<PropsResultComponentStyle>`
  height: ${RFValue(32)}px;
  width: ${RFValue(191)}px;
  align-items: center;
  margin-top: ${RFValue(20)}px;
  justify-content: center;

  ${({ colorResult }) =>
    colorResult === "Muito Baixo" &&
    css`
      background-color: ${({ theme }) => theme.colors.MuitoBaixo};
      border-radius: 4px;
      border: solid 2px;
      border-color: ${({ theme }) => theme.colors.title};
    `}
  ${({ colorResult }) =>
    colorResult === "Excelente" &&
    css`
      background-color: ${({ theme }) => theme.colors.Excelente};
      border-radius: 4px;
      border: solid 2px;
      border-color: ${({ theme }) => theme.colors.title};
    `}
  ${({ colorResult }) =>
    colorResult === "Muito Bom" &&
    css`
      background-color: ${({ theme }) => theme.colors.MuitoBom};
      border-radius: 4px;
      border: solid 2px;
      border-color: ${({ theme }) => theme.colors.title};
    `}
  ${({ colorResult }) =>
    colorResult === "Bom" &&
    css`
      background-color: ${({ theme }) => theme.colors.Bom};
      border-radius: 4px;
      border: solid 2px;
      border-color: ${({ theme }) => theme.colors.title};
    `}
  ${({ colorResult }) =>
    colorResult === "Adequado" &&
    css`
      background-color: ${({ theme }) => theme.colors.Adequado};
      border-radius: 4px;
      border: solid 2px;
      border-color: ${({ theme }) => theme.colors.title};
    `}
  ${({ colorResult }) =>
    colorResult === "Moderadamente Alto" &&
    css`
      background-color: ${({ theme }) => theme.colors.ModeradamenteAlto};
      border-radius: 4px;
      border: solid 2px;
      border-color: ${({ theme }) => theme.colors.title};
    `}
  ${({ colorResult }) =>
    colorResult === "Alto" &&
    css`
      background-color: ${({ theme }) => theme.colors.Alto};
      border-radius: 4px;
      border: solid 2px;
      border-color: ${({ theme }) => theme.colors.title};
    `}
  ${({ colorResult }) =>
    colorResult === "Muito Alto" &&
    css`
      background-color: ${({ theme }) => theme.colors.MuitoAlto};
      border-radius: 4px;
      border: solid 2px;
      border-color: ${({ theme }) => theme.colors.title};
    `}
`

export const TextResultTable = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`
