import { RectButtonProps } from "react-native-gesture-handler";

export interface SocialButtonProps extends RectButtonProps {
  title: string;
  nameIcon: string;
  onPress: () => void;
}