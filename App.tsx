import { StatusBar } from "react-native"
import "react-native-gesture-handler"
import { ThemeProvider } from "styled-components/native"
import theme from "./src/global/styles/theme"
import { RoutersApp } from "./src/routes/app.routers"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <RoutersApp />
    </ThemeProvider>
  )
}
