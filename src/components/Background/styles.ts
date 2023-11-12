import { ImageBackground, Platform, StatusBar } from "react-native"
import styled from "styled-components/native"

export const isHasNotch = () => {
  if (Platform.OS === "android") {
    return (StatusBar.currentHeight && StatusBar.currentHeight + 22) || 10
  }

  return 10
}

export const Container = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  margin-top: ${isHasNotch()}px;
`
