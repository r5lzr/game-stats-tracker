import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SumRunes } from "@/app/ui/league-of-legends/match/sum-runes";
import { getRune } from "@/app/ui/league-of-legends/match/sum-runes";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, sizes, fill, style, width, height }: any) => {
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
        width={width}
        height={height}
      />
    );
  },
}));

// Utility function
describe("getRune", () => {
  it("returns correct URL when rune is provided", () => {
    const testRune = "perk-images/Styles/Sorcery/SummonAery/SummonAery.png";
    const expected =
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png";
    expect(getRune(testRune)).toBe(expected);
  });

  it("returns fallback image when rune is undefined", () => {
    expect(getRune(undefined)).toBe("/images/empty.png");
  });
});

// Match summoner runes
describe("SumRunes", () => {
  const mockRunes = {
    runeInfo1: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png",
    runeInfo2: "perk-images/Styles/7201_Precision.png",
  };

  it("renders both runes with correct sources", () => {
    render(<SumRunes match={mockRunes} />);
    const images = screen.getAllByRole("img");

    expect(images[0]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    );
    expect(images[1]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png"
    );
  });

  it("renders correct alt attribute for rune icons", () => {
    render(<SumRunes match={mockRunes} />);
    expect(screen.getByAltText("rune1")).toHaveAttribute("alt", "rune1");
    expect(screen.getByAltText("rune2")).toHaveAttribute("alt", "rune2");
  });

  it("renders alt when rune image doesn't render", () => {
    render(<SumRunes match={mockRunes} />);
    expect(screen.getByAltText("rune1")).toBeInTheDocument();
    expect(screen.getByAltText("rune2")).toBeInTheDocument();
  });

  it("renders correct size attribute for rune icons", () => {
    render(<SumRunes match={mockRunes} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[0]).toHaveAttribute("sizes", "50px");
    expect(images[1]).toHaveAttribute("sizes", "50px");
  });

  it("renders correct style attribute for rune icons", () => {
    render(<SumRunes match={mockRunes} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[0]).toHaveStyle({ borderRadius: "5px" });
    expect(images[1]).toHaveStyle({ borderRadius: "5px" });
  });

  it("renders correct fill attribute for primary rune icon", () => {
    render(<SumRunes match={mockRunes} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[0]).toHaveAttribute("data-fill", "true");
  });

  it("renders correct width and height for secondary rune icon", () => {
    render(<SumRunes match={mockRunes} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[1]).toHaveAttribute("width", "25");
    expect(images[1]).toHaveAttribute("height", "25");
  });
});
