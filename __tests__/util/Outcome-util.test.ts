import { getOutcomeInfo } from "@/app/lib/match-functions/outcome-info";
import { OutcomeUtil } from "@/app/lib/definitions";

describe("getOutcomeInfo", () => {
  it("should return 'VICTORY' when player wins", () => {
    const mockMatch: OutcomeUtil = {
      info: {
        participants: [
          {
            riotIdGameName: "player1",
            win: true,
            gameEndedInEarlySurrender: false,
          },
        ],
      },
    };

    const playerParams = { username: "player1" };
    expect(getOutcomeInfo(mockMatch, playerParams)).toBe("VICTORY");
  });

  it("should return 'DEFEAT' when player loses", () => {
    const mockMatch: OutcomeUtil = {
      info: {
        participants: [
          {
            riotIdGameName: "player1",
            win: false,
            gameEndedInEarlySurrender: false,
          },
        ],
      },
    };

    const playerParams = { username: "player1" };
    expect(getOutcomeInfo(mockMatch, playerParams)).toBe("DEFEAT");
  });

  it("should return 'REMAKE' when game ended in early surrender", () => {
    const mockMatch: OutcomeUtil = {
      info: {
        participants: [
          {
            riotIdGameName: "player1",
            win: true,
            gameEndedInEarlySurrender: true,
          },
        ],
      },
    };

    const playerParams = { username: "player1" };
    expect(getOutcomeInfo(mockMatch, playerParams)).toBe("REMAKE");
  });

  it("should return undefined when player is not in the match", () => {
    const mockMatch: OutcomeUtil = {
      info: {
        participants: [
          {
            riotIdGameName: "player1",
            win: true,
            gameEndedInEarlySurrender: true,
          },
        ],
      },
    };

    const playerParams = { username: "NonExistentPlayer" };
    expect(getOutcomeInfo(mockMatch, playerParams)).toBeUndefined();
  });
});
