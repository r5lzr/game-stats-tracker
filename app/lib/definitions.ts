export interface PlayerParams {
  username: string;
  tagLine: string;
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
}

export interface MatchStats {
  riotIdGameName: string;
  riotIdTagline: string;
  championName: string;
  summonerId: string;
  summoner1Id: number;
  summoner2Id: number;
  champLevel: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  perks: { styles: PerkInfo[] };
  teamId: number;
  kills: number;
  deaths: number;
  assists: number;
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
  win: boolean;
}

export interface PerkInfo {
  selections: [{ perk: number }];
  style: number;
}

export interface runeInfo {
  id: number;
}
