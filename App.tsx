import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import { RoutersApp } from "./src/routes/app.routers"
import { ThemeProvider } from "styled-components/native"
import theme from "./src/global/styles/theme"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <RoutersApp />
    </ThemeProvider>
  )
}
