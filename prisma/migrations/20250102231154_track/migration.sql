-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "summonerId" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "tagLine" TEXT NOT NULL,
    "regionInfo" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "metaId" JSONB NOT NULL,
    "summonerId" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "tagLine" TEXT NOT NULL,
    "regionInfo" TEXT NOT NULL,
    "queueInfo" TEXT NOT NULL,
    "relativeTime" TEXT NOT NULL,
    "gameDuration" TEXT NOT NULL,
    "outcome" TEXT NOT NULL,
    "champIcon" TEXT NOT NULL,
    "champLevel" INTEGER NOT NULL,
    "spellInfo1" TEXT NOT NULL,
    "spellInfo2" TEXT NOT NULL,
    "runeInfo1" TEXT NOT NULL,
    "runeInfo2" TEXT NOT NULL,
    "kills" INTEGER NOT NULL,
    "deaths" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "kdaRatio" FLOAT NOT NULL,
    "kpRatio" INTEGER,
    "gold" INTEGER NOT NULL,
    "creepScore" INTEGER NOT NULL,
    "creepScorePerMin" FLOAT NOT NULL,
    "controlWards" INTEGER NOT NULL,
    "itemId0" INTEGER NOT NULL,
    "itemId1" INTEGER NOT NULL,
    "itemId2" INTEGER NOT NULL,
    "itemId3" INTEGER NOT NULL,
    "itemId4" INTEGER NOT NULL,
    "itemId5" INTEGER NOT NULL,
    "itemId6" INTEGER NOT NULL,
    "visionPings" INTEGER NOT NULL,
    "pushPings" INTEGER NOT NULL,
    "dangerPings" INTEGER NOT NULL,
    "pathingPings" INTEGER NOT NULL,
    "assistPings" INTEGER NOT NULL,
    "missingPings" INTEGER NOT NULL,
    "multiKill" TEXT,
    "blueTeamPlayers" TEXT[],
    "blueTeamTags" TEXT[],
    "blueTeamChamps" TEXT[],
    "redTeamPlayers" TEXT[],
    "redTeamTags" TEXT[],
    "redTeamChamps" TEXT[],

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_summonerId_key" ON "Player"("summonerId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_metaId_key" ON "Match"("metaId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_summonerId_matchId_key" ON "Match"("summonerId", "matchId");

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_summonerId_fkey" FOREIGN KEY ("summonerId") REFERENCES "Player"("summonerId") ON DELETE RESTRICT ON UPDATE CASCADE;
