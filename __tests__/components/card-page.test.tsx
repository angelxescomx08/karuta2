import { CardPage } from "@/app/components/card-page";
import { cartasArray } from "@/app/data/cartas";
import { cleanup, render, screen } from "@testing-library/react";

describe("CardPage", () => {
	const firstCard = cartasArray[0];
	const lastCard = cartasArray[cartasArray.length - 1];

	afterEach(cleanup);

	it("Should render the card page with id", async () => {
		render(await CardPage({ id: firstCard.id }));
		expect(screen.getByText(`${firstCard.japanese}`.trim())).toBeDefined();
		expect(
			screen.getByText(`Romaji: ${firstCard.romaji}`.trim()),
		).toBeDefined();
		expect(
			screen.getByText(`Author (Kanjis): ${firstCard.authorJapanese}`.trim()),
		).toBeDefined();
		expect(
			screen.getByText(`Author: ${firstCard.author}`.trim()),
		).toBeDefined();
		expect(
			screen.getByText(`Poem name: ${firstCard.name}`.trim()),
		).toBeDefined();
		expect(
			screen.getByText(`${firstCard.id}. ${firstCard.silaba}`.trim()),
		).toBeDefined();
		expect(screen.getByText(`${firstCard.english}`.trim())).toBeDefined();
		expect(screen.getByText(`${firstCard.spanish}`.trim())).toBeDefined();
	});

	it("Should render the card page with name", async () => {
		render(await CardPage({ name: lastCard.silaba }));
		expect(screen.getByText(`${lastCard.japanese}`.trim())).toBeDefined();
		expect(screen.getByText(`Romaji: ${lastCard.romaji}`.trim())).toBeDefined();
		expect(
			screen.getByText(`Author (Kanjis): ${lastCard.authorJapanese}`.trim()),
		).toBeDefined();
		expect(screen.getByText(`Author: ${lastCard.author}`.trim())).toBeDefined();
		expect(
			screen.getByText(`Poem name: ${lastCard.name}`.trim()),
		).toBeDefined();
		expect(
			screen.getByText(`${lastCard.id}. ${lastCard.silaba}`.trim()),
		).toBeDefined();
		expect(screen.getByText(`${lastCard.english}`.trim())).toBeDefined();
		expect(screen.getByText(`${lastCard.spanish}`.trim().trim())).toBeDefined();
	});
});
