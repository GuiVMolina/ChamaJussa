import axios from "axios";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const host = Platform.OS === "android" ? "10.0.2.2" : "localhost";

const enderecoApi =
  process.env.EXPO_PUBLIC_API_URL || `http://${host}:5015/api/`;

export const api = axios.create({
  baseURL: enderecoApi,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const tokenKey = process.env.EXPO_PUBLIC_TOKEN_KEY || "Token";
  const token = await AsyncStorage.getItem(tokenKey);

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
