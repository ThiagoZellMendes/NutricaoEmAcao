import styled from "styled-components/native"
import { BackgroundComponent } from "../../../components/Background"
import { RFValue } from "react-native-responsive-fontsize"
import { View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  margin-top: 100px;
`

export const BackgroundContent = styled(BackgroundComponent)`
  justify-content: space-between;
`

export const ContentRegister = styled(View)`
  flex: 1;
  width: 100%;
`

export const ContainerForm = styled(View)`
  padding: 0px ${RFValue(20)}px 0px ${RFValue(20)}px;
  margin-bottom: ${RFValue(16)}px;
`

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 0px ${RFValue(20)}px;
`
