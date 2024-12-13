import Home from "@/app/page";
import { createTheme, MantineProvider } from "@mantine/core";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation",()=>({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }), 
}))

jest.mock("react",()=>({
  ...jest.requireActual("react"),
  useState: jest.fn().mockReturnValue(["",jest.fn()]),
  useMemo: jest.fn().mockImplementation((cb)=>cb()),
}))

jest.mock("@mantine/hooks",()=>({
  useDebouncedValue: jest.fn().mockReturnValue(["",jest.fn()]),
  useIsomorphicEffect: jest.fn().mockReturnValue(jest.fn()),
  useId: jest.fn().mockReturnValue(""),
  useUncontrolled: jest.fn().mockReturnValue(["",jest.fn()]),
  useMediaQuery: jest.fn().mockReturnValue(false),
}))

jest.mock("@mantine/core",()=>({
  MantineProvider: jest.fn().mockImplementation(({children})=>children),
  createTheme: jest.fn().mockReturnValue({}),
  Autocomplete: jest.fn().mockReturnValue(<div></div>),
}))

jest.mock("@tanstack/react-virtual",()=>({
  useVirtualizer: jest.fn().mockReturnValue({
    count: 100,
    getScrollElement: () => null,
    estimateSize: () => 370,
    overscan: 1,
    getTotalSize: () => 370,
    getVirtualItems: () => [],
  }),
}))

const theme = createTheme({})

describe("Page", () => {
  it("Should render", async () => {
    render(<MantineProvider theme={theme}>
      {await Home()}
    </MantineProvider>);
    expect(screen.getByRole("main")).toBeDefined();
  });
});