import { createContext, createElement, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import {
  AuthContextData,
  Login,
  Usuario,
  UsuarioPayload,
} from "@/src/@types";
import { router } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { autenticacaoService } from "@/src/service/autenticacaoService";

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function decodificarToken(token: string): Usuario | null {
  try {
    const decoded = jwtDecode<UsuarioPayload>(token);
    return {
      nome: decoded[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
      ],
      email:
        decoded[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
        ],
    };
  } catch {
    return null;
  }
}

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY)
      .then((tokenSalvo) => {
        if (tokenSalvo) {
          setToken(tokenSalvo);
          setUsuario(decodificarToken(tokenSalvo));
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar token:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function login(dados: Login) {
    const resposta = await autenticacaoService.login(dados);

    if (resposta.token) {
      await AsyncStorage.setItem(process.env.EXPO_PUBLIC_TOKEN_KEY, resposta.token);
      setToken(resposta.token);
      setUsuario(decodificarToken(resposta.token));
    }
  }

  async function logout() {
    await AsyncStorage.removeItem(process.env.EXPO_PUBLIC_TOKEN_KEY);
    setToken(null);
    setUsuario(null);
    router.replace("/login");
  }

  return createElement(
    AuthContext.Provider,
    { value: { usuario, token, loading, login, logout } },
    children,
  );
};

export function useAuth() {
  return useContext(AuthContext);
}