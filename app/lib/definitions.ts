import { RiotAPITypes } from "@fightmegg/riot-api";

export interface PlayerParams {
  username: string;
  tagLine: string;
  region: RiotAPITypes.LoLRegion;
}

export interface QueueInfo {
  queueId: number;
  description: string;
}

export interface MatchInfo {
  info: {
    participants: MatchStats[];
    gameDuration: number;
    queueId: number;
    gameEndTimestamp: number;
  };
  metadata: { matchId: string };
  matchId: string;
}

export interface MatchStats {
  matchId: string;
  riotIdGameName: string;
  playerName: string;
  riotIdTagline: string;
  tagLine: string;
  championName: string;
  summonerId: string;
  queueInfo: string;
  relativeTime: string;
  gameDuration: string;
  outcome: string;
  champIcon: string;
  champLevel: number;
  spellInfo1: string;
  spellInfo2: string;
  runeInfo1: string;
  runeInfo2: string;
  kills: number;
  deaths: number;
  assists: number;
  kdaRatio: number;
  kpRatio: number;
  gold: number;
  creepScore: number;
  neutralMinionsKilled: number;
  creepScorePerMin: number;
  controlWards: number;
  itemId0: number;
  itemId1: number;
  itemId2: number;
  itemId3: number;
  itemId4: number;
  itemId5: number;
  itemId6: number;
  visionPings: number;
  enemyVisionPings: number;
  pushPings: number;
  dangerPings: number;
  pathingPings: number;
  onMyWayPings: number;
  assistPings: number;
  assistMePings: number;
  missingPings: number;
  enemyMissingPings: number;
  multiKill: string | null;
  blueTeamPlayers: string[];
  blueTeamTags: string[];
  blueTeamChamps: string[];
  redTeamPlayers: string[];
  redTeamTags: string[];
  redTeamChamps: string[];
  bluePlayer1Name: string;
  bluePlayer1Tag: string;
  bluePlayer1Champ: string;
  bluePlayer2Name: string;
  bluePlayer2Tag: string;
  bluePlayer2Champ: string;
  bluePlayer3Name: string;
  bluePlayer3Tag: string;
  bluePlayer3Champ: string;
  bluePlayer4Name: string;
  bluePlayer4Tag: string;
  bluePlayer4Champ: string;
  bluePlayer5Name: string;
  bluePlayer5Tag: string;
  bluePlayer5Champ: string;
  redPlayer1Name: string;
  redPlayer1Tag: string;
  redPlayer1Champ: string;
  redPlayer2Name: string;
  redPlayer2Tag: string;
  redPlayer2Champ: string;
  redPlayer3Name: string;
  redPlayer3Tag: string;
  redPlayer3Champ: string;
  redPlayer4Name: string;
  redPlayer4Tag: string;
  redPlayer4Champ: string;
  redPlayer5Name: string;
  redPlayer5Tag: string;
  redPlayer5Champ: string;
  summoner1Id: number;
  summoner2Id: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  perks: { styles: PerkInfo[] };
  teamId: number;
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
  challenges: {
    kda: number;
    killParticipation: number;
    controlWardsPlaced: number;
  };
  goldEarned: number;
  totalMinionsKilled: number;
  gameEndedInEarlySurrender: boolean;
  win: boolean;
}

export interface PerkInfo {
  selections: [{ perk: number }];
  style: number;
}

export interface runeInfo {
  id: number;
}

export interface RankedInfo {
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
}

export type ChampIconUtil = {
  info: {
    participants: [
      {
        riotIdGameName: string;
        championName: string;
        champLevel: number;
      }
    ];
  };
};

export type GCCUtil = {
  info: {
    gameDuration: number;
    participants: [
      {
        riotIdGameName: string;
        goldEarned: number;
        totalMinionsKilled: number;
        neutralMinionsKilled: number;
        challenges: {
          controlWardsPlaced: number;
        };
      }
    ];
  };
};

export type ItemUtil = {
  info: {
    participants: [
      {
        riotIdGameName: string;
        item0: number;
        item1: number;
        item2: number;
        item3: number;
        item4: number;
        item5: number;
        item6: number;
      }
    ];
  };
};

export type KDAUtil = {
  info: {
    participants: [
      {
        riotIdGameName: string;
        kills: number;
        deaths: number;
        assists: number;
        challenges: {
          kda: number;
          killParticipation: number;
        };
      }
    ];
  };
};

export type MultiKillUtil = {
  info: {
    participants: [
      {
        riotIdGameName: string;
        pentaKills: number;
        quadraKills: number;
        tripleKills: number;
        doubleKills: number;
      }
    ];
  };
};

export type OutcomeUtil = {
  info: {
    participants: [
      {
        riotIdGameName: string;
        win: boolean;
        gameEndedInEarlySurrender: boolean;
      }
    ];
  };
};

export type PingingUtil = {
  info: {
    participants: [
      {
        riotIdGameName: string;
        enemyVisionPings: number;
        pushPings: number;
        dangerPings: number;
        onMyWayPings: number;
        assistMePings: number;
        enemyMissingPings: number;
      }
    ];
  };
};

export type TeamUtil = {
  info: {
    participants: {
      teamId: number;
      riotIdGameName: string;
      riotIdTagline: string;
      championName: string;
    }[];
  };
};

export type Username = Pick<PlayerParams, "username">;
