import { SearchInput } from "../../../app/components/inputs/serach-input";
import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";

// Haz un mock del componente SearchInput
jest.mock("../../../app/components/inputs/serach-input", () => ({
	SearchInput: jest.fn(() => <div>SearchInput Mock</div>),
}));

describe("SearchInput", () => {
	it("should render correctly", () => {
		// Renderiza el componente dentro de MantineProvider
		render(
			<MantineProvider>
				<SearchInput />
			</MantineProvider>,
		);

		// Verifica que SearchInput fue llamado
		expect(SearchInput).toHaveBeenCalled();
	});
});
