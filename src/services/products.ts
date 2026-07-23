import type { ProductsResponse } from "../types/products";

const URL = "/api/products";

export async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}
