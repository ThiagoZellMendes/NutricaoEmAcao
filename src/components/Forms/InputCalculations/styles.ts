import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";



interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

`;
export const ButtonComponent = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
`;
