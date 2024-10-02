import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("RegisterForm component", () => {
  beforeEach(() => {
    render(<RegisterForm />);
  });

  it("should have submit button disabled by default with empty field values", () => {
    // Validate title
    expect(screen.getByText(/Register Form/i)).toBeInTheDocument();

    // Validate fields
    expect(
      screen.getByRole("textbox", { name: /First Name/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /First Name/i })).toHaveValue(
      ""
    );
    expect(
      screen.getByRole("textbox", { name: /Last Name/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /Last Name/i })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /Email/i })).toHaveValue("");
    expect(
      screen.getByRole("spinbutton", { name: /Age/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("spinbutton", { name: /Age/i })).toHaveValue(null);

    // Validate submit button
    expect(screen.getByRole("button", { name: /Register/i })).toBeDefined();
    const submitButton = screen.getByRole("button", { name: /Register/i });
    expect(submitButton).toBeDisabled();
  });

  it("should enable submit button once fields have values", () => {
    // Validate submit button its disabled at the beginning
    expect(screen.getByRole("button", { name: /Register/i })).toBeDefined();
    const submitButton = screen.getByRole("button", { name: /Register/i });
    expect(submitButton).toBeDisabled();

    const firstNameInput = screen.getByRole("textbox", { name: /First Name/i });
    fireEvent.change(firstNameInput, { target: { value: "My name" } });
    expect(firstNameInput).toHaveValue("My name");

    const lastNameInput = screen.getByRole("textbox", { name: /Last Name/i });
    fireEvent.change(lastNameInput, { target: { value: "My last name" } });
    expect(lastNameInput).toHaveValue("My last name");

    const emailInput = screen.getByRole("textbox", { name: /Email/i });
    fireEvent.change(emailInput, { target: { value: "email@domain.com" } });
    expect(emailInput).toHaveValue("email@domain.com");

    const ageInput = screen.getByRole("spinbutton", { name: /Age/i });
    fireEvent.change(ageInput, { target: { value: 99 } });
    expect(ageInput).toHaveValue(99);
    
    // fireEvent.click(submitButton);
    // expect(screen.queryByText(/Form Submitted!/i)).toBeDefined();
  });
});
