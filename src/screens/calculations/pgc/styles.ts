import { GestureHandlerRootView } from "react-native-gesture-handler"
import styled from "styled-components/native"
import { BackgroundComponent } from "../../../components/Background"
import { Platform, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
`

export const BackgroundContent = styled(BackgroundComponent)``

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: 0 ${RFValue(16)}px;
`
export const ContainerAge = styled(View)`
  align-self: center;
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
  margin-top: 250px;
`
export const ContainerSkinFolds = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(20)}px;
`

export const ContainerCalculaters = styled.View``

export const ContainerInputsdoubles = styled.View`
  width: ${RFValue(130)}px;
`

export const ButtonContainer = styled.View`
  width: 100%;
  padding: ${RFValue(20)}px;
  margin-bottom: ${() => (Platform.OS === "android" ? "16px" : "0px")};
`
