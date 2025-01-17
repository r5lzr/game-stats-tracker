import { GCCUtil } from "@/app/lib/definitions";
import { getGCCInfo } from "@/app/lib/match-functions/gcc-info";

describe("getGCCInfo", () => {
  const mockMatch: GCCUtil = {
    info: {
      gameDuration: 1500,
      participants: [
        {
          riotIdGameName: "player1",
          goldEarned: 12000,
          totalMinionsKilled: 200,
          neutralMinionsKilled: 50,
          challenges: {
            controlWardsPlaced: 5,
          },
        },
      ],
    },
  };

  it("should return correct stats for a player in the match", () => {
    const params = { username: "player1" };
    const result = getGCCInfo(mockMatch, params);
    expect(result).toEqual([12000, 250, 10, 5]);
  });

  it("should return undefined if player is not in the match", () => {
    const params = { username: "NonExistentPlayer" };
    const result = getGCCInfo(mockMatch, params);
    expect(result).toBeUndefined();
  });
});
