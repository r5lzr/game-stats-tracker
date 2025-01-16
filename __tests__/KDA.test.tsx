import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { KDA } from "@/app/ui/league-of-legends/match/kda";

// Match KDA
describe("KDA Component", () => {
  const mockKDA = {
    kills: 10,
    deaths: 2,
    assists: 8,
    kdaRatio: 9.2,
    kpRatio: 75,
  };

  it("renders kills, deaths, and assists correctly", () => {
    render(<KDA match={mockKDA} />);

    expect(
      within(screen.getByTestId("kda-kills")).getByText("10")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("kda-slash1")).getByText("/")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("kda-death")).getByText("2")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("kda-slash2")).getByText("/")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("kda-assists")).getByText("8")
    ).toBeInTheDocument();
  });

  it("renders KDA ratio correctly", () => {
    render(<KDA match={mockKDA} />);

    expect(screen.getByText("9.2 KDA")).toBeInTheDocument();
  });

  it("renders KP ratio correctly", () => {
    render(<KDA match={mockKDA} />);

    expect(screen.getByText("75% KP")).toBeInTheDocument();
  });
});
