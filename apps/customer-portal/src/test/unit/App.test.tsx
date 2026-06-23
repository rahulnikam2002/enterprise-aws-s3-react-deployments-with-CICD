import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("App", () => {
  it("renders button", () => {
    render(<App />);

    expect(
      screen.getByRole("button")
    ).toBeInTheDocument();
  });
});