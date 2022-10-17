import { ColorValue } from "react-native";

interface color {
  primary: ColorValue | string;
  black: ColorValue;
  bgGrey: ColorValue;
  red: ColorValue;
}

const colors: color = {
  primary: "#66A936",
  black: "#191A1C",
  bgGrey: "#FAFAFA",
  red: "#CD221B",
};
export default colors;
