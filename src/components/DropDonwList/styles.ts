import styled from 'styled-components/native';
import { Dropdown } from 'react-native-element-dropdown';
import { RFValue } from 'react-native-responsive-fontsize';


export const DropdownList = styled(Dropdown).attrs(({ theme }) => ({
  placeholderStyle:{color: theme.colors.text},
  selectedTextStyle:{color: theme.colors.title_dark},
  // inputSearchStyle:{color: theme.colors.text},
  iconStyle:{ width: 20,
  height: 20},
  maxHeight: 300,
  }))
`
  width:100%;
  padding:  15px 16px;
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.title_dark};
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.text};
`;