import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
