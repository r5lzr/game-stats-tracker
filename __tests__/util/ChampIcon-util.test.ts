import {
  getChampIcon,
  getChampLevel,
} from "@/app/lib/match-functions/champ-info";
import { ChampIconUtil, Username } from "@/app/lib/definitions";

describe("getChampIcon", () => {
  it("should return champion name if player found in participants", () => {
    const mockMatch: ChampIconUtil = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const playerParams: Username = { username: "player1" };
    expect(getChampIcon(mockMatch, playerParams)).toBe("Ahri");
  });

  it("should return undefined if player not found in participants", () => {
    const mockMatch: ChampIconUtil = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const playerParams: Username = { username: "NonExistentPlayer" };
    expect(getChampIcon(mockMatch, playerParams)).toBeUndefined();
  });
});

describe("getChampLevel", () => {
  it("should return champion level if player found in participants", () => {
    const mockMatch: ChampIconUtil = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const playerParams: Username = { username: "player1" };
    expect(getChampLevel(mockMatch, playerParams)).toBe(10);
  });

  it("should return undefined if player not found in participants", () => {
    const mockMatch: ChampIconUtil = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const playerParams: Username = { username: "NonExistentPlayer" };
    expect(getChampLevel(mockMatch, playerParams)).toBeUndefined();
  });
});
