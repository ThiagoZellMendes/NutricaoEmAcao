import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { BackgroundComponent } from '../../../components/Background';
import { Platform, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(GestureHandlerRootView)`
 flex: 1;
`;

export const BackgroundContent = styled(BackgroundComponent)`
  justify-content: space-between;
`

export const ContainerAge = styled(View)`
  margin-top: 250px;
`


export const ButtonContainer = styled.View`
  width: 100%;
  padding: 0px ${RFValue(20)}px;
  margin-bottom: ${() => Platform.OS === 'android' ? '16px' : '0px'};
`
