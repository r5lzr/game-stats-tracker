import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getChampion } from "@/app/ui/league-of-legends/match/teams";
import { Team } from "@/app/ui/league-of-legends/match/teams";
import { Teams } from "@/app/ui/league-of-legends/match/teams";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: any) => {
    // Include data-testid to make it easier to query the image properties
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        data-testid="next-image"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    );
  },
}));

// Utility function
describe("getTeam", () => {
  it("returns correct URL when champion is provided", () => {
    const testChampIcon = "Viktor";
    const expected =
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Viktor.png";
    expect(getChampion(testChampIcon)).toBe(expected);
  });

  it("should correct 'FiddleSticks' to 'Fiddlesticks'", () => {
    const result = getChampion("FiddleSticks");
    expect(result).toBe(
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Fiddlesticks.png"
    );
  });

  it("returns fallback image when icon is undefined", () => {
    expect(getChampion(undefined)).toBe("/images/empty.png");
  });
});

// Match relative team
describe("Team", () => {
  const mockPlayers = ["TNM", "pls nerf kat", "LadyGaga", "gaPsy31", "게윅스"];
  const mockTags = ["1991", "EUW", "MelMa", "EUW", "HLE"];
  const mockChamps = ["Fiora", "Sylas", "Katarina", "Jhin", "Zyra"];

  it("renders correct player and tag names correctly", () => {
    render(<Team players={mockPlayers} tags={mockTags} champs={mockChamps} />);
    mockPlayers.forEach((player, index) => {
      expect(
        screen.getByText(`${player}#${mockTags[index]}`)
      ).toBeInTheDocument();
    });
  });

  it("renders relative team champ icon with correct sources", () => {
    render(<Team players={mockPlayers} tags={mockTags} champs={mockChamps} />);
    const images = screen.getAllByRole("img");

    expect(images[0]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Fiora.png"
    );

    expect(images[1]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Sylas.png"
    );

    expect(images[2]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Katarina.png"
    );

    expect(images[3]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Jhin.png"
    );

    expect(images[4]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Zyra.png"
    );
  });

  it("renders correct alt attribute for relative team champion icons", () => {
    render(<Team players={mockPlayers} tags={mockTags} champs={mockChamps} />);
    expect(screen.getByAltText("Icon 1")).toHaveAttribute("alt", "Icon 1");
    expect(screen.getByAltText("Icon 2")).toHaveAttribute("alt", "Icon 2");
    expect(screen.getByAltText("Icon 3")).toHaveAttribute("alt", "Icon 3");
    expect(screen.getByAltText("Icon 4")).toHaveAttribute("alt", "Icon 4");
    expect(screen.getByAltText("Icon 5")).toHaveAttribute("alt", "Icon 5");
  });

  it("renders alt when relative team champion icons doesn't render", () => {
    render(<Team players={mockPlayers} tags={mockTags} champs={mockChamps} />);
    expect(screen.getByAltText("Icon 1")).toBeInTheDocument();
    expect(screen.getByAltText("Icon 2")).toBeInTheDocument();
    expect(screen.getByAltText("Icon 3")).toBeInTheDocument();
    expect(screen.getByAltText("Icon 4")).toBeInTheDocument();
    expect(screen.getByAltText("Icon 5")).toBeInTheDocument();
  });

  it("renders correct width and height for relative team champion icons", () => {
    render(<Team players={mockPlayers} tags={mockTags} champs={mockChamps} />);

    const images = screen.getAllByTestId("next-image");

    images.forEach((img) => {
      expect(img).toHaveAttribute("width", "20");
      expect(img).toHaveAttribute("height", "20");
    });
  });
});

// Match blue and red team
describe("Teams", () => {
  const mockMatch = {
    blueTeamPlayers: ["TNM", "pls nerf kat", "LadyGaga", "gaPsy31", "게윅스"],
    blueTeamTags: ["1991", "EUW", "MelMa", "EUW", "HLE"],
    blueTeamChamps: ["Fiora", "Sylas", "Katarina", "Jhin", "Zyra"],
    redTeamPlayers: [
      "RYJI",
      "Bobby P Herman",
      "icantgetganks",
      "STK Sawi",
      "RlC4RD0 MIL0S",
    ],
    redTeamTags: ["888", "EUW", "EUW", "8560", "EUW"],
    redTeamChamps: ["Darius", "Ivern", "Malzahar", "Aphelios", "Swain"],
  };

  it("renders blue team's player and tag names correctly", () => {
    render(<Teams match={mockMatch} />);

    expect(screen.getByText("TNM#1991")).toBeInTheDocument();
    expect(screen.getByText("pls nerf kat#EUW")).toBeInTheDocument();
    expect(screen.getByText("LadyGaga#MelMa")).toBeInTheDocument();
    expect(screen.getByText("gaPsy31#EUW")).toBeInTheDocument();
    expect(screen.getByText("게윅스#HLE")).toBeInTheDocument();
  });

  it("renders red team's player and tag names correctly", () => {
    render(<Teams match={mockMatch} />);

    expect(screen.getByText("RYJI#888")).toBeInTheDocument();
    expect(screen.getByText("Bobby P Herman#EUW")).toBeInTheDocument();
    expect(screen.getByText("icantgetganks#EUW")).toBeInTheDocument();
    expect(screen.getByText("STK Sawi#8560")).toBeInTheDocument();
    expect(screen.getByText("RlC4RD0 MIL0S#EUW")).toBeInTheDocument();
  });
});
