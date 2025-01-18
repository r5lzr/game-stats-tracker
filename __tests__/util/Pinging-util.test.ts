import { PingingUtil } from "@/app/lib/definitions";
import { getPingingInfo } from "@/app/lib/match-functions/pinging-info";

describe("getPingingInfo", () => {
  const mockMatch: PingingUtil = {
    info: {
      participants: [
        {
          riotIdGameName: "player1",
          enemyVisionPings: 5,
          pushPings: 3,
          dangerPings: 7,
          onMyWayPings: 2,
          assistMePings: 4,
          enemyMissingPings: 1,
        },
      ],
    },
  };

  it("should return correct ping information for the specified player", () => {
    const playerParams = { username: "player1" };
    expect(getPingingInfo(mockMatch, playerParams)).toEqual([5, 3, 7, 2, 4, 1]);
  });

  it("should return undefined values if player is not found", () => {
    const playerParams = { username: "NonExistentPlayer" };
    expect(getPingingInfo(mockMatch, playerParams)).toEqual([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
  });
});
