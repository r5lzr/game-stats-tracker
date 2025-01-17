import {
  getChampIcon,
  getChampLevel,
} from "@/app/lib/match-functions/champ-info";
import { ChampIcon, Username } from "@/app/lib/definitions";

describe("getChampIcon", () => {
  it("should return champion name if player found in participants", () => {
    const mockMatch: ChampIcon = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const params: Username = { username: "player1" };

    const result = getChampIcon(mockMatch, params);

    expect(result).toBe("Ahri");
  });

  it("should return undefined if player not found in participants", () => {
    const mockMatch: ChampIcon = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const params: Username = { username: "NonExistentPlayer" };

    const result = getChampIcon(mockMatch, params);

    expect(result).toBeUndefined();
  });
});

describe("getChampLevel", () => {
  it("should return champion level if player found in participants", () => {
    const mockMatch: ChampIcon = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const params: Username = { username: "player1" };

    const result = getChampLevel(mockMatch, params);

    expect(result).toBe(10);
  });

  it("should return undefined if player not found in participants", () => {
    const mockMatch: ChampIcon = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const params: Username = { username: "NonExistentPlayer" };

    const result = getChampLevel(mockMatch, params);

    expect(result).toBeUndefined();
  });
});
