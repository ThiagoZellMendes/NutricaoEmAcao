import { RectButtonProps } from "react-native-gesture-handler"

export interface ButtonComponentProps extends RectButtonProps {
  title: string
  nameIcon?: string
  onPress: () => void
  type: "clean" | "default"
}

export interface ButtonComponentPropsStyles extends RectButtonProps{
  type: "clean" | "default"
}
