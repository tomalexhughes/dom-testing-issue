import React from "react";
import { render, screen } from "@testing-library/react";
import { WithImplicitRole, WithExplicitRole } from "..";

test("with implicit role", () => {
  render(<WithImplicitRole />);
  expect(screen.getByRole("deletion")).toBeInTheDocument();
});

test("with explict role", () => {
  render(<WithExplicitRole />);
  expect(screen.getByRole("deletion")).toBeInTheDocument();
});
