import { StyleSheet, TextStyle, ViewStyle } from "react-native";

// ══════════════════ //
//  1. DESIGN SYSTEM  //
// ══════════════════ //

const hsl = "0";

export const Colors = {
  // Brand & Backgrounds
  bgc: `hsl(${hsl}, 25%, 98%)`,
  bgc2: `hsl(${hsl}, 25%, 95%)`,
  main: `hsl(${hsl}, 75%, 40%)`,
  inactive: `hsla(${hsl}, 75%, 40%, 0.1)`,
  shadow: `hsla(${hsl}, 100%, 15%, 0.5)`,

  // Status & Badges
  red: `hsl(0, 75%, 40%)`,
  purple: `hsl(270, 75%, 40%)`,
  blue: `hsl(220, 75%, 40%)`,
  green: `hsl(140, 75%, 40%)`,
  yellow: `hsl(55, 75%, 40%)`,

  // Neutros
  white: `hsl(${hsl}, 100%, 100%)`,
  black: `hsl(${hsl}, 100%, 5%)`,
  off: `hsl(${hsl}, 0%, 96%)`,
  border: `hsla(${hsl}, 0%, 0%, 0.1)`,
  darkerBorder: `hsl(${hsl}, 0%, 60%)`,
};

export const Font = {
  regular: `Montserrat_400Regular`,
  semiBold: `Montserrat_600SemiBold`,
  bold: `Montserrat_700Bold`,
};

// ═════════════════ //
//  2. ESTILOS BASE  //
// ═════════════════ //

const baseText: TextStyle = {
  flexShrink: 1,
  color: Colors.black,
  fontFamily: Font.regular,
};

const baseButton: ViewStyle = {
  height: 50,
  borderRadius: 18,
  paddingHorizontal: 16,
  alignItems: "center",
  justifyContent: "center",
};

const baseInput: ViewStyle = {
  ...baseText,
  height: 56,
  borderWidth: 1,
  borderRadius: 18,
  paddingHorizontal: 12,
  width: "100%",
  borderColor: Colors.border,
  backgroundColor: Colors.off,
};

// ═══════════════ //
//  3. STYLESHEET  //
// ═══════════════ //'

export const theme = StyleSheet.create({
  // --- Layout & Containers ---
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.bgc,
  },
  navHeight: {
    height: 80,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  side: {
    gap: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  column: {
    gap: 20,
  },
  list: {
    gap: 5,
  },
  scroll: {
    gap: 10,
    paddingBottom: 20,
  },
  spaceBetween: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  width: {
    width: "100%",
  },
  flex: {
    flex: 1,
  },
  line: {
    height: 2,
    borderRadius: 999,
    width: "100%",
    backgroundColor: Colors.border,
  },
  safeArea: {
    paddingHorizontal: 20,
  },

  // --- Visual & Componentes ---
  card: {
    gap: 10,
    padding: 24,
    borderWidth: 1,
    borderRadius: 24,
    width: "100%",
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  status: {
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    fontFamily: Font.bold,
  },
  img: {
    flex: 1,
    minHeight: 240,
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.border,
  },
  imgPreview: {
    width: "100%",
    height: "100%",
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconUsuario: {
    width: 120,
    height: 120,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: Colors.main,
    backgroundColor: Colors.inactive,
    alignItems: "center",
    justifyContent: "center",
  },
  iconLetras: {
    fontSize: 40,
    color: Colors.main,
    fontFamily: Font.semiBold,
  },

  // --- Formulários & Inputs ---
  inputArea: {
    gap: 5,
    width: "100%",
  },
  label: {
    fontSize: 20,
    fontFamily: Font.semiBold,
    color: Colors.black,
  },
  input: {
    ...baseInput,
  },
  textArea: {
    width: "100%",
    minHeight: 120,
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderColor: Colors.border,
    backgroundColor: Colors.off,
    color: Colors.black,
    fontFamily: Font.regular,
    fontSize: 16,
    textAlignVertical: "top",
    flexShrink: 0,
  },
  // Container do Picker
  pickerContainer: { ...baseInput },
  pickerItem: {
    ...baseText,
    color: Colors.black,
  },
  pickerItemPlaceholder: {
    ...baseText,
    color: Colors.darkerBorder,
  },

  // --- Botões ---
  button: {
    ...baseButton,
    backgroundColor: Colors.main,
  },
  buttonOff: {
    ...baseButton,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: Colors.darkerBorder,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: Font.bold,
  },
  buttonTextOff: {
    fontSize: 20,
    color: Colors.darkerBorder,
    fontFamily: Font.regular,
  },

  // --- Tipografia ---
  h1: {
    ...baseText,
    fontSize: 28,
    fontFamily: Font.bold,
  },
  h2: {
    ...baseText,
    fontSize: 24,
    fontFamily: Font.semiBold,
  },
  h3: {
    ...baseText,
    fontSize: 20,
    fontFamily: Font.semiBold,
  },
  h4: {
    ...baseText,
    fontSize: 20,
  },
  p: {
    ...baseText,
    fontSize: 16,
  },
  textCenter: {
    textAlign: "center",
  },
});
