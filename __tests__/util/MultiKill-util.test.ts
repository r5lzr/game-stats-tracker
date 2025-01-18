import { getMultiKillInfo } from "@/app/lib/match-functions/multikill-info";
import { MultiKillUtil } from "@/app/lib/definitions";

describe("getMultiKillInfo", () => {
  it("returns PENTAKILL when player has a penta kill", () => {
    const mockMatch: MultiKillUtil = {
      info: {
        participants: [
          {
            riotIdGameName: "player1",
            pentaKills: 1,
            quadraKills: 1,
            tripleKills: 0,
            doubleKills: 1,
          },
        ],
      },
    };

    const params = { username: "player1" };
    expect(getMultiKillInfo(mockMatch, params)).toBe("PENTAKILL");
  });

  it("returns Quadra kill when player has a quadra kill", () => {
    const mockMatch: MultiKillUtil = {
      info: {
        participants: [
          {
            riotIdGameName: "player1",
            pentaKills: 0,
            quadraKills: 1,
            tripleKills: 1,
            doubleKills: 1,
          },
        ],
      },
    };

    const params = { username: "player1" };
    expect(getMultiKillInfo(mockMatch, params)).toBe("Quadra kill");
  });

  it("returns Triple kill when player has a triple kill", () => {
    const mockMatch: MultiKillUtil = {
      info: {
        participants: [
          {
            riotIdGameName: "player1",
            pentaKills: 0,
            quadraKills: 0,
            tripleKills: 1,
            doubleKills: 1,
          },
        ],
      },
    };

    const params = { username: "player1" };
    expect(getMultiKillInfo(mockMatch, params)).toBe("Triple kill");
  });

  it("returns Double kill when player has a double kill", () => {
    const mockMatch: MultiKillUtil = {
      info: {
        participants: [
          {
            riotIdGameName: "player1",
            pentaKills: 0,
            quadraKills: 0,
            tripleKills: 0,
            doubleKills: 1,
          },
        ],
      },
    };

    const params = { username: "player1" };
    expect(getMultiKillInfo(mockMatch, params)).toBe("Double kill");
  });

  it("returns null when player has no multi kills", () => {
    const mockMatch: MultiKillUtil = {
      info: {
        participants: [
          {
            riotIdGameName: "player1",
            pentaKills: 0,
            quadraKills: 0,
            tripleKills: 0,
            doubleKills: 0,
          },
        ],
      },
    };

    const params = { username: "player1" };
    expect(getMultiKillInfo(mockMatch, params)).toBeNull();
  });

  it("should return null if player is not found", () => {
    const mockMatch: MultiKillUtil = {
      info: {
        participants: [
          {
            riotIdGameName: "player1",
            pentaKills: 0,
            quadraKills: 0,
            tripleKills: 0,
            doubleKills: 0,
          },
        ],
      },
    };

    const params = { username: "NonExistentPlayer" };
    expect(getMultiKillInfo(mockMatch, params)).toBeNull();
  });
});
