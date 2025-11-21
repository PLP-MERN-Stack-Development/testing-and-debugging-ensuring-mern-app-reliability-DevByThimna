import { render, screen } from "@testing-library/react";
import BugList from "../components/BugList";

test("shows no bugs message", () => {
  render(<BugList bugs={[]} />);
  expect(screen.getByText(/No bugs reported/i)).toBeInTheDocument();
});
