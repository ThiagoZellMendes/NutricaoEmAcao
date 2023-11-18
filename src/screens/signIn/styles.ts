import { View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { BackgroundComponent } from "../../components/Background"

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
`

export const BackgroundContent = styled(BackgroundComponent)`

`

export const Content = styled.View`
  align-items: center;
  margin: 0 ${RFValue(20)}px ;
`

export const ButtonContainer = styled.View`
  width: 100%;
`

export const ContainerLogo = styled.View`
  margin: ${RFValue(33)}px 0;
`

export const ContainerForm = styled(View)`
  width: 100%;
  margin-bottom: ${RFValue(16)}px;
`

export const ContainerLink = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``

export const TextLink = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-top: ${RFValue(10)}px;
`
