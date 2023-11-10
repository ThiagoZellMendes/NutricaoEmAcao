import { Feather } from "@expo/vector-icons"
import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"
import { InputForm } from "../../InputForm"
import { TextInput } from "react-native"

interface ContainerProps {
  isActive: boolean
}

export const Container = styled.View<ContainerProps>`
  height: 70px;
  border-radius: 2px;
  border: 3px;
  border-color: ${({theme}) => theme.colors.success_light};
`

export const Content = styled.View`
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
`

export const Input = styled(TextInput)`
  width: 100%;
  height: 100%;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  padding-right: 10px;

`
export const TextCalculater = styled.Text`
  position: absolute;
  margin: 5px;
  font-size: ${RFValue(10)}px;
  font-weight: bold;
`

export const ErrorInput = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.attention};
  margin: ${RFValue(1)}px 0;
`
