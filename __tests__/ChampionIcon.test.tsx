import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getChampion } from "@/app/ui/league-of-legends/match/champ-icon";
import { ChampIcon } from "@/app/ui/league-of-legends/match/champ-icon";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  },
}));

// Utility function
describe("getChampion", () => {
  it("returns correct URL when champion is provided", () => {
    const testChampIcon = "Viktor";
    const expected =
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Viktor.png";
    expect(getChampion(testChampIcon)).toBe(expected);
  });

  it("returns fallback image when spell is undefined", () => {
    expect(getChampion(undefined)).toBe("/images/empty.png");
  });
});

// Component rendering
describe("ChampIcon", () => {
  const mockChampIcon = {
    champIcon: "Viktor",
    champLevel: 15,
  };

  it("renders champ icon with correct sources", () => {
    render(<ChampIcon match={mockChampIcon} />);
    const images = screen.getAllByRole("img");

    expect(images[0]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Viktor.png"
    );
  });

  it("renders champ level correctly", () => {
    render(<ChampIcon match={mockChampIcon} />);

    expect(
      within(screen.getByTestId("level-container")).getByText("15")
    ).toBeInTheDocument();
  });
});
