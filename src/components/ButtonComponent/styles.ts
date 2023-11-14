import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"
import { Feather } from "@expo/vector-icons"
import { ButtonComponentPropsStyles } from "./props"
// import DropShadow from "react-native-drop-shadow";

export const Container = styled.View<ButtonComponentPropsStyles>`
  height: ${RFValue(45)}px;
  border-radius: 5px;
  ${({ type }) =>
    type === "default" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
  ${({ type }) =>
    type === "clean" &&
    css`
      background-color: ${({ theme }) => theme.colors.genreMan};
    `}
`

export const Button = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

// export const ShadownButton = styled(DropShadow).attrs({
//   style: {
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//   },
//   shadowOpacity: 0.6,
//   shadowRadius: 3,
// })``;

export const Icon = styled(Feather)`
  margin-right: ${RFValue(10)}px;
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
`

export const Text = styled.Text`
  width: 100%;
  text-align: center;
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shape};
`
