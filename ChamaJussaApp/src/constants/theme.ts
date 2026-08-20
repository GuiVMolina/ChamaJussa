import { StyleSheet, TextStyle, ViewStyle } from "react-native";

// ════════════════════════════════ //
//  1. DESIGN (Cores e Tipografia)  //
// ════════════════════════════════ //

export const Colors = {
  // Cores Principais
  bgc: "hsl(215, 25%, 98%)",
  bgc2: "hsl(215, 25%, 95%)",
  red: "hsl(0, 75%, 45%)",

  // Status & Alertas
  green: "hsl(160, 85%, 40%)",
  yellow: "hsl(55, 50%, 60%)",
  statusAberta: "hsla(215, 90%, 60%, 0.15)",
  statusEmAndamento: "hsla(55, 75%, 60%, 0.15)",
  statusConcluida: "hsla(135, 90%, 60%, 0.15)",

  // Neutros
  white: "hsl(0, 100%, 100%)",
  black: "hsl(215, 100%, 5%)",
  off: "hsl(0, 0%, 95%)",
  border: "hsl(0, 0%, 85%)",
  darkerBorder: "hsl(0, 0%, 70%)",
  inactive: "hsl(215, 40%, 70%)",
} as const;

export const Font = {
  regular: "Montserrat_400Regular",
  semiBold: "Montserrat_600SemiBold",
  bold: "Montserrat_700Bold",
} as const;

// ═════════════════ //
// 2. ESTILOS BASE   //
// ═════════════════ //

const baseText: TextStyle = {
  fontFamily: Font.regular,
  color: Colors.black,
};

const baseButton: ViewStyle = {
  height: 50,
  padding: 10,
  borderRadius: 16,
  alignItems: "center",
  justifyContent: "center",
};

// ═══════════════ //
// 3. STYLESHEET   //
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
    gap: 5,
    alignItems: "center",
  },
  row: {
    gap: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  side: {
    gap: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  column: {
    gap: 20,
  },
  scroll: {
    gap: 10,
  },
  spaceBetween: {
    width: "100%",
    justifyContent: "space-between",
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: Colors.border,
  },
  safeArea: {
    paddingHorizontal: 20,
  },

  // --- Visual & Componentes Gerais ---
  card: {
    gap: 10,
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: Colors.black,
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
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.darkerBorder,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  // --- Formulários & Inputs ---
  inputArea: {
    gap: 5,
  },
  input: {
    ...baseText,
    padding: 10,
    backgroundColor: Colors.off,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.border,
  },
  textArea: {
    height: 160,
    textAlignVertical: "top",
  },

  // --- Botões ---
  button: {
    ...baseButton,
  },
  buttonOff: {
    ...baseButton,
    borderWidth: 1,
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

// ════════════════ //
// 4. EXPORTAÇÕES   //
// ════════════════ //

export const {
  // Layout
  container: Container,
  navHeight: NavHeight,
  center: Center,
  row: Row,
  side: Side,
  column: Column,
  scroll: Scroll,
  spaceBetween: SpaceBetween,
  line: Line,
  safeArea: SafeArea,

  // Componentes
  card: Card,
  status: Status,
  img: Img,
  icon: Icon,

  // Form & Inputs
  inputArea: InputArea,
  input: Input,
  textArea: TextArea,

  // Botões
  button: Button,
  buttonOff: ButtonOff,
  buttonText: ButtonText,
  buttonTextOff: ButtonTextOff,

  // Tipografia
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  label: Label,
} = theme;
