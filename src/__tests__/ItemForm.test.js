import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("adds a new item to the list when the form is submitted", () => {
  const mockSubmit = jest.fn();

  render(<ItemForm onItemFormSubmit={mockSubmit} />);
  const nameInput = screen.getByLabelText(/name/i);
  const categorySelect = screen.getByLabelText(/category/i);
  const submitButton = screen.getByText(/add to list/i);


  fireEvent.change(nameInput, { target: { value: "Ice Cream" } });
  fireEvent.change(categorySelect, { target: { value: "Dessert" } });

  
  fireEvent.click(submitButton);

  
  expect(mockSubmit).toHaveBeenCalledTimes(1);
  const submittedItem = mockSubmit.mock.calls[0][0];

  
  expect(submittedItem.name).toBe("Ice Cream");
  expect(submittedItem.category).toBe("Dessert");
  expect(typeof submittedItem.id).toBe("string");
});
