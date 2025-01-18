import { TimeUtil } from "@/app/lib/definitions";
import {
  getRelativeTimeInfo,
  getGameDurationInfo,
} from "@/app/lib/match-functions/time-info";

describe("getRelativeTimeInfo", () => {
  const mockMatch = (timestamp: number) =>
    ({
      info: { gameEndTimestamp: timestamp },
    } as TimeUtil);

  it("should return 5 seconds ago for match that ended", () => {
    const timestamp = new Date().getTime() - 5000;
    const result = getRelativeTimeInfo(mockMatch(timestamp));
    expect(result).toBe("5 seconds ago");
  });

  it("should return 2 minutes ago for match that ended", () => {
    const timestamp = new Date().getTime() - 2 * 60000;
    const result = getRelativeTimeInfo(mockMatch(timestamp));
    expect(result).toBe("2 minutes ago");
  });

  it("should return 3 hours ago for match that ended", () => {
    const timestamp = new Date().getTime() - 3 * 3600000;
    const result = getRelativeTimeInfo(mockMatch(timestamp));
    expect(result).toBe("3 hours ago");
  });

  it("should return 2 days ago for match that ended", () => {
    const timestamp = new Date().getTime() - 2 * 86400000;
    const result = getRelativeTimeInfo(mockMatch(timestamp));
    expect(result).toBe("2 days ago");
  });
});

describe("getGameDurationInfo", () => {
  const mockMatch = (duration: number) =>
    ({
      info: { gameDuration: duration },
    } as TimeUtil);

  it("should format short game durations correctly (<60 min)", () => {
    const result = getGameDurationInfo(mockMatch(125));
    expect(result).toBe("2m 5s");
  });

  it("should format long game durations correctly (>60 min)", () => {
    const result = getGameDurationInfo(mockMatch(3723));
    expect(result).toBe("62m 3s");
  });
});
