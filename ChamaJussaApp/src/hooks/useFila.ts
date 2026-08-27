import { useEffect, useState } from "react";
import { Fila } from "@/src/@types/fila";
import { FilaService } from "@/src/service/filaService";

export function useFila() {
  const [fila, setFila] = useState<Fila[]>([]);

  async function carregarItensFila() {
    try {
      const dados = await FilaService.listar();
      setFila(dados);
    } catch (error) {
      console.error("Erro ao carregar itens da fila:", error);
    }
  }

  useEffect(() => {
    carregarItensFila();
  }, []);

  return fila;
}
