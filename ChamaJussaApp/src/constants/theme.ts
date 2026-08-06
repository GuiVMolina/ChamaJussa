import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export const Colors = {
  bgc: "hsl(210, 15%, 95%)",
  red: "hsl(355, 90%, 60%)",
  green: "hsl(160, 85%, 40%)",
  blue: "hsl(215, 90%, 60%)",
  white: "hsl(0, 100%, 100%)",
  black: "hsl(215, 100%, 5%)",
  statusAberta: "hsla(215, 90%, 60%, 0.15)",
  off: "hsl(0, 0%, 95%)",
  border: "hsl(0, 0%, 85%)",
  darkerBorder: "hsl(0, 0%, 70%)",
};

const Font = {
  regular: "Montserrat_400Regular",
  semiBold: "Montserrat_600SemiBold",
  bold: "Montserrat_700Bold",
};

export const Container: ViewStyle = {
  flex: 1,
  padding: 20,
  alignItems: "center",
  backgroundColor: Colors.bgc,
};

export const Button: ViewStyle = {
  padding: 10,
  borderRadius: 10,
  alignItems: "center",
};

export const ButtonOff: ViewStyle = {
  padding: 10,
  borderRadius: 10,
  alignItems: "center",
  borderWidth: 1,
  borderColor: Colors.darkerBorder,
};

export const ButtonText: TextStyle = {
  fontSize: 20,
  color: "white",
  fontFamily: Font.bold,
};

export const ButtonTextOff: TextStyle = {
  fontSize: 20,
  color: Colors.darkerBorder,
  fontFamily: Font.regular,
};

export const ButtonArea: ViewStyle = {
  gap: 10,
  flexWrap: "wrap",
  flexDirection: "row",
};

export const H1: TextStyle = {
  fontSize: 28,
  fontFamily: Font.bold,
};

export const H2: TextStyle = {
  fontSize: 24,
  fontFamily: Font.semiBold,
};

export const H3: TextStyle = {
  fontSize: 20,
  fontFamily: Font.semiBold,
};

export const H4: TextStyle = {
  fontSize: 20,
  fontFamily: Font.regular,
};

export const P: TextStyle = {
  fontSize: 16,
  fontFamily: Font.regular,
};

export const Label: TextStyle = {
  fontSize: 20,
  fontFamily: Font.semiBold,
};

export const Input: TextStyle = {
  padding: 10,
  fontFamily: Font.regular,
  backgroundColor: Colors.off,
  borderWidth: 1,
  borderRadius: 10,
  borderColor: Colors.border,
};

export const TextArea: TextStyle = {
  height: 160,
  textAlignVertical: "top",
};

export const InputArea: ViewStyle = {
  gap: 5,
};

export const Card: ViewStyle = {
  gap: 10,
  borderRadius: 20,
  paddingVertical: 40,
  paddingHorizontal: 20,
  backgroundColor: Colors.white,
  borderWidth: 1,
  borderColor: Colors.border,
  shadowColor: Colors.black,
  elevation: 5,
};

export const Status: TextStyle = {
  padding: 10,
  fontSize: 16,
  borderRadius: 10,
  fontFamily: Font.bold,
};

export const Center: ViewStyle = {
  gap: 5,
  alignItems: "center",
};

export const Row: ViewStyle = {
  gap: 5,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const Side: ViewStyle = {
  gap: 20,
  alignItems: "center",
  flexDirection: "row",
};

export const Column: ViewStyle = {
  gap: 20,
};

export const Line: ViewStyle = {
  height: 2,
  width: "100%",
  backgroundColor: Colors.border,
};

export const Img: ImageStyle = {
  height: 150,
  width: "100%",
  borderWidth: 1,
  borderRadius: 10,
  borderColor: Colors.darkerBorder,
};

export const Icon: ImageStyle = {
  width: 40,
  height: 40,
  objectFit: "contain",
};
