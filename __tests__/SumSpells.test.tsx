import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SumSpells } from "@/app/ui/league-of-legends/match/sum-spells";
import { getSpell } from "@/app/ui/league-of-legends/match/sum-spells";

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
describe("getSpell", () => {
  it("returns correct URL when spell is provided", () => {
    const testSpell = "SummonerTeleport";
    const expected =
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerTeleport.png";
    expect(getSpell(testSpell)).toBe(expected);
  });

  it("returns fallback image when spell is undefined", () => {
    expect(getSpell(undefined)).toBe("/images/empty.png");
  });
});

// Match summoner spells
describe("SumSpells", () => {
  const mockSpells = {
    spellInfo1: "SummonerTeleport",
    spellInfo2: "SummonerFlash",
  };

  it("renders both spells with correct sources", () => {
    render(<SumSpells match={mockSpells} />);
    const images = screen.getAllByRole("img");

    expect(images[0]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerTeleport.png"
    );
    expect(images[1]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerFlash.png"
    );
  });

  it("renders correct alt attribute for spell icons", () => {
    render(<SumSpells match={mockSpells} />);
    expect(screen.getByAltText("spell1")).toHaveAttribute("alt", "spell1");
    expect(screen.getByAltText("spell2")).toHaveAttribute("alt", "spell2");
  });

  it("renders alt when spell image doesn't render", () => {
    render(<SumSpells match={mockSpells} />);
    expect(screen.getByAltText("spell1")).toBeInTheDocument();
    expect(screen.getByAltText("spell2")).toBeInTheDocument();
  });

  it("renders correct size attribute for spell icons", () => {
    render(<SumSpells match={mockSpells} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[0]).toHaveAttribute("sizes", "50px");
    expect(images[1]).toHaveAttribute("sizes", "50px");
  });

  it("renders correct style attribute for spell icons", () => {
    render(<SumSpells match={mockSpells} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[0]).toHaveStyle({ borderRadius: "5px" });
    expect(images[1]).toHaveStyle({ borderRadius: "5px" });
  });

  it("renders correct fill attribute for spell icons", () => {
    render(<SumSpells match={mockSpells} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[0]).toHaveAttribute("data-fill", "true");
    expect(images[1]).toHaveAttribute("data-fill", "true");
  });
});
