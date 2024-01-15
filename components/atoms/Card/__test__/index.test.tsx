import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "@/components/atoms/Card";

describe("Card Component", () => {
  test("renders children and applies custom className", () => {
    const customClassName = "custom-class";
    const { getByTestId } = render(
      <Card className={customClassName}>
        <div data-testid="child-element">Child Element</div>
      </Card>
    );

    const cardElement = getByTestId("child-element").closest(".custom-class");

    expect(cardElement).toBeInTheDocument();
  });

  test("applies default styles to the card", () => {
    const { getByTestId } = render(
      <Card>
        <div data-testid="child-element">Child Element</div>
      </Card>
    );

    const cardElement = getByTestId("child-element").closest(".MuiPaper-root");

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass(
      "flex",
      "flex-col",
      "gap-3",
      "p-4",
      "border-2",
      "border-white",
      "border-solid",
      "shadow-lg",
      "rounded-xl"
    );
  });
});
