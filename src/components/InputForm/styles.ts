import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  /* padding: 0 45px; */
`;

export const ErrorInput = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.attention};
  /* margin: 2px 0; */
`;