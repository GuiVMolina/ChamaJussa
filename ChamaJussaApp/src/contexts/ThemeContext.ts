import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState, useEffect } from "react";

export const getColors = (hsl: string = "0") => ({
  bgc: `hsl(${hsl}, 25%, 98%)`,
  bgc2: `hsl(${hsl}, 25%, 95%)`,
  main: `hsl(${hsl}, 75%, 40%)`,
  inactive: `hsla(${hsl}, 75%, 40%, 0.1)`,
  shadow: `hsla(${hsl}, 100%, 15%, 0.5)`,
  red: `hsl(0, 75%, 40%)`,
  purple: `hsl(270, 75%, 40%)`,
  blue: `hsl(220, 75%, 40%)`,
  green: `hsl(140, 75%, 40%)`,
  yellow: `hsl(55, 75%, 40%)`,
  white: `hsl(${hsl}, 100%, 100%)`,
  black: `hsl(${hsl}, 100%, 5%)`,
  off: `hsl(${hsl}, 0%, 96%)`,
  border: `hsla(${hsl}, 0%, 0%, 0.1)`,
  darkerBorder: `hsl(${hsl}, 0%, 60%)`,
});

export const Font = {
  regular: `Montserrat_400Regular`,
  semiBold: `Montserrat_600SemiBold`,
  bold: `Montserrat_700Bold`,
};

type ThemeContextType = {
  hue: string;
  colors: ReturnType<typeof getColors>;
  mudarCor: (novaCor: string) => Promise<void>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [hue, setHue] = useState<string>("0");

  useEffect(() => {
    const carregarTema = async () => {
      const corSalva = await AsyncStorage.getItem("cor");
      if (corSalva) setHue(corSalva);
    };
    carregarTema();
  }, []);

  const mudarCor = async (novaCor: string) => {
    setHue(novaCor);
    await AsyncStorage.setItem("cor", novaCor);
  };

  const colors = getColors(hue);

  return React.createElement(
    ThemeContext.Provider,
    { value: { hue, colors, mudarCor } },
    children,
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
}
