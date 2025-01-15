import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getChampion } from "@/app/ui/league-of-legends/match/champ-icon";
import { ChampIcon } from "@/app/ui/league-of-legends/match/champ-icon";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, sizes, fill, style }: any) => {
    // Include data-testid to make it easier to query the image properties
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        data-testid="next-image"
        src={src}
        alt={alt}
        sizes={sizes}
        style={style}
        data-fill={fill ? "true" : undefined}
      />
    );
  },
}));

// Utility function
describe("getChampion", () => {
  it("returns correct URL when champion is provided", () => {
    const testChampIcon = "Viktor";
    const expected =
      "https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Viktor.png";
    expect(getChampion(testChampIcon)).toBe(expected);
  });

  it("should correct 'FiddleSticks' to 'Fiddlesticks'", () => {
    const result = getChampion("FiddleSticks");
    expect(result).toBe(
      "https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Fiddlesticks.png"
    );
  });

  it("returns fallback image when icon is undefined", () => {
    expect(getChampion(undefined)).toBe("/images/empty.png");
  });
});

// Profile champ icon
describe("ChampIcon", () => {
  const mockChampIcon = {
    champIcon: "Viktor",
    champLevel: 15,
  };

  it("renders profile champ level correctly", () => {
    render(<ChampIcon match={mockChampIcon} />);

    expect(
      within(screen.getByTestId("level-container")).getByText("15")
    ).toBeInTheDocument();
  });

  it("renders profile champ icon with correct sources", () => {
    render(<ChampIcon match={mockChampIcon} />);
    const images = screen.getAllByRole("img");

    expect(images[0]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/Viktor.png"
    );
  });

  it("renders correct alt attribute for profile champ icon", () => {
    render(<ChampIcon match={mockChampIcon} />);

    expect(screen.getByAltText("Icon 1")).toHaveAttribute("alt", "Icon 1");
  });

  it("renders alt when profile champ icon doesn't render", () => {
    render(<ChampIcon match={mockChampIcon} />);

    expect(screen.getByAltText("Icon 1")).toBeInTheDocument();
  });

  it("renders correct size attribute for profile champ icon", () => {
    render(<ChampIcon match={mockChampIcon} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[0]).toHaveAttribute("sizes", "50px");
  });

  it("renders correct style attribute for profile champ icon", () => {
    render(<ChampIcon match={mockChampIcon} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[0]).toHaveStyle({ borderRadius: "5px" });
  });

  it("renders correct fill attribute for profile champ icon", () => {
    render(<ChampIcon match={mockChampIcon} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[0]).toHaveAttribute("data-fill", "true");
  });
});
