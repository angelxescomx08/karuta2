import { cartas } from "@/app/data/cartas";
import { getSuggestions } from "@/app/helpers/get-suggestions";

describe("getSuggestions", () => {
	it("Should return an array", async () => {
		const cards = Array.from(cartas.values());
		const suggestions = await getSuggestions(cards);

		expect(suggestions).toBeInstanceOf(Array);
	});

	it("Should have 188 suggestions", async () => {
		const cards = Array.from(cartas.values());
		const suggestions = await getSuggestions(cards);
		expect(suggestions.length).toBe(188);
	});
});
