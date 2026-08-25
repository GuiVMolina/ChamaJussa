import { StyleSheet, TextStyle, ViewStyle } from "react-native";

// ══════════════════ //
//  1. DESIGN SYSTEM  //
// ══════════════════ //

const hsl = 0;

export const Colors = {
  // Brand & Backgrounds
  bgc: `hsl(${hsl}, 25%, 98%)`,
  bgc2: `hsl(${hsl}, 25%, 95%)`,
  main: `hsl(${hsl}, 75%, 45%)`,
  shadow: `hsla(${hsl}, 100%, 15%, 0.5)`,

  // Status & Badges
  blue: `hsl(220, 85%, 55%)`,
  green: `hsl(140, 70%, 40%)`,
  yellow: `hsl(55, 70%, 50%)`,

  // Neutros
  white: `hsl(${hsl}, 100%, 100%)`,
  black: `hsl(${hsl}, 100%, 5%)`,
  off: `hsl(${hsl}, 0%, 96%)`,
  border: `hsla(${hsl}, 0%, 0%, 0.1)`,
  darkerBorder: `hsl(${hsl}, 0%, 60%)`,
  inactive: `hsl(${hsl}, 40%, 70%)`,
} as const;

export const Font = {
  regular: `Montserrat_400Regular`,
  semiBold: `Montserrat_600SemiBold`,
  bold: `Montserrat_700Bold`,
} as const;

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
  borderWidth: 1,
  borderRadius: 18,
  paddingHorizontal: 12,
  width: "100%",
  borderColor: Colors.border,
  backgroundColor: Colors.off,
};

// ═══════════════ //
//  3. STYLESHEET  //
// ═══════════════ //

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
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: Colors.white,
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
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    borderColor: Colors.darkerBorder,
  },
  icon: {
    width: 40,
    height: 40,
  },

  // --- Formulários & Inputs ---
  inputArea: {
    gap: 5,
  },
  input: {
    ...baseInput,
  },
  textArea: {
    ...baseInput,
    minHeight: 96,
    paddingVertical: 12,
    textAlignVertical: "top",
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
  label: {
    ...baseText,
    fontSize: 20,
    fontFamily: Font.semiBold,
  },
});
