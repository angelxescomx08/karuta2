import CardPageSkeleton from "@/app/components/skeletons/card-page-skeleton";
import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";

describe("CardPageSkeleton", () => {
	it("renders correctly", () => {
		const { asFragment } = render(
			<MantineProvider>
				<CardPageSkeleton />
			</MantineProvider>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
