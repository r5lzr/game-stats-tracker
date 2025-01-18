import { TeamUtil } from "@/app/lib/definitions";
import {
  getRedTeamInfo,
  getBlueTeamInfo,
} from "@/app/lib/match-functions/team-info";

const mockMatch: TeamUtil = {
  info: {
    participants: [
      {
        teamId: 100,
        riotIdGameName: "Player1",
        riotIdTagline: "#1234",
        championName: "Ahri",
      },
      {
        teamId: 100,
        riotIdGameName: "Player2",
        riotIdTagline: "#2345",
        championName: "Lux",
      },
      {
        teamId: 100,
        riotIdGameName: "Player3",
        riotIdTagline: "#3456",
        championName: "Ezreal",
      },
      {
        teamId: 100,
        riotIdGameName: "Player4",
        riotIdTagline: "#4567",
        championName: "Thresh",
      },
      {
        teamId: 100,
        riotIdGameName: "Player5",
        riotIdTagline: "#5678",
        championName: "Jinx",
      },
      {
        teamId: 200,
        riotIdGameName: "Player6",
        riotIdTagline: "#6789",
        championName: "Zed",
      },
      {
        teamId: 200,
        riotIdGameName: "Player7",
        riotIdTagline: "#7890",
        championName: "Yasuo",
      },
      {
        teamId: 200,
        riotIdGameName: "Player8",
        riotIdTagline: "#8901",
        championName: "Akali",
      },
      {
        teamId: 200,
        riotIdGameName: "Player9",
        riotIdTagline: "#9012",
        championName: "Katarina",
      },
      {
        teamId: 200,
        riotIdGameName: "Player10",
        riotIdTagline: "#0123",
        championName: "Darius",
      },
    ],
  },
};

describe("getBlueTeamInfo", () => {
  it("getBlueTeamInfo returns correct info", () => {
    const [playerNames, playerTagLines, championNames] =
      getBlueTeamInfo(mockMatch);

    expect(playerNames).toEqual([
      "Player1",
      "Player2",
      "Player3",
      "Player4",
      "Player5",
    ]);
    expect(playerTagLines).toEqual([
      "#1234",
      "#2345",
      "#3456",
      "#4567",
      "#5678",
    ]);
    expect(championNames).toEqual(["Ahri", "Lux", "Ezreal", "Thresh", "Jinx"]);
  });
});

describe("getRedTeamInfo", () => {
  it("getRedTeamInfo returns correct info", () => {
    const [playerNames, playerTagLines, championNames] =
      getRedTeamInfo(mockMatch);

    expect(playerNames).toEqual([
      "Player6",
      "Player7",
      "Player8",
      "Player9",
      "Player10",
    ]);
    expect(playerTagLines).toEqual([
      "#6789",
      "#7890",
      "#8901",
      "#9012",
      "#0123",
    ]);
    expect(championNames).toEqual([
      "Zed",
      "Yasuo",
      "Akali",
      "Katarina",
      "Darius",
    ]);
  });
});
