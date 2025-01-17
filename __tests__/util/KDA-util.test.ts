import { KDAUtil } from "@/app/lib/definitions";
import { getKDAInfo } from "@/app/lib/match-functions/kda-info";

describe("getKDAInfo", () => {
  const mockMatch: KDAUtil = {
    info: {
      participants: [
        {
          riotIdGameName: "TestPlayer",
          kills: 10,
          deaths: 2,
          assists: 5,
          challenges: {
            kda: 7.5,
            killParticipation: 0.6,
          },
        },
      ],
    },
  };

  const playerParams = { username: "TestPlayer" };

  it("should return correct KDA info for the player", () => {
    const result = getKDAInfo(mockMatch, playerParams);
    expect(result).toEqual([10, 2, 5, 7.5, 60]);
  });

  it("should return undefined if player is not found", () => {
    const missingPlayerParams = { username: "NonExistentPlayer" };
    const result = getKDAInfo(mockMatch, missingPlayerParams);
    expect(result).toBeUndefined();
  });
});
