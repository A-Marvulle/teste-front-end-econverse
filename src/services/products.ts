import type { ProductsResponse } from "../types/products";

const URL = `${import.meta.env.VITE_API_URL}/produtos.json`;

export async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}
