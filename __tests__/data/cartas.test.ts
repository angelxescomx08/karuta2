import { cartas, cartasArray } from "@/app/data/cartas";

describe("Cartas", () => {
	describe("cartasArray", () => {
		it("Should return a list of cards", () => {
			expect(cartasArray).toBeInstanceOf(Array);
		});

		it("Should return a list of cards with 100 elements", () => {
			expect(cartasArray).toHaveLength(100);
		});

		it("Should return same cards", () => {
			expect(cartasArray[0]).toEqual(cartas.get("Akino"));
		});
	});

	describe("cartas", () => {
		it("Should be a Map", () => {
			expect(cartas).toBeInstanceOf(Map);
		});
	});
});
