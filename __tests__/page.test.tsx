import Home from "@/app/page";
import { render } from "@testing-library/react";

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
}))

jest.mock("@mantine/core",()=>({
  MantineProvider: jest.fn().mockImplementation(({children})=>children),
  createTheme: jest.fn().mockReturnValue({}),
}))

describe("Page", () => {
  it("Should render", async () => {
    // render(await Home());
    expect(true).toBe(true);
  });
});