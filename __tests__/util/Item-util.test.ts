import { ItemUtil } from "@/app/lib/definitions";
import { getItemInfo } from "@/app/lib/match-functions/item-info";

describe("getItemInfo", () => {
  const mockMatch: ItemUtil = {
    info: {
      participants: [
        {
          riotIdGameName: "player1",
          item0: 1001,
          item1: 1002,
          item2: 1003,
          item3: 1004,
          item4: 1005,
          item5: 1006,
          item6: 1007,
        },
      ],
    },
  };

  const mockMatchZero: ItemUtil = {
    info: {
      participants: [
        {
          riotIdGameName: "player1",
          item0: 0,
          item1: 2002,
          item2: 0,
          item3: 2004,
          item4: 2005,
          item5: 2006,
          item6: 0,
        },
      ],
    },
  };

  it("should return the correct item array for an existing player", () => {
    const params = { username: "player1" };
    const result = getItemInfo(mockMatch, params);
    expect(result).toEqual([1001, 1002, 1003, 1004, 1005, 1006, 1007]);
  });

  it("should handle players with empty item slots (item has value of 0)", () => {
    const params = { username: "player1" };
    const result = getItemInfo(mockMatchZero, params);
    expect(result).toEqual([0, 2002, 0, 2004, 2005, 2006, 0]);
  });

  it("should return undefined for a non-existent player", () => {
    const params = { username: "NonExistentPlayer" };
    const result = getItemInfo(mockMatch, params);
    expect(result).toBeUndefined();
  });
});
