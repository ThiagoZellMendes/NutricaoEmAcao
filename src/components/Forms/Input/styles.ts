import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  width:100%;
  padding:  15px 16px;
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.title_dark};
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.text};
`;