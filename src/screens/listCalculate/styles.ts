import { GestureHandlerRootView } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { BackgroundComponent } from "../../components/Background"
import { Text, View } from "react-native"

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
`

export const BackgroundContent = styled(BackgroundComponent)`
  justify-content: space-between;
`

export const ContainerTitle = styled(View)`
  width: 100%;
  align-items: center;
  margin: ${RFValue(16)}px;
`

export const Title = styled(Text)`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title_dark };
`

export const ContainerLogo = styled.View``

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 10px ${RFValue(20)}px;
`
