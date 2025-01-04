import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SumSpells } from "@/app/ui/league-of-legends/match/sum-spells";
import { getSpell } from "@/app/ui/league-of-legends/match/sum-spells";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
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

// Component rendering
describe("SumSpells", () => {
  it("renders both spells with correct sources", async () => {
    const mockSpells = {
      spellInfo1: "SummonerTeleport",
      spellInfo2: "SummonerFlash",
    };

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
});
