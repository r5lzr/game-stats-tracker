import {
  getChampIcon,
  getChampLevel,
} from "@/app/lib/match-functions/champ-info";
import { ChampIcon, Username } from "@/app/lib/definitions";

describe("getChampIcon", () => {
  it("should return champion name if player found in participants", () => {
    const match: ChampIcon = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const params: Username = { username: "player1" };

    const result = getChampIcon(match, params);

    expect(result).toBe("Ahri");
  });

  it("should return undefined if player not found in participants", () => {
    const match: ChampIcon = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const params: Username = { username: "nonexistentPlayer" };

    const result = getChampIcon(match, params);

    expect(result).toBeUndefined();
  });
});

describe("getChampLevel", () => {
  it("should return champion level if player found in participants", () => {
    const match: ChampIcon = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const params: Username = { username: "player1" };

    const result = getChampLevel(match, params);

    expect(result).toBe(10);
  });

  it("should return undefined if player not found in participants", () => {
    const match: ChampIcon = {
      info: {
        participants: [
          { riotIdGameName: "player1", championName: "Ahri", champLevel: 10 },
        ],
      },
    };

    const params: Username = { username: "nonexistentPlayer" };

    const result = getChampLevel(match, params);

    expect(result).toBeUndefined();
  });
});
