import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SumRunes } from "@/app/ui/league-of-legends/match/sum-runes";
import { getRune } from "@/app/ui/league-of-legends/match/sum-runes";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
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

// Component rendering
describe("SumRunes", () => {
  it("renders both runes with correct sources", () => {
    const mockRunes = {
      runeInfo1: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png",
      runeInfo2: "perk-images/Styles/7201_Precision.png",
    };

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
});
