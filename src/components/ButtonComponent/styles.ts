import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { Feather } from "@expo/vector-icons"

export const Button = styled(RectButton)`
  height: ${RFValue(45)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
`

export const Icon = styled(Feather)`
  margin-right: ${RFValue(10)}px;
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
`

export const Text = styled.Text`
  flex: 1;
  margin-left: 40px;
  text-align: center;
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shape};
`
