import type { Carta } from "../data/cartas";

export const getSuggestions = async (cartas: Carta[]): Promise<string[]> => {
  const suggestions = [];

  for (const carta of cartas) {
    suggestions.push(carta.name);
    suggestions.push(`${carta.id}. ${carta.silaba}`);
  }

  return Array.from(new Set(suggestions));
};
