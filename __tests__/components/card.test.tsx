import { Card } from "@/app/components/card";
import { cartasArray } from "@/app/data/cartas";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn(),
	}),
}));

describe("Card", () => {
	const card = cartasArray[0];
	let pushSpy: jest.SpyInstance;

	beforeEach(() => {
		pushSpy = jest.spyOn(useRouter(), "push");
	});

	it("should render the card with content", () => {
		render(<Card carta={card} />);

		expect(screen.getByText(card.japanese)).toBeDefined();
		expect(screen.getByText(`${card.id}. ${card.silaba}`)).toBeDefined();
		expect(screen.getByText(card.english)).toBeDefined();
	});

	it("should have right href", () => {
		render(<Card carta={card} />);
		// Encuentra el enlace dentro del componente Card
		const link = screen.getByRole("link", { name: "link" });

		// Verifica que el atributo href es el esperado
		expect(link.getAttribute("href")).toContain(`/poem/name/${card.silaba}`);
	});
});
