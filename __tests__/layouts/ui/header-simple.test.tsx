import { HeaderSimple } from "@/app/layouts/ui/header-simple";
import { render, screen } from "@testing-library/react";

describe("HeaderSimple", () => {
	it("Should render", () => {
		render(<HeaderSimple />);
		expect(screen.getByText("Karuta App")).toBeDefined();
	});
});
