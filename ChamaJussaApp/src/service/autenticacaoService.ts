import { Login, LoginResponse } from "../@types/autenticacao";
import { api } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const autenticacaoService = {
  async login(dados: Login): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>("Autenticacao/login", dados);

    if (data?.token) {
      const tokenKey = process.env.EXPO_PUBLIC_TOKEN_KEY || "Token";
      await AsyncStorage.setItem(tokenKey, data.token);
    }

    return data;
  },
};
