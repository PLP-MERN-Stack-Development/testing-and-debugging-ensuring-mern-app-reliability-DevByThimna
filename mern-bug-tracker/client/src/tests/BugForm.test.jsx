import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../components/BugForm";

test("renders input", () => {
  render(<BugForm refresh={() => {}} />);
  expect(screen.getByPlaceholderText(/Bug title/i)).toBeInTheDocument();
});
