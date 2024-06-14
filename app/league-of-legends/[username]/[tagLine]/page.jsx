"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./page.css";
import styles from "./page.module.css";
import { IoSearch } from "react-icons/io5";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const matches = [
  {
    metadata: {
      dataVersion: "2",
      matchId: "EUW1_6700263688",
      participants: [
        "5Auw8ESJt1aCoC3mNNr9rK45XHS9YJmlTwPMI1N3oXo1RXCX_7kFOdCB2Vqtp0_6BsEo4AY4-UiEKg",
        "7QXxVXnBC5jlFqiuJe0CTpCeqO7EmcMT7Eu-BEyK-tfTl-EAfMV7YqVvEvhza6z_zJMryeMDGqrDtg",
        "TmxZY9nBz9t1udB9HdkpdtOXURQDv52h4VPNrrMJF5yT869xHd42-FSqWvrsXBteWJGbCxNqD3gVNQ",
        "oIS-rb-bKnC_KJUA-PWvUkXx0qYZ89f_0bKKwFMg514upKSxGvoOs2kkSIL0E_yScPIf8MqIJ_UGSw",
        "fo9Zax2HrdeTXeDgc4YqykCgXj-ElhCYNUEvEPmQLx0yzy6gHtH-4vqCkip3d8OQUPNjSCqpZTVAhA",
        "PfYLBSWOWVlOghVTey94pPEXKGaF_ecXUvwjSScJNaQmis8Ml9gGuQ755zqp1bP9BTGfiZ6RflkVPg",
        "WgvEEwrq5zcNX26ghJXm-ScnditFQuF-jg6KIJVIDqXnNymRvaKeP8o8LfDuievXiujOXuCEqfT_bQ",
        "OUZHQTPCRieu0pS_DCkWAHUlnBKOr48HNM6jeIOn2WTjztvBlV3CwosR-u4x8m0PK-I9Cs4F7xwHow",
        "wvJtYaT4WN-7Np8mJ-LzcYGaRm9CPsT9boUDVgHJF0WU9n0vtYYF5Qj72LEooyCscpU69B3mk6AXPQ",
        "pHLkt2-Ie5serp0Da1vaqIYH84z_5MnRm4lt2C6c04wTxk7SRXQKTKFcTjS-KKxKuOg8qL7PWRwV6w",
      ],
    },
    info: {
      gameCreation: 1701464526699,
      gameDuration: 2292,
      gameEndTimestamp: 1701466913842,
      gameId: 6700263688,
      gameMode: "CLASSIC",
      gameName: "teambuilder-match-6700263688",
      gameStartTimestamp: 1701464621030,
      gameType: "MATCHED_GAME",
      gameVersion: "13.23.544.5515",
      mapId: 11,
      participants: [
        {
          allInPings: 0,
          assistMePings: 0,
          assists: 5,
          baitPings: 0,
          baronKills: 0,
          basicPings: 0,
          bountyLevel: 4,
          challenges: {
            "12AssistStreakCount": 0,
            abilityUses: 444,
            acesBefore15Minutes: 0,
            alliedJungleMonsterKills: 1,
            baronBuffGoldAdvantageOverThreshold: 1,
            baronTakedowns: 1,
            blastConeOppositeOpponentCount: 0,
            bountyGold: 675,
            buffsStolen: 0,
            completeSupportQuestInTime: 0,
            controlWardsPlaced: 0,
            damagePerMinute: 991.8979951476731,
            damageTakenOnTeamPercentage: 0.1957384363429066,
            dancedWithRiftHerald: 0,
            deathsByEnemyChamps: 7,
            dodgeSkillShotsSmallWindow: 0,
            doubleAces: 0,
            dragonTakedowns: 1,
            earliestBaron: 2095.6603145999998,
            earliestDragonTakedown: 1967.3000839,
            earlyLaningPhaseGoldExpAdvantage: 0,
            effectiveHealAndShielding: 0,
            elderDragonKillsWithOpposingSoul: 0,
            elderDragonMultikills: 0,
            enemyChampionImmobilizations: 41,
            enemyJungleMonsterKills: 0,
            epicMonsterKillsNearEnemyJungler: 0,
            epicMonsterKillsWithin30SecondsOfSpawn: 0,
            epicMonsterSteals: 0,
            epicMonsterStolenWithoutSmite: 0,
            firstTurretKilled: 1,
            firstTurretKilledTime: 898.8932553,
            flawlessAces: 0,
            fullTeamTakedown: 1,
            gameLength: 2293.0749103,
            getTakedownsInAllLanesEarlyJungleAsLaner: 0,
            goldPerMinute: 508.2894143098506,
            hadOpenNexus: 0,
            immobilizeAndKillWithAlly: 2,
            initialBuffCount: 0,
            initialCrabCount: 0,
            jungleCsBefore10Minutes: 0,
            junglerTakedownsNearDamagedEpicMonster: 0,
            kTurretsDestroyedBeforePlatesFall: 0,
            kda: 2.142857142857143,
            killAfterHiddenWithAlly: 0,
            killParticipation: 0.28846153846153844,
            killedChampTookFullTeamDamageSurvived: 0,
            killingSprees: 2,
            killsNearEnemyTurret: 0,
            killsOnOtherLanesEarlyJungleAsLaner: 0,
            killsOnRecentlyHealedByAramPack: 0,
            killsUnderOwnTurret: 1,
            killsWithHelpFromEpicMonster: 0,
            knockEnemyIntoTeamAndKill: 7,
            landSkillShotsEarlyGame: 2,
            laneMinionsFirst10Minutes: 66,
            laningPhaseGoldExpAdvantage: 0,
            legendaryCount: 0,
            lostAnInhibitor: 0,
            maxCsAdvantageOnLaneOpponent: 9,
            maxKillDeficit: 0,
            maxLevelLeadLaneOpponent: 1,
            mejaisFullStackInTime: 0,
            moreEnemyJungleThanOpponent: 0,
            multiKillOneSpell: 0,
            multiTurretRiftHeraldCount: 0,
            multikills: 0,
            multikillsAfterAggressiveFlash: 0,
            mythicItemUsed: 6631,
            outerTurretExecutesBefore10Minutes: 0,
            outnumberedKills: 0,
            outnumberedNexusKill: 0,
            perfectDragonSoulsTaken: 0,
            perfectGame: 0,
            pickKillWithAlly: 7,
            playedChampSelectPosition: 1,
            poroExplosions: 0,
            quickCleanse: 0,
            quickFirstTurret: 0,
            quickSoloKills: 0,
            riftHeraldTakedowns: 1,
            saveAllyFromDeath: 0,
            scuttleCrabKills: 0,
            skillshotsDodged: 16,
            skillshotsHit: 30,
            snowballsHit: 0,
            soloBaronKills: 0,
            soloKills: 7,
            soloTurretsLategame: 3,
            stealthWardsPlaced: 10,
            survivedSingleDigitHpCount: 0,
            survivedThreeImmobilizesInFight: 0,
            takedownOnFirstTurret: 1,
            takedowns: 15,
            takedownsAfterGainingLevelAdvantage: 0,
            takedownsBeforeJungleMinionSpawn: 0,
            takedownsFirstXMinutes: 4,
            takedownsInAlcove: 0,
            takedownsInEnemyFountain: 0,
            teamBaronKills: 1,
            teamDamagePercentage: 0.23046560901169325,
            teamElderDragonKills: 0,
            teamRiftHeraldKills: 2,
            thirdInhibitorDestroyedTime: 2273.6845559,
            tookLargeDamageSurvived: 0,
            turretPlatesTaken: 2,
            turretTakedowns: 8,
            turretsTakenWithRiftHerald: 5,
            twentyMinionsIn3SecondsCount: 0,
            twoWardsOneSweeperCount: 0,
            unseenRecalls: 0,
            visionScoreAdvantageLaneOpponent: 0.10794985294342041,
            visionScorePerMinute: 0.731263807380275,
            wardTakedowns: 5,
            wardTakedownsBefore20M: 4,
            wardsGuarded: 0,
          },
          champExperience: 23047,
          champLevel: 18,
          championId: 6,
          championName: "Urgot",
          championTransform: 0,
          commandPings: 0,
          consumablesPurchased: 1,
          damageDealtToBuildings: 15030,
          damageDealtToObjectives: 38213,
          damageDealtToTurrets: 15030,
          damageSelfMitigated: 45337,
          dangerPings: 0,
          deaths: 7,
          detectorWardsPlaced: 0,
          doubleKills: 1,
          dragonKills: 1,
          eligibleForProgression: true,
          enemyMissingPings: 1,
          enemyVisionPings: 5,
          firstBloodAssist: false,
          firstBloodKill: false,
          firstTowerAssist: false,
          firstTowerKill: true,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: false,
          getBackPings: 0,
          goldEarned: 19425,
          goldSpent: 17830,
          holdPings: 0,
          individualPosition: "TOP",
          inhibitorKills: 0,
          inhibitorTakedowns: 0,
          inhibitorsLost: 0,
          item0: 6694,
          item1: 6631,
          item2: 3026,
          item3: 3047,
          item4: 3053,
          item5: 3071,
          item6: 3340,
          itemsPurchased: 21,
          killingSprees: 2,
          kills: 10,
          lane: "TOP",
          largestCriticalStrike: 0,
          largestKillingSpree: 4,
          largestMultiKill: 1,
          longestTimeSpentLiving: 735,
          magicDamageDealt: 0,
          magicDamageDealtToChampions: 0,
          magicDamageTaken: 13006,
          missions: {
            playerScore0: 0,
            playerScore1: 0,
            playerScore10: 0,
            playerScore11: 0,
            playerScore2: 0,
            playerScore3: 0,
            playerScore4: 0,
            playerScore5: 0,
            playerScore6: 0,
            playerScore7: 0,
            playerScore8: 0,
            playerScore9: 0,
          },
          needVisionPings: 0,
          neutralMinionsKilled: 12,
          nexusKills: 0,
          nexusLost: 0,
          nexusTakedowns: 1,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          onMyWayPings: 0,
          participantId: 1,
          pentaKills: 0,
          perks: {
            statPerks: { defense: 5001, flex: 5008, offense: 5008 },
            styles: [
              {
                description: "primaryStyle",
                selections: [
                  { perk: 8005, var1: 3195, var2: 1864, var3: 1330 },
                  { perk: 9111, var1: 1630, var2: 300, var3: 0 },
                  { perk: 9105, var1: 16, var2: 30, var3: 0 },
                  { perk: 8299, var1: 1637, var2: 0, var3: 0 },
                ],
                style: 8000,
              },
              {
                description: "subStyle",
                selections: [
                  { perk: 8347, var1: 0, var2: 0, var3: 0 },
                  { perk: 8345, var1: 3, var2: 0, var3: 0 },
                ],
                style: 8300,
              },
            ],
          },
          physicalDamageDealt: 255272,
          physicalDamageDealtToChampions: 33938,
          physicalDamageTaken: 20115,
          placement: 0,
          playerAugment1: 0,
          playerAugment2: 0,
          playerAugment3: 0,
          playerAugment4: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore10: 0,
          playerScore11: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          playerSubteamId: 0,
          profileIcon: 1154,
          pushPings: 0,
          puuid:
            "5Auw8ESJt1aCoC3mNNr9rK45XHS9YJmlTwPMI1N3oXo1RXCX_7kFOdCB2Vqtp0_6BsEo4AY4-UiEKg",
          quadraKills: 0,
          riotIdGameName: "LavaSquid",
          riotIdTagline: "Urgod",
          role: "SOLO",
          sightWardsBoughtInGame: 0,
          spell1Casts: 74,
          spell2Casts: 312,
          spell3Casts: 38,
          spell4Casts: 20,
          subteamPlacement: 0,
          summoner1Casts: 6,
          summoner1Id: 14,
          summoner2Casts: 4,
          summoner2Id: 4,
          summonerId: "UO9JbVBh3-gKd9VYEN8V-tUmuqgGGr6w2FcDCJ3xP--W711x",
          summonerLevel: 585,
          summonerName: "LavaSquid",
          teamEarlySurrendered: false,
          teamId: 100,
          teamPosition: "TOP",
          timeCCingOthers: 43,
          timePlayed: 2292,
          totalAllyJungleMinionsKilled: 4,
          totalDamageDealt: 271317,
          totalDamageDealtToChampions: 37908,
          totalDamageShieldedOnTeammates: 0,
          totalDamageTaken: 36545,
          totalEnemyJungleMinionsKilled: 0,
          totalHeal: 6740,
          totalHealsOnTeammates: 0,
          totalMinionsKilled: 253,
          totalTimeCCDealt: 341,
          totalTimeSpentDead: 288,
          totalUnitsHealed: 1,
          tripleKills: 0,
          trueDamageDealt: 16044,
          trueDamageDealtToChampions: 3969,
          trueDamageTaken: 3424,
          turretKills: 7,
          turretTakedowns: 8,
          turretsLost: 6,
          unrealKills: 0,
          visionClearedPings: 0,
          visionScore: 27,
          visionWardsBoughtInGame: 0,
          wardsKilled: 5,
          wardsPlaced: 11,
          win: true,
        },
        {
          allInPings: 0,
          assistMePings: 0,
          assists: 15,
          baitPings: 0,
          baronKills: 1,
          basicPings: 0,
          bountyLevel: 0,
          challenges: {
            "12AssistStreakCount": 0,
            abilityUses: 307,
            acesBefore15Minutes: 0,
            alliedJungleMonsterKills: 79,
            baronBuffGoldAdvantageOverThreshold: 1,
            baronTakedowns: 1,
            blastConeOppositeOpponentCount: 0,
            bountyGold: 0,
            buffsStolen: 1,
            completeSupportQuestInTime: 0,
            controlWardTimeCoverageInRiverOrEnemyHalf: 0.6902919783344158,
            controlWardsPlaced: 3,
            damagePerMinute: 499.75534604867033,
            damageTakenOnTeamPercentage: 0.24263493698884295,
            dancedWithRiftHerald: 0,
            deathsByEnemyChamps: 6,
            dodgeSkillShotsSmallWindow: 0,
            doubleAces: 0,
            dragonTakedowns: 2,
            earliestBaron: 2095.6603145999998,
            earliestDragonTakedown: 777.2526084,
            earlyLaningPhaseGoldExpAdvantage: 1,
            effectiveHealAndShielding: 0,
            elderDragonKillsWithOpposingSoul: 0,
            elderDragonMultikills: 0,
            enemyChampionImmobilizations: 56,
            enemyJungleMonsterKills: 16,
            epicMonsterKillsNearEnemyJungler: 0,
            epicMonsterKillsWithin30SecondsOfSpawn: 1,
            epicMonsterSteals: 0,
            epicMonsterStolenWithoutSmite: 0,
            firstTurretKilled: 1,
            firstTurretKilledTime: 898.8932553,
            flawlessAces: 0,
            fullTeamTakedown: 1,
            gameLength: 2293.0749103,
            goldPerMinute: 377.212884960041,
            hadOpenNexus: 0,
            highestWardKills: 1,
            immobilizeAndKillWithAlly: 11,
            initialBuffCount: 2,
            initialCrabCount: 2,
            jungleCsBefore10Minutes: 60.00000008940697,
            junglerKillsEarlyJungle: 1,
            junglerTakedownsNearDamagedEpicMonster: 0,
            kTurretsDestroyedBeforePlatesFall: 0,
            kda: 3.1666666666666665,
            killAfterHiddenWithAlly: 4,
            killParticipation: 0.36538461538461536,
            killedChampTookFullTeamDamageSurvived: 0,
            killingSprees: 0,
            killsNearEnemyTurret: 1,
            killsOnLanersEarlyJungleAsJungler: 0,
            killsOnRecentlyHealedByAramPack: 0,
            killsUnderOwnTurret: 1,
            killsWithHelpFromEpicMonster: 0,
            knockEnemyIntoTeamAndKill: 0,
            landSkillShotsEarlyGame: 0,
            laneMinionsFirst10Minutes: 0,
            laningPhaseGoldExpAdvantage: 0,
            legendaryCount: 0,
            lostAnInhibitor: 0,
            maxCsAdvantageOnLaneOpponent: 48.000000059604645,
            maxKillDeficit: 0,
            maxLevelLeadLaneOpponent: 3,
            mejaisFullStackInTime: 0,
            moreEnemyJungleThanOpponent: -24,
            multiKillOneSpell: 1,
            multiTurretRiftHeraldCount: 0,
            multikills: 0,
            multikillsAfterAggressiveFlash: 0,
            mythicItemUsed: 3152,
            outerTurretExecutesBefore10Minutes: 0,
            outnumberedKills: 0,
            outnumberedNexusKill: 0,
            perfectDragonSoulsTaken: 0,
            perfectGame: 0,
            pickKillWithAlly: 14,
            playedChampSelectPosition: 1,
            poroExplosions: 0,
            quickCleanse: 0,
            quickFirstTurret: 0,
            quickSoloKills: 0,
            riftHeraldTakedowns: 1,
            saveAllyFromDeath: 0,
            scuttleCrabKills: 3,
            skillshotsDodged: 12,
            skillshotsHit: 0,
            snowballsHit: 0,
            soloBaronKills: 0,
            soloKills: 3,
            stealthWardsPlaced: 0,
            survivedSingleDigitHpCount: 1,
            survivedThreeImmobilizesInFight: 2,
            takedownOnFirstTurret: 0,
            takedowns: 19,
            takedownsAfterGainingLevelAdvantage: 0,
            takedownsBeforeJungleMinionSpawn: 1,
            takedownsFirstXMinutes: 6,
            takedownsInAlcove: 0,
            takedownsInEnemyFountain: 0,
            teamBaronKills: 1,
            teamDamagePercentage: 0.11611720232059641,
            teamElderDragonKills: 0,
            teamRiftHeraldKills: 2,
            thirdInhibitorDestroyedTime: 2273.6845559,
            tookLargeDamageSurvived: 0,
            turretPlatesTaken: 3,
            turretTakedowns: 1,
            turretsTakenWithRiftHerald: 5,
            twentyMinionsIn3SecondsCount: 0,
            twoWardsOneSweeperCount: 0,
            unseenRecalls: 0,
            visionScoreAdvantageLaneOpponent: 1.781153917312622,
            visionScorePerMinute: 2.1505432015260175,
            wardTakedowns: 11,
            wardTakedownsBefore20M: 3,
            wardsGuarded: 1,
          },
          champExperience: 20556,
          champLevel: 18,
          championId: 9,
          championName: "FiddleSticks",
          championTransform: 0,
          commandPings: 5,
          consumablesPurchased: 4,
          damageDealtToBuildings: 927,
          damageDealtToObjectives: 38150,
          damageDealtToTurrets: 927,
          damageSelfMitigated: 30379,
          dangerPings: 0,
          deaths: 6,
          detectorWardsPlaced: 3,
          doubleKills: 0,
          dragonKills: 2,
          eligibleForProgression: true,
          enemyMissingPings: 4,
          enemyVisionPings: 0,
          firstBloodAssist: true,
          firstBloodKill: false,
          firstTowerAssist: false,
          firstTowerKill: false,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: false,
          getBackPings: 1,
          goldEarned: 14416,
          goldSpent: 12705,
          holdPings: 0,
          individualPosition: "JUNGLE",
          inhibitorKills: 3,
          inhibitorTakedowns: 4,
          inhibitorsLost: 0,
          item0: 4645,
          item1: 3157,
          item2: 3152,
          item3: 1026,
          item4: 3020,
          item5: 4630,
          item6: 3330,
          itemsPurchased: 18,
          killingSprees: 1,
          kills: 4,
          lane: "JUNGLE",
          largestCriticalStrike: 0,
          largestKillingSpree: 2,
          largestMultiKill: 1,
          longestTimeSpentLiving: 856,
          magicDamageDealt: 194666,
          magicDamageDealtToChampions: 17226,
          magicDamageTaken: 17260,
          missions: {
            playerScore0: 0,
            playerScore1: 0,
            playerScore10: 0,
            playerScore11: 0,
            playerScore2: 0,
            playerScore3: 0,
            playerScore4: 0,
            playerScore5: 0,
            playerScore6: 0,
            playerScore7: 0,
            playerScore8: 0,
            playerScore9: 0,
          },
          needVisionPings: 0,
          neutralMinionsKilled: 183,
          nexusKills: 1,
          nexusLost: 0,
          nexusTakedowns: 1,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          onMyWayPings: 0,
          participantId: 2,
          pentaKills: 0,
          perks: {
            statPerks: { defense: 5002, flex: 5008, offense: 5008 },
            styles: [
              {
                description: "primaryStyle",
                selections: [
                  { perk: 8128, var1: 1372, var2: 17, var3: 0 },
                  { perk: 8126, var1: 642, var2: 0, var3: 0 },
                  { perk: 8138, var1: 30, var2: 0, var3: 0 },
                  { perk: 8106, var1: 5, var2: 0, var3: 0 },
                ],
                style: 8100,
              },
              {
                description: "subStyle",
                selections: [
                  { perk: 8321, var1: 2, var2: 0, var3: 0 },
                  { perk: 8304, var1: 9, var2: 4, var3: 5 },
                ],
                style: 8300,
              },
            ],
          },
          physicalDamageDealt: 12792,
          physicalDamageDealtToChampions: 218,
          physicalDamageTaken: 25351,
          placement: 0,
          playerAugment1: 0,
          playerAugment2: 0,
          playerAugment3: 0,
          playerAugment4: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore10: 0,
          playerScore11: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          playerSubteamId: 0,
          profileIcon: 3222,
          pushPings: 0,
          puuid:
            "7QXxVXnBC5jlFqiuJe0CTpCeqO7EmcMT7Eu-BEyK-tfTl-EAfMV7YqVvEvhza6z_zJMryeMDGqrDtg",
          quadraKills: 0,
          riotIdGameName: "mjsyl",
          riotIdTagline: "EUW",
          role: "NONE",
          sightWardsBoughtInGame: 0,
          spell1Casts: 54,
          spell2Casts: 135,
          spell3Casts: 109,
          spell4Casts: 9,
          subteamPlacement: 0,
          summoner1Casts: 4,
          summoner1Id: 4,
          summoner2Casts: 21,
          summoner2Id: 11,
          summonerId:
            "JEwLw6U4CDTvPolJYAXBFGuNbvdVjbhiFNAc8l97pSM50UgpK9lHSgaiKw",
          summonerLevel: 87,
          summonerName: "mjsyl",
          teamEarlySurrendered: false,
          teamId: 100,
          teamPosition: "JUNGLE",
          timeCCingOthers: 48,
          timePlayed: 2292,
          totalAllyJungleMinionsKilled: 124,
          totalDamageDealt: 269243,
          totalDamageDealtToChampions: 19099,
          totalDamageShieldedOnTeammates: 0,
          totalDamageTaken: 45301,
          totalEnemyJungleMinionsKilled: 18,
          totalHeal: 23552,
          totalHealsOnTeammates: 0,
          totalMinionsKilled: 45,
          totalTimeCCDealt: 1049,
          totalTimeSpentDead: 248,
          totalUnitsHealed: 1,
          tripleKills: 0,
          trueDamageDealt: 61785,
          trueDamageDealtToChampions: 1654,
          trueDamageTaken: 2689,
          turretKills: 1,
          turretTakedowns: 1,
          turretsLost: 6,
          unrealKills: 0,
          visionClearedPings: 0,
          visionScore: 82,
          visionWardsBoughtInGame: 3,
          wardsKilled: 11,
          wardsPlaced: 3,
          win: true,
        },
        {
          allInPings: 0,
          assistMePings: 2,
          assists: 11,
          baitPings: 0,
          baronKills: 0,
          basicPings: 0,
          bountyLevel: 0,
          challenges: {
            "12AssistStreakCount": 0,
            abilityUses: 640,
            acesBefore15Minutes: 0,
            alliedJungleMonsterKills: 4,
            baronBuffGoldAdvantageOverThreshold: 1,
            baronTakedowns: 1,
            blastConeOppositeOpponentCount: 0,
            bountyGold: 600,
            buffsStolen: 2,
            completeSupportQuestInTime: 0,
            controlWardsPlaced: 0,
            damagePerMinute: 910.9197340730244,
            damageTakenOnTeamPercentage: 0.14728975319891352,
            dancedWithRiftHerald: 0,
            deathsByEnemyChamps: 7,
            dodgeSkillShotsSmallWindow: 0,
            doubleAces: 0,
            dragonTakedowns: 2,
            earliestBaron: 2095.6603145999998,
            earliestDragonTakedown: 777.2526084,
            earlyLaningPhaseGoldExpAdvantage: 0,
            effectiveHealAndShielding: 0,
            elderDragonKillsWithOpposingSoul: 0,
            elderDragonMultikills: 0,
            enemyChampionImmobilizations: 11,
            enemyJungleMonsterKills: 7,
            epicMonsterKillsNearEnemyJungler: 0,
            epicMonsterKillsWithin30SecondsOfSpawn: 0,
            epicMonsterSteals: 0,
            epicMonsterStolenWithoutSmite: 0,
            firstTurretKilled: 1,
            firstTurretKilledTime: 898.8932553,
            flawlessAces: 0,
            fullTeamTakedown: 1,
            gameLength: 2293.0749103,
            getTakedownsInAllLanesEarlyJungleAsLaner: 0,
            goldPerMinute: 421.64652622971056,
            hadOpenNexus: 0,
            immobilizeAndKillWithAlly: 2,
            initialBuffCount: 0,
            initialCrabCount: 0,
            jungleCsBefore10Minutes: 0,
            junglerTakedownsNearDamagedEpicMonster: 0,
            kTurretsDestroyedBeforePlatesFall: 0,
            kda: 2.5714285714285716,
            killAfterHiddenWithAlly: 6,
            killParticipation: 0.34615384615384615,
            killedChampTookFullTeamDamageSurvived: 0,
            killingSprees: 0,
            killsNearEnemyTurret: 1,
            killsOnOtherLanesEarlyJungleAsLaner: 0,
            killsOnRecentlyHealedByAramPack: 0,
            killsUnderOwnTurret: 1,
            killsWithHelpFromEpicMonster: 0,
            knockEnemyIntoTeamAndKill: 1,
            landSkillShotsEarlyGame: 6,
            laneMinionsFirst10Minutes: 63,
            laningPhaseGoldExpAdvantage: 0,
            legendaryCount: 0,
            lostAnInhibitor: 0,
            maxCsAdvantageOnLaneOpponent: 32.400000005960464,
            maxKillDeficit: 0,
            maxLevelLeadLaneOpponent: 1,
            mejaisFullStackInTime: 0,
            moreEnemyJungleThanOpponent: 0,
            multiKillOneSpell: 0,
            multiTurretRiftHeraldCount: 0,
            multikills: 0,
            multikillsAfterAggressiveFlash: 0,
            mythicItemUsed: 3142,
            outerTurretExecutesBefore10Minutes: 0,
            outnumberedKills: 2,
            outnumberedNexusKill: 0,
            perfectDragonSoulsTaken: 0,
            perfectGame: 0,
            pickKillWithAlly: 13,
            playedChampSelectPosition: 1,
            poroExplosions: 0,
            quickCleanse: 0,
            quickFirstTurret: 0,
            quickSoloKills: 0,
            riftHeraldTakedowns: 0,
            saveAllyFromDeath: 0,
            scuttleCrabKills: 0,
            skillshotsDodged: 22,
            skillshotsHit: 34,
            snowballsHit: 0,
            soloBaronKills: 0,
            soloKills: 2,
            stealthWardsPlaced: 13,
            survivedSingleDigitHpCount: 0,
            survivedThreeImmobilizesInFight: 0,
            takedownOnFirstTurret: 0,
            takedowns: 18,
            takedownsAfterGainingLevelAdvantage: 0,
            takedownsBeforeJungleMinionSpawn: 1,
            takedownsFirstXMinutes: 3,
            takedownsInAlcove: 0,
            takedownsInEnemyFountain: 0,
            teamBaronKills: 1,
            teamDamagePercentage: 0.21165046436317694,
            teamElderDragonKills: 0,
            teamRiftHeraldKills: 2,
            teleportTakedowns: 1,
            thirdInhibitorDestroyedTime: 2273.6845559,
            tookLargeDamageSurvived: 0,
            turretPlatesTaken: 4,
            turretTakedowns: 0,
            turretsTakenWithRiftHerald: 5,
            twentyMinionsIn3SecondsCount: 0,
            twoWardsOneSweeperCount: 0,
            unseenRecalls: 0,
            visionScoreAdvantageLaneOpponent: 0.22766625881195068,
            visionScorePerMinute: 0.6179589721359002,
            wardTakedowns: 1,
            wardTakedownsBefore20M: 0,
            wardsGuarded: 0,
          },
          champExperience: 20625,
          champLevel: 18,
          championId: 126,
          championName: "Jayce",
          championTransform: 0,
          commandPings: 1,
          consumablesPurchased: 1,
          damageDealtToBuildings: 905,
          damageDealtToObjectives: 6464,
          damageDealtToTurrets: 905,
          damageSelfMitigated: 18437,
          dangerPings: 0,
          deaths: 7,
          detectorWardsPlaced: 0,
          doubleKills: 0,
          dragonKills: 0,
          eligibleForProgression: true,
          enemyMissingPings: 5,
          enemyVisionPings: 6,
          firstBloodAssist: true,
          firstBloodKill: false,
          firstTowerAssist: false,
          firstTowerKill: false,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: false,
          getBackPings: 4,
          goldEarned: 16114,
          goldSpent: 14750,
          holdPings: 0,
          individualPosition: "MIDDLE",
          inhibitorKills: 0,
          inhibitorTakedowns: 0,
          inhibitorsLost: 0,
          item0: 3042,
          item1: 3142,
          item2: 6694,
          item3: 3161,
          item4: 3134,
          item5: 3158,
          item6: 3340,
          itemsPurchased: 26,
          killingSprees: 3,
          kills: 7,
          lane: "MIDDLE",
          largestCriticalStrike: 0,
          largestKillingSpree: 2,
          largestMultiKill: 1,
          longestTimeSpentLiving: 499,
          magicDamageDealt: 28403,
          magicDamageDealtToChampions: 5203,
          magicDamageTaken: 14478,
          missions: {
            playerScore0: 0,
            playerScore1: 0,
            playerScore10: 0,
            playerScore11: 0,
            playerScore2: 0,
            playerScore3: 0,
            playerScore4: 0,
            playerScore5: 0,
            playerScore6: 0,
            playerScore7: 0,
            playerScore8: 0,
            playerScore9: 0,
          },
          needVisionPings: 0,
          neutralMinionsKilled: 28,
          nexusKills: 0,
          nexusLost: 0,
          nexusTakedowns: 1,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          onMyWayPings: 12,
          participantId: 3,
          pentaKills: 0,
          perks: {
            statPerks: { defense: 5003, flex: 5008, offense: 5008 },
            styles: [
              {
                description: "primaryStyle",
                selections: [
                  { perk: 8230, var1: 18, var2: 0, var3: 0 },
                  { perk: 8226, var1: 250, var2: 1349, var3: 0 },
                  { perk: 8233, var1: 22, var2: 10, var3: 0 },
                  { perk: 8237, var1: 644, var2: 0, var3: 0 },
                ],
                style: 8200,
              },
              {
                description: "subStyle",
                selections: [
                  { perk: 8304, var1: 10, var2: 3, var3: 0 },
                  { perk: 8345, var1: 3, var2: 0, var3: 0 },
                ],
                style: 8300,
              },
            ],
          },
          physicalDamageDealt: 215840,
          physicalDamageDealtToChampions: 29325,
          physicalDamageTaken: 11645,
          placement: 0,
          playerAugment1: 0,
          playerAugment2: 0,
          playerAugment3: 0,
          playerAugment4: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore10: 0,
          playerScore11: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          playerSubteamId: 0,
          profileIcon: 6350,
          pushPings: 0,
          puuid:
            "TmxZY9nBz9t1udB9HdkpdtOXURQDv52h4VPNrrMJF5yT869xHd42-FSqWvrsXBteWJGbCxNqD3gVNQ",
          quadraKills: 0,
          riotIdGameName: "YOUNG ROCK",
          riotIdTagline: "EUW",
          role: "SOLO",
          sightWardsBoughtInGame: 0,
          spell1Casts: 194,
          spell2Casts: 136,
          spell3Casts: 118,
          spell4Casts: 192,
          subteamPlacement: 0,
          summoner1Casts: 6,
          summoner1Id: 12,
          summoner2Casts: 6,
          summoner2Id: 4,
          summonerId: "U84bGwVveBqdIDzpfgJ2nJz_Q_bKFYEaJuVYK3vteq_eNq4",
          summonerLevel: 501,
          summonerName: "YOUNG ROCK",
          teamEarlySurrendered: false,
          teamId: 100,
          teamPosition: "MIDDLE",
          timeCCingOthers: 14,
          timePlayed: 2292,
          totalAllyJungleMinionsKilled: 8,
          totalDamageDealt: 248805,
          totalDamageDealtToChampions: 34813,
          totalDamageShieldedOnTeammates: 0,
          totalDamageTaken: 27499,
          totalEnemyJungleMinionsKilled: 18,
          totalHeal: 2729,
          totalHealsOnTeammates: 0,
          totalMinionsKilled: 242,
          totalTimeCCDealt: 310,
          totalTimeSpentDead: 258,
          totalUnitsHealed: 1,
          tripleKills: 0,
          trueDamageDealt: 4561,
          trueDamageDealtToChampions: 285,
          trueDamageTaken: 1375,
          turretKills: 0,
          turretTakedowns: 0,
          turretsLost: 6,
          unrealKills: 0,
          visionClearedPings: 0,
          visionScore: 23,
          visionWardsBoughtInGame: 0,
          wardsKilled: 1,
          wardsPlaced: 13,
          win: true,
        },
        {
          allInPings: 0,
          assistMePings: 5,
          assists: 10,
          baitPings: 0,
          baronKills: 0,
          basicPings: 0,
          bountyLevel: 10,
          challenges: {
            "12AssistStreakCount": 0,
            abilityUses: 235,
            acesBefore15Minutes: 0,
            alliedJungleMonsterKills: 9,
            baronBuffGoldAdvantageOverThreshold: 1,
            baronTakedowns: 1,
            blastConeOppositeOpponentCount: 0,
            bountyGold: 0,
            buffsStolen: 0,
            completeSupportQuestInTime: 0,
            controlWardsPlaced: 0,
            damagePerMinute: 1616.5772167316711,
            damageTakenOnTeamPercentage: 0.2182090394265694,
            dancedWithRiftHerald: 0,
            deathsByEnemyChamps: 8,
            dodgeSkillShotsSmallWindow: 0,
            doubleAces: 0,
            dragonTakedowns: 0,
            earliestBaron: 2095.6603145999998,
            earlyLaningPhaseGoldExpAdvantage: 0,
            effectiveHealAndShielding: 286.0000305175781,
            elderDragonKillsWithOpposingSoul: 0,
            elderDragonMultikills: 0,
            enemyChampionImmobilizations: 48,
            enemyJungleMonsterKills: 14,
            epicMonsterKillsNearEnemyJungler: 0,
            epicMonsterKillsWithin30SecondsOfSpawn: 0,
            epicMonsterSteals: 0,
            epicMonsterStolenWithoutSmite: 0,
            fastestLegendary: 2214.5206716,
            firstTurretKilled: 1,
            firstTurretKilledTime: 898.8932553,
            flawlessAces: 0,
            fullTeamTakedown: 1,
            gameLength: 2293.0749103,
            getTakedownsInAllLanesEarlyJungleAsLaner: 0,
            goldPerMinute: 625.2718857971887,
            hadOpenNexus: 0,
            highestChampionDamage: 1,
            immobilizeAndKillWithAlly: 6,
            initialBuffCount: 0,
            initialCrabCount: 0,
            jungleCsBefore10Minutes: 0,
            junglerTakedownsNearDamagedEpicMonster: 2,
            kTurretsDestroyedBeforePlatesFall: 0,
            kda: 4.625,
            killAfterHiddenWithAlly: 6,
            killParticipation: 0.7115384615384616,
            killedChampTookFullTeamDamageSurvived: 0,
            killingSprees: 4,
            killsNearEnemyTurret: 3,
            killsOnOtherLanesEarlyJungleAsLaner: 0,
            killsOnRecentlyHealedByAramPack: 0,
            killsUnderOwnTurret: 3,
            killsWithHelpFromEpicMonster: 1,
            knockEnemyIntoTeamAndKill: 0,
            landSkillShotsEarlyGame: 6,
            laneMinionsFirst10Minutes: 68,
            laningPhaseGoldExpAdvantage: 0,
            legendaryCount: 1,
            lostAnInhibitor: 0,
            maxCsAdvantageOnLaneOpponent: 42.60000005364418,
            maxKillDeficit: 0,
            maxLevelLeadLaneOpponent: 2,
            mejaisFullStackInTime: 0,
            moreEnemyJungleThanOpponent: 0,
            multiKillOneSpell: 0,
            multiTurretRiftHeraldCount: 0,
            multikills: 9,
            multikillsAfterAggressiveFlash: 1,
            mythicItemUsed: 3031,
            outerTurretExecutesBefore10Minutes: 0,
            outnumberedKills: 10,
            outnumberedNexusKill: 0,
            perfectDragonSoulsTaken: 0,
            perfectGame: 0,
            pickKillWithAlly: 30,
            playedChampSelectPosition: 1,
            poroExplosions: 0,
            quickCleanse: 0,
            quickFirstTurret: 0,
            quickSoloKills: 2,
            riftHeraldTakedowns: 0,
            saveAllyFromDeath: 0,
            scuttleCrabKills: 0,
            skillshotsDodged: 19,
            skillshotsHit: 36,
            snowballsHit: 0,
            soloBaronKills: 0,
            soloKills: 2,
            stealthWardsPlaced: 1,
            survivedSingleDigitHpCount: 0,
            survivedThreeImmobilizesInFight: 2,
            takedownOnFirstTurret: 0,
            takedowns: 37,
            takedownsAfterGainingLevelAdvantage: 0,
            takedownsBeforeJungleMinionSpawn: 1,
            takedownsFirstXMinutes: 11,
            takedownsInAlcove: 1,
            takedownsInEnemyFountain: 1,
            teamBaronKills: 1,
            teamDamagePercentage: 0.37560863575797965,
            teamElderDragonKills: 0,
            teamRiftHeraldKills: 2,
            thirdInhibitorDestroyedTime: 2273.6845559,
            tookLargeDamageSurvived: 0,
            turretPlatesTaken: 1,
            turretTakedowns: 5,
            turretsTakenWithRiftHerald: 5,
            twentyMinionsIn3SecondsCount: 0,
            twoWardsOneSweeperCount: 0,
            unseenRecalls: 0,
            visionScoreAdvantageLaneOpponent: -0.5603736639022827,
            visionScorePerMinute: 0.3413049449118648,
            wardTakedowns: 4,
            wardTakedownsBefore20M: 0,
            wardsGuarded: 0,
          },
          champExperience: 21508,
          champLevel: 18,
          championId: 360,
          championName: "Samira",
          championTransform: 0,
          commandPings: 0,
          consumablesPurchased: 5,
          damageDealtToBuildings: 6431,
          damageDealtToObjectives: 13969,
          damageDealtToTurrets: 6431,
          damageSelfMitigated: 29621,
          dangerPings: 0,
          deaths: 8,
          detectorWardsPlaced: 0,
          doubleKills: 6,
          dragonKills: 0,
          eligibleForProgression: true,
          enemyMissingPings: 4,
          enemyVisionPings: 1,
          firstBloodAssist: false,
          firstBloodKill: true,
          firstTowerAssist: false,
          firstTowerKill: false,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: false,
          getBackPings: 0,
          goldEarned: 23896,
          goldSpent: 21050,
          holdPings: 0,
          individualPosition: "BOTTOM",
          inhibitorKills: 1,
          inhibitorTakedowns: 2,
          inhibitorsLost: 0,
          item0: 3036,
          item1: 3026,
          item2: 3111,
          item3: 3072,
          item4: 6673,
          item5: 3031,
          item6: 3363,
          itemsPurchased: 31,
          killingSprees: 6,
          kills: 27,
          lane: "BOTTOM",
          largestCriticalStrike: 1193,
          largestKillingSpree: 10,
          largestMultiKill: 3,
          longestTimeSpentLiving: 457,
          magicDamageDealt: 26401,
          magicDamageDealtToChampions: 6753,
          magicDamageTaken: 18048,
          missions: {
            playerScore0: 0,
            playerScore1: 0,
            playerScore10: 0,
            playerScore11: 0,
            playerScore2: 0,
            playerScore3: 0,
            playerScore4: 0,
            playerScore5: 0,
            playerScore6: 0,
            playerScore7: 0,
            playerScore8: 0,
            playerScore9: 0,
          },
          needVisionPings: 0,
          neutralMinionsKilled: 19,
          nexusKills: 0,
          nexusLost: 0,
          nexusTakedowns: 0,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          onMyWayPings: 2,
          participantId: 4,
          pentaKills: 0,
          perks: {
            statPerks: { defense: 5002, flex: 5008, offense: 5005 },
            styles: [
              {
                description: "primaryStyle",
                selections: [
                  { perk: 8010, var1: 738, var2: 0, var3: 0 },
                  { perk: 9111, var1: 2401, var2: 740, var3: 0 },
                  { perk: 9103, var1: 14, var2: 20, var3: 0 },
                  { perk: 8299, var1: 1547, var2: 0, var3: 0 },
                ],
                style: 8000,
              },
              {
                description: "subStyle",
                selections: [
                  { perk: 8138, var1: 18, var2: 0, var3: 0 },
                  { perk: 8135, var1: 450, var2: 5, var3: 0 },
                ],
                style: 8100,
              },
            ],
          },
          physicalDamageDealt: 320978,
          physicalDamageDealtToChampions: 54254,
          physicalDamageTaken: 18778,
          placement: 0,
          playerAugment1: 0,
          playerAugment2: 0,
          playerAugment3: 0,
          playerAugment4: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore10: 0,
          playerScore11: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          playerSubteamId: 0,
          profileIcon: 5981,
          pushPings: 0,
          puuid:
            "oIS-rb-bKnC_KJUA-PWvUkXx0qYZ89f_0bKKwFMg514upKSxGvoOs2kkSIL0E_yScPIf8MqIJ_UGSw",
          quadraKills: 0,
          riotIdGameName: "blankor",
          riotIdTagline: "demon",
          role: "CARRY",
          sightWardsBoughtInGame: 0,
          spell1Casts: 165,
          spell2Casts: 18,
          spell3Casts: 43,
          spell4Casts: 9,
          subteamPlacement: 0,
          summoner1Casts: 4,
          summoner1Id: 7,
          summoner2Casts: 6,
          summoner2Id: 4,
          summonerId: "O9_7ybKkSW4CTPBepy86cDX6DTIRzG3pELIIr1QwMH-56Fbe",
          summonerLevel: 863,
          summonerName: "iamwack",
          teamEarlySurrendered: false,
          teamId: 100,
          teamPosition: "BOTTOM",
          timeCCingOthers: 7,
          timePlayed: 2292,
          totalAllyJungleMinionsKilled: 8,
          totalDamageDealt: 349304,
          totalDamageDealtToChampions: 61782,
          totalDamageShieldedOnTeammates: 0,
          totalDamageTaken: 40741,
          totalEnemyJungleMinionsKilled: 11,
          totalHeal: 20680,
          totalHealsOnTeammates: 286,
          totalMinionsKilled: 288,
          totalTimeCCDealt: 49,
          totalTimeSpentDead: 299,
          totalUnitsHealed: 2,
          tripleKills: 3,
          trueDamageDealt: 1925,
          trueDamageDealtToChampions: 774,
          trueDamageTaken: 3914,
          turretKills: 3,
          turretTakedowns: 5,
          turretsLost: 6,
          unrealKills: 0,
          visionClearedPings: 0,
          visionScore: 13,
          visionWardsBoughtInGame: 0,
          wardsKilled: 4,
          wardsPlaced: 4,
          win: true,
        },
        {
          allInPings: 0,
          assistMePings: 2,
          assists: 21,
          baitPings: 0,
          baronKills: 0,
          basicPings: 0,
          bountyLevel: 0,
          challenges: {
            "12AssistStreakCount": 0,
            abilityUses: 133,
            acesBefore15Minutes: 0,
            alliedJungleMonsterKills: 0,
            baronBuffGoldAdvantageOverThreshold: 1,
            baronTakedowns: 1,
            blastConeOppositeOpponentCount: 0,
            bountyGold: 0,
            buffsStolen: 0,
            completeSupportQuestInTime: 0,
            controlWardTimeCoverageInRiverOrEnemyHalf: 0.8840402241524625,
            controlWardsPlaced: 3,
            damagePerMinute: 284.7369534809829,
            damageTakenOnTeamPercentage: 0.19612783404276754,
            dancedWithRiftHerald: 0,
            deathsByEnemyChamps: 8,
            dodgeSkillShotsSmallWindow: 0,
            doubleAces: 0,
            dragonTakedowns: 1,
            earliestBaron: 2095.6603145999998,
            earliestDragonTakedown: 777.2526084,
            earlyLaningPhaseGoldExpAdvantage: 0,
            effectiveHealAndShielding: 0,
            elderDragonKillsWithOpposingSoul: 0,
            elderDragonMultikills: 0,
            enemyChampionImmobilizations: 52,
            enemyJungleMonsterKills: 0,
            epicMonsterKillsNearEnemyJungler: 0,
            epicMonsterKillsWithin30SecondsOfSpawn: 0,
            epicMonsterSteals: 0,
            epicMonsterStolenWithoutSmite: 0,
            firstTurretKilled: 1,
            firstTurretKilledTime: 898.8932553,
            flawlessAces: 0,
            fullTeamTakedown: 1,
            gameLength: 2293.0749103,
            getTakedownsInAllLanesEarlyJungleAsLaner: 0,
            goldPerMinute: 282.5382392638401,
            hadOpenNexus: 0,
            immobilizeAndKillWithAlly: 18,
            initialBuffCount: 0,
            initialCrabCount: 0,
            jungleCsBefore10Minutes: 0,
            junglerTakedownsNearDamagedEpicMonster: 0,
            kTurretsDestroyedBeforePlatesFall: 0,
            kda: 3.125,
            killAfterHiddenWithAlly: 3,
            killParticipation: 0.4807692307692308,
            killedChampTookFullTeamDamageSurvived: 0,
            killingSprees: 0,
            killsNearEnemyTurret: 1,
            killsOnOtherLanesEarlyJungleAsLaner: 0,
            killsOnRecentlyHealedByAramPack: 0,
            killsUnderOwnTurret: 0,
            killsWithHelpFromEpicMonster: 0,
            knockEnemyIntoTeamAndKill: 7,
            landSkillShotsEarlyGame: 5,
            laneMinionsFirst10Minutes: 12,
            laningPhaseGoldExpAdvantage: 0,
            legendaryCount: 0,
            lostAnInhibitor: 0,
            maxCsAdvantageOnLaneOpponent: 17,
            maxKillDeficit: 0,
            maxLevelLeadLaneOpponent: 2,
            mejaisFullStackInTime: 0,
            moreEnemyJungleThanOpponent: 0,
            multiKillOneSpell: 0,
            multiTurretRiftHeraldCount: 0,
            multikills: 0,
            multikillsAfterAggressiveFlash: 0,
            mythicItemUsed: 2065,
            outerTurretExecutesBefore10Minutes: 0,
            outnumberedKills: 1,
            outnumberedNexusKill: 0,
            perfectDragonSoulsTaken: 0,
            perfectGame: 0,
            pickKillWithAlly: 22,
            playedChampSelectPosition: 1,
            poroExplosions: 0,
            quickCleanse: 0,
            quickFirstTurret: 0,
            quickSoloKills: 0,
            riftHeraldTakedowns: 0,
            saveAllyFromDeath: 0,
            scuttleCrabKills: 0,
            skillshotsDodged: 16,
            skillshotsHit: 14,
            snowballsHit: 0,
            soloBaronKills: 0,
            soloKills: 0,
            stealthWardsPlaced: 21,
            survivedSingleDigitHpCount: 0,
            survivedThreeImmobilizesInFight: 0,
            takedownOnFirstTurret: 0,
            takedowns: 25,
            takedownsAfterGainingLevelAdvantage: 0,
            takedownsBeforeJungleMinionSpawn: 1,
            takedownsFirstXMinutes: 8,
            takedownsInAlcove: 1,
            takedownsInEnemyFountain: 0,
            teamBaronKills: 1,
            teamDamagePercentage: 0.06615808854655374,
            teamElderDragonKills: 0,
            teamRiftHeraldKills: 2,
            thirdInhibitorDestroyedTime: 2273.6845559,
            tookLargeDamageSurvived: 0,
            turretPlatesTaken: 0,
            turretTakedowns: 2,
            turretsTakenWithRiftHerald: 5,
            twentyMinionsIn3SecondsCount: 0,
            twoWardsOneSweeperCount: 0,
            unseenRecalls: 0,
            visionScoreAdvantageLaneOpponent: -0.15008872747421265,
            visionScorePerMinute: 1.937100544139228,
            wardTakedowns: 6,
            wardTakedownsBefore20M: 5,
            wardsGuarded: 1,
          },
          champExperience: 15298,
          champLevel: 16,
          championId: 53,
          championName: "Blitzcrank",
          championTransform: 0,
          commandPings: 30,
          consumablesPurchased: 10,
          damageDealtToBuildings: 449,
          damageDealtToObjectives: 710,
          damageDealtToTurrets: 449,
          damageSelfMitigated: 29909,
          dangerPings: 0,
          deaths: 8,
          detectorWardsPlaced: 3,
          doubleKills: 0,
          dragonKills: 0,
          eligibleForProgression: true,
          enemyMissingPings: 2,
          enemyVisionPings: 0,
          firstBloodAssist: true,
          firstBloodKill: false,
          firstTowerAssist: false,
          firstTowerKill: false,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: false,
          getBackPings: 0,
          goldEarned: 10798,
          goldSpent: 9825,
          holdPings: 0,
          individualPosition: "UTILITY",
          inhibitorKills: 0,
          inhibitorTakedowns: 0,
          inhibitorsLost: 0,
          item0: 3860,
          item1: 2065,
          item2: 3117,
          item3: 3050,
          item4: 3109,
          item5: 4638,
          item6: 3364,
          itemsPurchased: 25,
          killingSprees: 1,
          kills: 4,
          lane: "BOTTOM",
          largestCriticalStrike: 0,
          largestKillingSpree: 2,
          largestMultiKill: 1,
          longestTimeSpentLiving: 499,
          magicDamageDealt: 14238,
          magicDamageDealtToChampions: 7512,
          magicDamageTaken: 19261,
          missions: {
            playerScore0: 0,
            playerScore1: 0,
            playerScore10: 0,
            playerScore11: 0,
            playerScore2: 0,
            playerScore3: 0,
            playerScore4: 0,
            playerScore5: 0,
            playerScore6: 0,
            playerScore7: 0,
            playerScore8: 0,
            playerScore9: 0,
          },
          needVisionPings: 0,
          neutralMinionsKilled: 0,
          nexusKills: 0,
          nexusLost: 0,
          nexusTakedowns: 1,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          onMyWayPings: 0,
          participantId: 5,
          pentaKills: 0,
          perks: {
            statPerks: { defense: 5002, flex: 5002, offense: 5007 },
            styles: [
              {
                description: "primaryStyle",
                selections: [
                  { perk: 8351, var1: 52, var2: 626, var3: 0 },
                  { perk: 8306, var1: 16, var2: 0, var3: 0 },
                  { perk: 8345, var1: 3, var2: 0, var3: 0 },
                  { perk: 8347, var1: 0, var2: 0, var3: 0 },
                ],
                style: 8300,
              },
              {
                description: "subStyle",
                selections: [
                  { perk: 8234, var1: 18183, var2: 0, var3: 0 },
                  { perk: 8275, var1: 27, var2: 0, var3: 0 },
                ],
                style: 8200,
              },
            ],
          },
          physicalDamageDealt: 5430,
          physicalDamageDealtToChampions: 2787,
          physicalDamageTaken: 15619,
          placement: 0,
          playerAugment1: 0,
          playerAugment2: 0,
          playerAugment3: 0,
          playerAugment4: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore10: 0,
          playerScore11: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          playerSubteamId: 0,
          profileIcon: 5972,
          pushPings: 0,
          puuid:
            "fo9Zax2HrdeTXeDgc4YqykCgXj-ElhCYNUEvEPmQLx0yzy6gHtH-4vqCkip3d8OQUPNjSCqpZTVAhA",
          quadraKills: 0,
          riotIdGameName: "FuNdAmEnTaLs",
          riotIdTagline: "EUW",
          role: "SUPPORT",
          sightWardsBoughtInGame: 0,
          spell1Casts: 33,
          spell2Casts: 48,
          spell3Casts: 39,
          spell4Casts: 13,
          subteamPlacement: 0,
          summoner1Casts: 23,
          summoner1Id: 4,
          summoner2Casts: 4,
          summoner2Id: 14,
          summonerId: "pBA8kvErJIgJr8mUFWNiCEQuytbUJODzItfg3stbtwtyj40",
          summonerLevel: 388,
          summonerName: "FuNdAmEnTaLs",
          teamEarlySurrendered: false,
          teamId: 100,
          teamPosition: "UTILITY",
          timeCCingOthers: 44,
          timePlayed: 2292,
          totalAllyJungleMinionsKilled: 0,
          totalDamageDealt: 25642,
          totalDamageDealtToChampions: 10882,
          totalDamageShieldedOnTeammates: 0,
          totalDamageTaken: 36618,
          totalEnemyJungleMinionsKilled: 0,
          totalHeal: 3469,
          totalHealsOnTeammates: 0,
          totalMinionsKilled: 29,
          totalTimeCCDealt: 235,
          totalTimeSpentDead: 275,
          totalUnitsHealed: 1,
          tripleKills: 0,
          trueDamageDealt: 5973,
          trueDamageDealtToChampions: 582,
          trueDamageTaken: 1737,
          turretKills: 0,
          turretTakedowns: 2,
          turretsLost: 6,
          unrealKills: 0,
          visionClearedPings: 0,
          visionScore: 74,
          visionWardsBoughtInGame: 4,
          wardsKilled: 6,
          wardsPlaced: 24,
          win: true,
        },
        {
          allInPings: 0,
          assistMePings: 0,
          assists: 2,
          baitPings: 0,
          baronKills: 0,
          basicPings: 0,
          bountyLevel: 0,
          challenges: {
            "12AssistStreakCount": 0,
            abilityUses: 226,
            acesBefore15Minutes: 0,
            alliedJungleMonsterKills: 1,
            baronTakedowns: 0,
            blastConeOppositeOpponentCount: 0,
            bountyGold: 450,
            buffsStolen: 0,
            completeSupportQuestInTime: 0,
            controlWardsPlaced: 2,
            damagePerMinute: 944.3198912837541,
            damageTakenOnTeamPercentage: 0.26911592063793616,
            dancedWithRiftHerald: 0,
            deathsByEnemyChamps: 9,
            dodgeSkillShotsSmallWindow: 0,
            doubleAces: 0,
            dragonTakedowns: 1,
            earliestBaron: 1721.6596375,
            earliestDragonTakedown: 1634.3252412,
            earlyLaningPhaseGoldExpAdvantage: 0,
            effectiveHealAndShielding: 0,
            elderDragonKillsWithOpposingSoul: 0,
            elderDragonMultikills: 0,
            enemyChampionImmobilizations: 0,
            enemyJungleMonsterKills: 1,
            epicMonsterKillsNearEnemyJungler: 0,
            epicMonsterKillsWithin30SecondsOfSpawn: 0,
            epicMonsterSteals: 0,
            epicMonsterStolenWithoutSmite: 0,
            firstTurretKilled: 0,
            flawlessAces: 0,
            fullTeamTakedown: 0,
            gameLength: 2293.0749103,
            getTakedownsInAllLanesEarlyJungleAsLaner: 0,
            goldPerMinute: 448.6457361811204,
            hadOpenNexus: 0,
            immobilizeAndKillWithAlly: 0,
            initialBuffCount: 0,
            initialCrabCount: 0,
            jungleCsBefore10Minutes: 0,
            junglerTakedownsNearDamagedEpicMonster: 1,
            kTurretsDestroyedBeforePlatesFall: 0,
            kda: 1.1111111111111112,
            killAfterHiddenWithAlly: 0,
            killParticipation: 0.2777777777777778,
            killedChampTookFullTeamDamageSurvived: 0,
            killingSprees: 1,
            killsNearEnemyTurret: 2,
            killsOnOtherLanesEarlyJungleAsLaner: 0,
            killsOnRecentlyHealedByAramPack: 0,
            killsUnderOwnTurret: 0,
            killsWithHelpFromEpicMonster: 0,
            knockEnemyIntoTeamAndKill: 0,
            landSkillShotsEarlyGame: 0,
            laneMinionsFirst10Minutes: 78,
            laningPhaseGoldExpAdvantage: 0,
            legendaryCount: 0,
            lostAnInhibitor: 0,
            maxCsAdvantageOnLaneOpponent: 64,
            maxKillDeficit: 0,
            maxLevelLeadLaneOpponent: 3,
            mejaisFullStackInTime: 0,
            moreEnemyJungleThanOpponent: 0,
            multiKillOneSpell: 0,
            multiTurretRiftHeraldCount: 0,
            multikills: 1,
            multikillsAfterAggressiveFlash: 0,
            mythicItemUsed: 3078,
            outerTurretExecutesBefore10Minutes: 0,
            outnumberedKills: 1,
            outnumberedNexusKill: 0,
            perfectDragonSoulsTaken: 0,
            perfectGame: 0,
            pickKillWithAlly: 6,
            playedChampSelectPosition: 1,
            poroExplosions: 0,
            quickCleanse: 0,
            quickFirstTurret: 0,
            quickSoloKills: 0,
            riftHeraldTakedowns: 0,
            saveAllyFromDeath: 0,
            scuttleCrabKills: 1,
            skillshotsDodged: 9,
            skillshotsHit: 0,
            snowballsHit: 0,
            soloBaronKills: 0,
            soloKills: 4,
            soloTurretsLategame: 2,
            stealthWardsPlaced: 12,
            survivedSingleDigitHpCount: 0,
            survivedThreeImmobilizesInFight: 3,
            takedownOnFirstTurret: 0,
            takedowns: 10,
            takedownsAfterGainingLevelAdvantage: 0,
            takedownsBeforeJungleMinionSpawn: 0,
            takedownsFirstXMinutes: 1,
            takedownsInAlcove: 0,
            takedownsInEnemyFountain: 0,
            teamBaronKills: 1,
            teamDamagePercentage: 0.24815398101195213,
            teamElderDragonKills: 0,
            teamRiftHeraldKills: 0,
            tookLargeDamageSurvived: 0,
            turretPlatesTaken: 1,
            turretTakedowns: 3,
            turretsTakenWithRiftHerald: 0,
            twentyMinionsIn3SecondsCount: 0,
            twoWardsOneSweeperCount: 0,
            unseenRecalls: 0,
            visionScoreAdvantageLaneOpponent: -0.09743207693099976,
            visionScorePerMinute: 0.6600152594075921,
            wardTakedowns: 1,
            wardTakedownsBefore20M: 1,
            wardsGuarded: 0,
          },
          champExperience: 23245,
          champLevel: 18,
          championId: 86,
          championName: "Garen",
          championTransform: 0,
          commandPings: 5,
          consumablesPurchased: 4,
          damageDealtToBuildings: 8192,
          damageDealtToObjectives: 25149,
          damageDealtToTurrets: 8192,
          damageSelfMitigated: 85382,
          dangerPings: 0,
          deaths: 9,
          detectorWardsPlaced: 2,
          doubleKills: 1,
          dragonKills: 0,
          eligibleForProgression: true,
          enemyMissingPings: 1,
          enemyVisionPings: 0,
          firstBloodAssist: false,
          firstBloodKill: false,
          firstTowerAssist: false,
          firstTowerKill: false,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: false,
          getBackPings: 0,
          goldEarned: 17146,
          goldSpent: 17283,
          holdPings: 0,
          individualPosition: "TOP",
          inhibitorKills: 0,
          inhibitorTakedowns: 0,
          inhibitorsLost: 4,
          item0: 3026,
          item1: 3078,
          item2: 3006,
          item3: 3181,
          item4: 3046,
          item5: 3742,
          item6: 3340,
          itemsPurchased: 28,
          killingSprees: 3,
          kills: 8,
          lane: "TOP",
          largestCriticalStrike: 749,
          largestKillingSpree: 4,
          largestMultiKill: 2,
          longestTimeSpentLiving: 496,
          magicDamageDealt: 0,
          magicDamageDealtToChampions: 0,
          magicDamageTaken: 6249,
          missions: {
            playerScore0: 0,
            playerScore1: 0,
            playerScore10: 0,
            playerScore11: 0,
            playerScore2: 0,
            playerScore3: 0,
            playerScore4: 0,
            playerScore5: 0,
            playerScore6: 0,
            playerScore7: 0,
            playerScore8: 0,
            playerScore9: 0,
          },
          needVisionPings: 0,
          neutralMinionsKilled: 12,
          nexusKills: 0,
          nexusLost: 1,
          nexusTakedowns: 0,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          onMyWayPings: 1,
          participantId: 6,
          pentaKills: 0,
          perks: {
            statPerks: { defense: 5002, flex: 5008, offense: 5008 },
            styles: [
              {
                description: "primaryStyle",
                selections: [
                  { perk: 8230, var1: 16, var2: 0, var3: 0 },
                  { perk: 8275, var1: 14, var2: 0, var3: 0 },
                  { perk: 8234, var1: 18292, var2: 0, var3: 0 },
                  { perk: 8236, var1: 28, var2: 0, var3: 0 },
                ],
                style: 8200,
              },
              {
                description: "subStyle",
                selections: [
                  { perk: 8444, var1: 2291, var2: 0, var3: 0 },
                  { perk: 8451, var1: 277, var2: 0, var3: 0 },
                ],
                style: 8400,
              },
            ],
          },
          physicalDamageDealt: 252940,
          physicalDamageDealtToChampions: 28098,
          physicalDamageTaken: 46587,
          placement: 0,
          playerAugment1: 0,
          playerAugment2: 0,
          playerAugment3: 0,
          playerAugment4: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore10: 0,
          playerScore11: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          playerSubteamId: 0,
          profileIcon: 6081,
          pushPings: 0,
          puuid:
            "PfYLBSWOWVlOghVTey94pPEXKGaF_ecXUvwjSScJNaQmis8Ml9gGuQ755zqp1bP9BTGfiZ6RflkVPg",
          quadraKills: 0,
          riotIdGameName: "Kojimbo",
          riotIdTagline: "EUW",
          role: "SOLO",
          sightWardsBoughtInGame: 0,
          spell1Casts: 105,
          spell2Casts: 30,
          spell3Casts: 82,
          spell4Casts: 9,
          subteamPlacement: 0,
          summoner1Casts: 5,
          summoner1Id: 4,
          summoner2Casts: 9,
          summoner2Id: 14,
          summonerId: "Eb8h6IpbsJZhJC58FazBGlyxbrA6J1_of_bB9vfduy3VJRhz",
          summonerLevel: 586,
          summonerName: "Kojimbo",
          teamEarlySurrendered: false,
          teamId: 200,
          teamPosition: "TOP",
          timeCCingOthers: 49,
          timePlayed: 2292,
          totalAllyJungleMinionsKilled: 4,
          totalDamageDealt: 267688,
          totalDamageDealtToChampions: 36089,
          totalDamageShieldedOnTeammates: 0,
          totalDamageTaken: 56756,
          totalEnemyJungleMinionsKilled: 4,
          totalHeal: 3347,
          totalHealsOnTeammates: 0,
          totalMinionsKilled: 302,
          totalTimeCCDealt: 119,
          totalTimeSpentDead: 336,
          totalUnitsHealed: 1,
          tripleKills: 0,
          trueDamageDealt: 14747,
          trueDamageDealtToChampions: 7991,
          trueDamageTaken: 3919,
          turretKills: 3,
          turretTakedowns: 3,
          turretsLost: 11,
          unrealKills: 0,
          visionClearedPings: 0,
          visionScore: 25,
          visionWardsBoughtInGame: 2,
          wardsKilled: 1,
          wardsPlaced: 14,
          win: false,
        },
        {
          allInPings: 0,
          assistMePings: 0,
          assists: 10,
          baitPings: 0,
          baronKills: 0,
          basicPings: 0,
          bountyLevel: 0,
          challenges: {
            "12AssistStreakCount": 0,
            abilityUses: 428,
            acesBefore15Minutes: 0,
            alliedJungleMonsterKills: 74,
            baronTakedowns: 1,
            blastConeOppositeOpponentCount: 0,
            bountyGold: 600,
            buffsStolen: 0,
            completeSupportQuestInTime: 0,
            controlWardsPlaced: 0,
            damagePerMinute: 617.0781765650546,
            damageTakenOnTeamPercentage: 0.2669543358948775,
            dancedWithRiftHerald: 0,
            deathsByEnemyChamps: 10,
            dodgeSkillShotsSmallWindow: 0,
            doubleAces: 0,
            dragonTakedowns: 1,
            earliestBaron: 1721.6596375,
            earliestDragonTakedown: 1634.3252412,
            earlyLaningPhaseGoldExpAdvantage: 0,
            effectiveHealAndShielding: 0,
            elderDragonKillsWithOpposingSoul: 0,
            elderDragonMultikills: 0,
            enemyChampionImmobilizations: 31,
            enemyJungleMonsterKills: 6,
            epicMonsterKillsNearEnemyJungler: 0,
            epicMonsterKillsWithin30SecondsOfSpawn: 0,
            epicMonsterSteals: 0,
            epicMonsterStolenWithoutSmite: 0,
            firstTurretKilled: 0,
            flawlessAces: 0,
            fullTeamTakedown: 0,
            gameLength: 2293.0749103,
            goldPerMinute: 393.9165153600783,
            hadOpenNexus: 0,
            immobilizeAndKillWithAlly: 9,
            initialBuffCount: 2,
            initialCrabCount: 0,
            jungleCsBefore10Minutes: 36.00000002980232,
            junglerKillsEarlyJungle: 0,
            junglerTakedownsNearDamagedEpicMonster: 0,
            kTurretsDestroyedBeforePlatesFall: 0,
            kda: 1.8,
            killAfterHiddenWithAlly: 3,
            killParticipation: 0.5,
            killedChampTookFullTeamDamageSurvived: 0,
            killingSprees: 1,
            killsNearEnemyTurret: 0,
            killsOnLanersEarlyJungleAsJungler: 0,
            killsOnRecentlyHealedByAramPack: 0,
            killsUnderOwnTurret: 1,
            killsWithHelpFromEpicMonster: 0,
            knockEnemyIntoTeamAndKill: 0,
            landSkillShotsEarlyGame: 0,
            laneMinionsFirst10Minutes: 1,
            laningPhaseGoldExpAdvantage: 0,
            legendaryCount: 0,
            lostAnInhibitor: 0,
            maxCsAdvantageOnLaneOpponent: 0,
            maxKillDeficit: 0,
            maxLevelLeadLaneOpponent: 1,
            mejaisFullStackInTime: 0,
            moreEnemyJungleThanOpponent: -43.50000008940697,
            multiKillOneSpell: 0,
            multiTurretRiftHeraldCount: 0,
            multikills: 1,
            multikillsAfterAggressiveFlash: 0,
            mythicItemUsed: 3152,
            outerTurretExecutesBefore10Minutes: 0,
            outnumberedKills: 2,
            outnumberedNexusKill: 0,
            perfectDragonSoulsTaken: 0,
            perfectGame: 0,
            pickKillWithAlly: 12,
            playedChampSelectPosition: 1,
            poroExplosions: 0,
            quickCleanse: 0,
            quickFirstTurret: 0,
            quickSoloKills: 0,
            riftHeraldTakedowns: 0,
            saveAllyFromDeath: 0,
            scuttleCrabKills: 5,
            skillshotsDodged: 5,
            skillshotsHit: 98,
            snowballsHit: 0,
            soloBaronKills: 0,
            soloKills: 2,
            stealthWardsPlaced: 12,
            survivedSingleDigitHpCount: 0,
            survivedThreeImmobilizesInFight: 2,
            takedownOnFirstTurret: 0,
            takedowns: 18,
            takedownsAfterGainingLevelAdvantage: 0,
            takedownsBeforeJungleMinionSpawn: 0,
            takedownsFirstXMinutes: 4,
            takedownsInAlcove: 0,
            takedownsInEnemyFountain: 0,
            teamBaronKills: 1,
            teamDamagePercentage: 0.16215946261816186,
            teamElderDragonKills: 0,
            teamRiftHeraldKills: 0,
            tookLargeDamageSurvived: 0,
            turretPlatesTaken: 0,
            turretTakedowns: 0,
            turretsTakenWithRiftHerald: 0,
            twentyMinionsIn3SecondsCount: 0,
            twoWardsOneSweeperCount: 0,
            unseenRecalls: 1,
            visionScoreAdvantageLaneOpponent: -0.6404370069503784,
            visionScorePerMinute: 0.7732557143809532,
            wardTakedowns: 2,
            wardTakedownsBefore20M: 0,
            wardsGuarded: 1,
          },
          champExperience: 18571,
          champLevel: 18,
          championId: 20,
          championName: "Nunu",
          championTransform: 0,
          commandPings: 1,
          consumablesPurchased: 1,
          damageDealtToBuildings: 0,
          damageDealtToObjectives: 15127,
          damageDealtToTurrets: 0,
          damageSelfMitigated: 38494,
          dangerPings: 0,
          deaths: 10,
          detectorWardsPlaced: 0,
          doubleKills: 1,
          dragonKills: 1,
          eligibleForProgression: true,
          enemyMissingPings: 2,
          enemyVisionPings: 0,
          firstBloodAssist: false,
          firstBloodKill: false,
          firstTowerAssist: false,
          firstTowerKill: false,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: false,
          getBackPings: 0,
          goldEarned: 15054,
          goldSpent: 14700,
          holdPings: 0,
          individualPosition: "JUNGLE",
          inhibitorKills: 0,
          inhibitorTakedowns: 0,
          inhibitorsLost: 4,
          item0: 3089,
          item1: 3020,
          item2: 3152,
          item3: 3100,
          item4: 4645,
          item5: 1029,
          item6: 3364,
          itemsPurchased: 21,
          killingSprees: 2,
          kills: 8,
          lane: "JUNGLE",
          largestCriticalStrike: 0,
          largestKillingSpree: 3,
          largestMultiKill: 2,
          longestTimeSpentLiving: 528,
          magicDamageDealt: 126734,
          magicDamageDealtToChampions: 21668,
          magicDamageTaken: 11792,
          missions: {
            playerScore0: 0,
            playerScore1: 0,
            playerScore10: 0,
            playerScore11: 0,
            playerScore2: 0,
            playerScore3: 0,
            playerScore4: 0,
            playerScore5: 0,
            playerScore6: 0,
            playerScore7: 0,
            playerScore8: 0,
            playerScore9: 0,
          },
          needVisionPings: 0,
          neutralMinionsKilled: 147,
          nexusKills: 0,
          nexusLost: 1,
          nexusTakedowns: 0,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          onMyWayPings: 2,
          participantId: 7,
          pentaKills: 0,
          perks: {
            statPerks: { defense: 5002, flex: 5008, offense: 5008 },
            styles: [
              {
                description: "primaryStyle",
                selections: [
                  { perk: 8128, var1: 1365, var2: 18, var3: 0 },
                  { perk: 8126, var1: 760, var2: 0, var3: 0 },
                  { perk: 8138, var1: 30, var2: 0, var3: 0 },
                  { perk: 8105, var1: 13, var2: 5, var3: 0 },
                ],
                style: 8100,
              },
              {
                description: "subStyle",
                selections: [
                  { perk: 8234, var1: 16544, var2: 0, var3: 0 },
                  { perk: 8232, var1: 6, var2: 20, var3: 0 },
                ],
                style: 8200,
              },
            ],
          },
          physicalDamageDealt: 33221,
          physicalDamageDealtToChampions: 820,
          physicalDamageTaken: 43151,
          placement: 0,
          playerAugment1: 0,
          playerAugment2: 0,
          playerAugment3: 0,
          playerAugment4: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore10: 0,
          playerScore11: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          playerSubteamId: 0,
          profileIcon: 0,
          pushPings: 0,
          puuid:
            "WgvEEwrq5zcNX26ghJXm-ScnditFQuF-jg6KIJVIDqXnNymRvaKeP8o8LfDuievXiujOXuCEqfT_bQ",
          quadraKills: 0,
          riotIdGameName: "Justiceritoisbad",
          riotIdTagline: "EUW",
          role: "NONE",
          sightWardsBoughtInGame: 0,
          spell1Casts: 92,
          spell2Casts: 69,
          spell3Casts: 259,
          spell4Casts: 8,
          subteamPlacement: 0,
          summoner1Casts: 0,
          summoner1Id: 4,
          summoner2Casts: 17,
          summoner2Id: 11,
          summonerId: "Vv2OS1G3Evvn34oprxZCn0dB4wvkHjVMpCSgU8o-h5lWvHyH",
          summonerLevel: 529,
          summonerName: "Justiceritoisbad",
          teamEarlySurrendered: false,
          teamId: 200,
          teamPosition: "JUNGLE",
          timeCCingOthers: 27,
          timePlayed: 2292,
          totalAllyJungleMinionsKilled: 114,
          totalDamageDealt: 272967,
          totalDamageDealtToChampions: 23583,
          totalDamageShieldedOnTeammates: 0,
          totalDamageTaken: 56300,
          totalEnemyJungleMinionsKilled: 4,
          totalHeal: 30216,
          totalHealsOnTeammates: 0,
          totalMinionsKilled: 46,
          totalTimeCCDealt: 456,
          totalTimeSpentDead: 330,
          totalUnitsHealed: 1,
          tripleKills: 0,
          trueDamageDealt: 113010,
          trueDamageDealtToChampions: 1094,
          trueDamageTaken: 1356,
          turretKills: 0,
          turretTakedowns: 0,
          turretsLost: 11,
          unrealKills: 0,
          visionClearedPings: 0,
          visionScore: 29,
          visionWardsBoughtInGame: 0,
          wardsKilled: 2,
          wardsPlaced: 12,
          win: false,
        },
        {
          allInPings: 0,
          assistMePings: 5,
          assists: 9,
          baitPings: 0,
          baronKills: 0,
          basicPings: 0,
          bountyLevel: 0,
          challenges: {
            "12AssistStreakCount": 0,
            abilityUses: 273,
            acesBefore15Minutes: 0,
            alliedJungleMonsterKills: 5,
            baronTakedowns: 0,
            blastConeOppositeOpponentCount: 0,
            bountyGold: 0,
            buffsStolen: 0,
            completeSupportQuestInTime: 0,
            controlWardsPlaced: 0,
            damagePerMinute: 667.7057133513744,
            damageTakenOnTeamPercentage: 0.15707694843466943,
            dancedWithRiftHerald: 0,
            deathsByEnemyChamps: 9,
            dodgeSkillShotsSmallWindow: 0,
            doubleAces: 0,
            dragonTakedowns: 0,
            earliestBaron: 1721.6596375,
            earlyLaningPhaseGoldExpAdvantage: 0,
            effectiveHealAndShielding: 0,
            elderDragonKillsWithOpposingSoul: 0,
            elderDragonMultikills: 0,
            enemyChampionImmobilizations: 37,
            enemyJungleMonsterKills: 0,
            epicMonsterKillsNearEnemyJungler: 0,
            epicMonsterKillsWithin30SecondsOfSpawn: 0,
            epicMonsterSteals: 0,
            epicMonsterStolenWithoutSmite: 0,
            firstTurretKilled: 0,
            flawlessAces: 0,
            fullTeamTakedown: 0,
            gameLength: 2293.0749103,
            getTakedownsInAllLanesEarlyJungleAsLaner: 0,
            goldPerMinute: 353.2026252116811,
            hadOpenNexus: 0,
            immobilizeAndKillWithAlly: 7,
            initialBuffCount: 0,
            initialCrabCount: 0,
            jungleCsBefore10Minutes: 0,
            junglerTakedownsNearDamagedEpicMonster: 1,
            kTurretsDestroyedBeforePlatesFall: 0,
            kda: 1.5555555555555556,
            killAfterHiddenWithAlly: 0,
            killParticipation: 0.3888888888888889,
            killedChampTookFullTeamDamageSurvived: 0,
            killingSprees: 1,
            killsNearEnemyTurret: 0,
            killsOnOtherLanesEarlyJungleAsLaner: 0,
            killsOnRecentlyHealedByAramPack: 0,
            killsUnderOwnTurret: 2,
            killsWithHelpFromEpicMonster: 0,
            knockEnemyIntoTeamAndKill: 0,
            landSkillShotsEarlyGame: 7,
            laneMinionsFirst10Minutes: 61,
            laningPhaseGoldExpAdvantage: 0,
            legendaryCount: 0,
            lostAnInhibitor: 0,
            maxCsAdvantageOnLaneOpponent: 9,
            maxKillDeficit: 0,
            maxLevelLeadLaneOpponent: 2,
            mejaisFullStackInTime: 0,
            moreEnemyJungleThanOpponent: 0,
            multiKillOneSpell: 0,
            multiTurretRiftHeraldCount: 0,
            multikills: 0,
            multikillsAfterAggressiveFlash: 0,
            mythicItemUsed: 3152,
            outerTurretExecutesBefore10Minutes: 0,
            outnumberedKills: 1,
            outnumberedNexusKill: 0,
            perfectDragonSoulsTaken: 0,
            perfectGame: 0,
            pickKillWithAlly: 8,
            playedChampSelectPosition: 1,
            poroExplosions: 0,
            quickCleanse: 0,
            quickFirstTurret: 0,
            quickSoloKills: 0,
            riftHeraldTakedowns: 0,
            saveAllyFromDeath: 0,
            scuttleCrabKills: 0,
            skillshotsDodged: 9,
            skillshotsHit: 36,
            snowballsHit: 0,
            soloBaronKills: 0,
            soloKills: 2,
            stealthWardsPlaced: 13,
            survivedSingleDigitHpCount: 0,
            survivedThreeImmobilizesInFight: 2,
            takedownOnFirstTurret: 0,
            takedowns: 14,
            takedownsAfterGainingLevelAdvantage: 0,
            takedownsBeforeJungleMinionSpawn: 0,
            takedownsFirstXMinutes: 3,
            takedownsInAlcove: 0,
            takedownsInEnemyFountain: 0,
            teamBaronKills: 1,
            teamDamagePercentage: 0.1754636669649272,
            teamElderDragonKills: 0,
            teamRiftHeraldKills: 0,
            teleportTakedowns: 1,
            tookLargeDamageSurvived: 0,
            turretPlatesTaken: 2,
            turretTakedowns: 0,
            turretsTakenWithRiftHerald: 0,
            twentyMinionsIn3SecondsCount: 0,
            twoWardsOneSweeperCount: 0,
            unseenRecalls: 0,
            visionScoreAdvantageLaneOpponent: -0.18544632196426392,
            visionScorePerMinute: 0.5033607422375802,
            wardTakedowns: 1,
            wardTakedownsBefore20M: 1,
            wardsGuarded: 0,
          },
          champExperience: 19456,
          champLevel: 18,
          championId: 518,
          championName: "Neeko",
          championTransform: 0,
          commandPings: 3,
          consumablesPurchased: 2,
          damageDealtToBuildings: 1095,
          damageDealtToObjectives: 5699,
          damageDealtToTurrets: 1095,
          damageSelfMitigated: 25801,
          dangerPings: 0,
          deaths: 9,
          detectorWardsPlaced: 0,
          doubleKills: 0,
          dragonKills: 0,
          eligibleForProgression: true,
          enemyMissingPings: 6,
          enemyVisionPings: 0,
          firstBloodAssist: false,
          firstBloodKill: false,
          firstTowerAssist: false,
          firstTowerKill: false,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: false,
          getBackPings: 0,
          goldEarned: 13498,
          goldSpent: 13300,
          holdPings: 0,
          individualPosition: "MIDDLE",
          inhibitorKills: 0,
          inhibitorTakedowns: 0,
          inhibitorsLost: 4,
          item0: 1058,
          item1: 4645,
          item2: 3152,
          item3: 3157,
          item4: 1058,
          item5: 3020,
          item6: 3340,
          itemsPurchased: 23,
          killingSprees: 2,
          kills: 5,
          lane: "MIDDLE",
          largestCriticalStrike: 0,
          largestKillingSpree: 3,
          largestMultiKill: 1,
          longestTimeSpentLiving: 701,
          magicDamageDealt: 169699,
          magicDamageDealtToChampions: 23951,
          magicDamageTaken: 6781,
          missions: {
            playerScore0: 0,
            playerScore1: 0,
            playerScore10: 0,
            playerScore11: 0,
            playerScore2: 0,
            playerScore3: 0,
            playerScore4: 0,
            playerScore5: 0,
            playerScore6: 0,
            playerScore7: 0,
            playerScore8: 0,
            playerScore9: 0,
          },
          needVisionPings: 0,
          neutralMinionsKilled: 8,
          nexusKills: 0,
          nexusLost: 1,
          nexusTakedowns: 0,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          onMyWayPings: 0,
          participantId: 8,
          pentaKills: 0,
          perks: {
            statPerks: { defense: 5002, flex: 5008, offense: 5005 },
            styles: [
              {
                description: "primaryStyle",
                selections: [
                  { perk: 8229, var1: 2331, var2: 0, var3: 0 },
                  { perk: 8226, var1: 250, var2: 1009, var3: 0 },
                  { perk: 8210, var1: 9, var2: 0, var3: 0 },
                  { perk: 8237, var1: 798, var2: 0, var3: 0 },
                ],
                style: 8200,
              },
              {
                description: "subStyle",
                selections: [
                  { perk: 8139, var1: 1019, var2: 0, var3: 0 },
                  { perk: 8135, var1: 450, var2: 5, var3: 0 },
                ],
                style: 8100,
              },
            ],
          },
          physicalDamageDealt: 20169,
          physicalDamageDealtToChampions: 1491,
          physicalDamageTaken: 25366,
          placement: 0,
          playerAugment1: 0,
          playerAugment2: 0,
          playerAugment3: 0,
          playerAugment4: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore10: 0,
          playerScore11: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          playerSubteamId: 0,
          profileIcon: 4831,
          pushPings: 0,
          puuid:
            "OUZHQTPCRieu0pS_DCkWAHUlnBKOr48HNM6jeIOn2WTjztvBlV3CwosR-u4x8m0PK-I9Cs4F7xwHow",
          quadraKills: 0,
          riotIdGameName: "The Saltinator",
          riotIdTagline: "EUW",
          role: "SOLO",
          sightWardsBoughtInGame: 0,
          spell1Casts: 111,
          spell2Casts: 53,
          spell3Casts: 97,
          spell4Casts: 12,
          subteamPlacement: 0,
          summoner1Casts: 6,
          summoner1Id: 4,
          summoner2Casts: 2,
          summoner2Id: 12,
          summonerId: "zsvKpuD2MyoDU2RFqRWgwuMpZv8D6bmHm1UJNpt0Q4QFSPc",
          summonerLevel: 486,
          summonerName: "The Saltinator",
          teamEarlySurrendered: false,
          teamId: 200,
          teamPosition: "MIDDLE",
          timeCCingOthers: 32,
          timePlayed: 2292,
          totalAllyJungleMinionsKilled: 6,
          totalDamageDealt: 214076,
          totalDamageDealtToChampions: 25518,
          totalDamageShieldedOnTeammates: 0,
          totalDamageTaken: 33127,
          totalEnemyJungleMinionsKilled: 0,
          totalHeal: 1886,
          totalHealsOnTeammates: 0,
          totalMinionsKilled: 231,
          totalTimeCCDealt: 305,
          totalTimeSpentDead: 387,
          totalUnitsHealed: 1,
          tripleKills: 0,
          trueDamageDealt: 24208,
          trueDamageDealtToChampions: 75,
          trueDamageTaken: 980,
          turretKills: 0,
          turretTakedowns: 0,
          turretsLost: 11,
          unrealKills: 0,
          visionClearedPings: 0,
          visionScore: 19,
          visionWardsBoughtInGame: 0,
          wardsKilled: 1,
          wardsPlaced: 13,
          win: false,
        },
        {
          allInPings: 0,
          assistMePings: 0,
          assists: 6,
          baitPings: 0,
          baronKills: 1,
          basicPings: 0,
          bountyLevel: 0,
          challenges: {
            "12AssistStreakCount": 0,
            abilityUses: 152,
            acesBefore15Minutes: 0,
            alliedJungleMonsterKills: 7,
            baronTakedowns: 1,
            blastConeOppositeOpponentCount: 0,
            bountyGold: 1200,
            buffsStolen: 0,
            completeSupportQuestInTime: 0,
            controlWardsPlaced: 2,
            damagePerMinute: 1369.5315505803258,
            damageTakenOnTeamPercentage: 0.18283232186799744,
            dancedWithRiftHerald: 0,
            deathsByEnemyChamps: 12,
            dodgeSkillShotsSmallWindow: 0,
            doubleAces: 0,
            dragonTakedowns: 0,
            earliestBaron: 1721.6596375,
            earlyLaningPhaseGoldExpAdvantage: 0,
            effectiveHealAndShielding: 0,
            elderDragonKillsWithOpposingSoul: 0,
            elderDragonMultikills: 0,
            enemyChampionImmobilizations: 0,
            enemyJungleMonsterKills: 0,
            epicMonsterKillsNearEnemyJungler: 0,
            epicMonsterKillsWithin30SecondsOfSpawn: 0,
            epicMonsterSteals: 0,
            epicMonsterStolenWithoutSmite: 0,
            firstTurretKilled: 0,
            flawlessAces: 0,
            fullTeamTakedown: 0,
            gameLength: 2293.0749103,
            getTakedownsInAllLanesEarlyJungleAsLaner: 0,
            goldPerMinute: 485.9863923848891,
            hadOpenNexus: 0,
            immobilizeAndKillWithAlly: 0,
            initialBuffCount: 0,
            initialCrabCount: 0,
            jungleCsBefore10Minutes: 0,
            junglerTakedownsNearDamagedEpicMonster: 0,
            kTurretsDestroyedBeforePlatesFall: 0,
            kda: 1.6666666666666667,
            killAfterHiddenWithAlly: 4,
            killParticipation: 0.5555555555555556,
            killedChampTookFullTeamDamageSurvived: 0,
            killingSprees: 1,
            killsNearEnemyTurret: 2,
            killsOnOtherLanesEarlyJungleAsLaner: 0,
            killsOnRecentlyHealedByAramPack: 0,
            killsUnderOwnTurret: 2,
            killsWithHelpFromEpicMonster: 0,
            knockEnemyIntoTeamAndKill: 0,
            landSkillShotsEarlyGame: 8,
            laneMinionsFirst10Minutes: 65,
            laningPhaseGoldExpAdvantage: 0,
            legendaryCount: 0,
            lostAnInhibitor: 0,
            maxCsAdvantageOnLaneOpponent: 14,
            maxKillDeficit: 0,
            maxLevelLeadLaneOpponent: 1,
            mejaisFullStackInTime: 0,
            moreEnemyJungleThanOpponent: 0,
            multiKillOneSpell: 0,
            multiTurretRiftHeraldCount: 0,
            multikills: 2,
            multikillsAfterAggressiveFlash: 0,
            mythicItemUsed: 3124,
            outerTurretExecutesBefore10Minutes: 0,
            outnumberedKills: 3,
            outnumberedNexusKill: 0,
            perfectDragonSoulsTaken: 0,
            perfectGame: 0,
            pickKillWithAlly: 12,
            playedChampSelectPosition: 1,
            poroExplosions: 0,
            quickCleanse: 0,
            quickFirstTurret: 0,
            quickSoloKills: 0,
            riftHeraldTakedowns: 0,
            saveAllyFromDeath: 0,
            scuttleCrabKills: 0,
            skillshotsDodged: 7,
            skillshotsHit: 34,
            snowballsHit: 0,
            soloBaronKills: 0,
            soloKills: 3,
            stealthWardsPlaced: 5,
            survivedSingleDigitHpCount: 0,
            survivedThreeImmobilizesInFight: 6,
            takedownOnFirstTurret: 0,
            takedowns: 20,
            takedownsAfterGainingLevelAdvantage: 0,
            takedownsBeforeJungleMinionSpawn: 0,
            takedownsFirstXMinutes: 4,
            takedownsInAlcove: 0,
            takedownsInEnemyFountain: 0,
            teamBaronKills: 1,
            teamDamagePercentage: 0.35989362242064454,
            teamElderDragonKills: 0,
            teamRiftHeraldKills: 0,
            tookLargeDamageSurvived: 0,
            turretPlatesTaken: 1,
            turretTakedowns: 3,
            turretsTakenWithRiftHerald: 0,
            twentyMinionsIn3SecondsCount: 0,
            twoWardsOneSweeperCount: 0,
            unseenRecalls: 0,
            visionScoreAdvantageLaneOpponent: 1.2746589183807373,
            visionScorePerMinute: 0.7763523056023355,
            wardTakedowns: 3,
            wardTakedownsBefore20M: 1,
            wardsGuarded: 0,
          },
          champExperience: 18506,
          champLevel: 18,
          championId: 96,
          championName: "KogMaw",
          championTransform: 0,
          commandPings: 5,
          consumablesPurchased: 5,
          damageDealtToBuildings: 7297,
          damageDealtToObjectives: 18484,
          damageDealtToTurrets: 7297,
          damageSelfMitigated: 24679,
          dangerPings: 0,
          deaths: 12,
          detectorWardsPlaced: 2,
          doubleKills: 2,
          dragonKills: 0,
          eligibleForProgression: true,
          enemyMissingPings: 4,
          enemyVisionPings: 0,
          firstBloodAssist: false,
          firstBloodKill: false,
          firstTowerAssist: false,
          firstTowerKill: false,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: false,
          getBackPings: 0,
          goldEarned: 18573,
          goldSpent: 18300,
          holdPings: 0,
          individualPosition: "BOTTOM",
          inhibitorKills: 0,
          inhibitorTakedowns: 0,
          inhibitorsLost: 4,
          item0: 6672,
          item1: 3124,
          item2: 3748,
          item3: 3006,
          item4: 3153,
          item5: 3091,
          item6: 3363,
          itemsPurchased: 25,
          killingSprees: 3,
          kills: 14,
          lane: "BOTTOM",
          largestCriticalStrike: 295,
          largestKillingSpree: 5,
          largestMultiKill: 2,
          longestTimeSpentLiving: 461,
          magicDamageDealt: 73849,
          magicDamageDealtToChampions: 25268,
          magicDamageTaken: 11183,
          missions: {
            playerScore0: 0,
            playerScore1: 0,
            playerScore10: 0,
            playerScore11: 0,
            playerScore2: 0,
            playerScore3: 0,
            playerScore4: 0,
            playerScore5: 0,
            playerScore6: 0,
            playerScore7: 0,
            playerScore8: 0,
            playerScore9: 0,
          },
          needVisionPings: 0,
          neutralMinionsKilled: 12,
          nexusKills: 0,
          nexusLost: 1,
          nexusTakedowns: 0,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          onMyWayPings: 0,
          participantId: 9,
          pentaKills: 0,
          perks: {
            statPerks: { defense: 5002, flex: 5008, offense: 5005 },
            styles: [
              {
                description: "primaryStyle",
                selections: [
                  { perk: 8008, var1: 109, var2: 18, var3: 0 },
                  { perk: 9111, var1: 1743, var2: 400, var3: 0 },
                  { perk: 9103, var1: 24, var2: 10, var3: 0 },
                  { perk: 8299, var1: 717, var2: 0, var3: 0 },
                ],
                style: 8000,
              },
              {
                description: "subStyle",
                selections: [
                  { perk: 8429, var1: 68, var2: 10, var3: 11 },
                  { perk: 8451, var1: 251, var2: 0, var3: 0 },
                ],
                style: 8400,
              },
            ],
          },
          physicalDamageDealt: 159071,
          physicalDamageDealtToChampions: 23304,
          physicalDamageTaken: 26617,
          placement: 0,
          playerAugment1: 0,
          playerAugment2: 0,
          playerAugment3: 0,
          playerAugment4: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore10: 0,
          playerScore11: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          playerSubteamId: 0,
          profileIcon: 4660,
          pushPings: 0,
          puuid:
            "wvJtYaT4WN-7Np8mJ-LzcYGaRm9CPsT9boUDVgHJF0WU9n0vtYYF5Qj72LEooyCscpU69B3mk6AXPQ",
          quadraKills: 0,
          riotIdGameName: "lapzdy",
          riotIdTagline: "EUW",
          role: "CARRY",
          sightWardsBoughtInGame: 0,
          spell1Casts: 27,
          spell2Casts: 39,
          spell3Casts: 27,
          spell4Casts: 59,
          subteamPlacement: 0,
          summoner1Casts: 6,
          summoner1Id: 4,
          summoner2Casts: 4,
          summoner2Id: 1,
          summonerId: "OI-TPlBJ6SqG0IuwqYI9GMRiNAh-I5r5v4HuT0W4nfD8tyk",
          summonerLevel: 433,
          summonerName: "lapzdy",
          teamEarlySurrendered: false,
          teamId: 200,
          teamPosition: "BOTTOM",
          timeCCingOthers: 7,
          timePlayed: 2292,
          totalAllyJungleMinionsKilled: 8,
          totalDamageDealt: 254651,
          totalDamageDealtToChampions: 52340,
          totalDamageShieldedOnTeammates: 0,
          totalDamageTaken: 38559,
          totalEnemyJungleMinionsKilled: 0,
          totalHeal: 8629,
          totalHealsOnTeammates: 0,
          totalMinionsKilled: 240,
          totalTimeCCDealt: 201,
          totalTimeSpentDead: 378,
          totalUnitsHealed: 1,
          tripleKills: 0,
          trueDamageDealt: 21730,
          trueDamageDealtToChampions: 3767,
          trueDamageTaken: 757,
          turretKills: 2,
          turretTakedowns: 3,
          turretsLost: 11,
          unrealKills: 0,
          visionClearedPings: 0,
          visionScore: 29,
          visionWardsBoughtInGame: 2,
          wardsKilled: 3,
          wardsPlaced: 15,
          win: false,
        },
        {
          allInPings: 0,
          assistMePings: 3,
          assists: 15,
          baitPings: 0,
          baronKills: 0,
          basicPings: 0,
          bountyLevel: 0,
          challenges: {
            "12AssistStreakCount": 1,
            abilityUses: 190,
            acesBefore15Minutes: 0,
            alliedJungleMonsterKills: 0,
            baronTakedowns: 1,
            blastConeOppositeOpponentCount: 0,
            bountyGold: 0,
            buffsStolen: 0,
            completeSupportQuestInTime: 1,
            controlWardTimeCoverageInRiverOrEnemyHalf: 0.8424969357617936,
            controlWardsPlaced: 3,
            damagePerMinute: 206.7434392264804,
            damageTakenOnTeamPercentage: 0.1240204731645195,
            dancedWithRiftHerald: 0,
            deathsByEnemyChamps: 12,
            dodgeSkillShotsSmallWindow: 0,
            doubleAces: 0,
            dragonTakedowns: 0,
            earliestBaron: 1721.6596375,
            earlyLaningPhaseGoldExpAdvantage: 0,
            effectiveHealAndShielding: 5935.41796875,
            elderDragonKillsWithOpposingSoul: 0,
            elderDragonMultikills: 0,
            enemyChampionImmobilizations: 5,
            enemyJungleMonsterKills: 0,
            epicMonsterKillsNearEnemyJungler: 0,
            epicMonsterKillsWithin30SecondsOfSpawn: 0,
            epicMonsterSteals: 0,
            epicMonsterStolenWithoutSmite: 0,
            fasterSupportQuestCompletion: 1,
            firstTurretKilled: 0,
            flawlessAces: 0,
            fullTeamTakedown: 0,
            gameLength: 2293.0749103,
            getTakedownsInAllLanesEarlyJungleAsLaner: 0,
            goldPerMinute: 245.1984007394205,
            hadOpenNexus: 0,
            immobilizeAndKillWithAlly: 3,
            initialBuffCount: 0,
            initialCrabCount: 0,
            jungleCsBefore10Minutes: 0,
            junglerTakedownsNearDamagedEpicMonster: 0,
            kTurretsDestroyedBeforePlatesFall: 0,
            kda: 1.3333333333333333,
            killAfterHiddenWithAlly: 1,
            killParticipation: 0.4444444444444444,
            killedChampTookFullTeamDamageSurvived: 0,
            killingSprees: 0,
            killsNearEnemyTurret: 0,
            killsOnOtherLanesEarlyJungleAsLaner: 0,
            killsOnRecentlyHealedByAramPack: 0,
            killsUnderOwnTurret: 0,
            killsWithHelpFromEpicMonster: 0,
            knockEnemyIntoTeamAndKill: 0,
            landSkillShotsEarlyGame: 5,
            laneMinionsFirst10Minutes: 2,
            laningPhaseGoldExpAdvantage: 0,
            legendaryCount: 0,
            lostAnInhibitor: 0,
            maxCsAdvantageOnLaneOpponent: 0,
            maxKillDeficit: 0,
            maxLevelLeadLaneOpponent: 1,
            mejaisFullStackInTime: 0,
            moreEnemyJungleThanOpponent: 0,
            multiKillOneSpell: 0,
            multiTurretRiftHeraldCount: 0,
            multikills: 0,
            multikillsAfterAggressiveFlash: 0,
            mythicItemUsed: 2065,
            outerTurretExecutesBefore10Minutes: 0,
            outnumberedKills: 0,
            outnumberedNexusKill: 0,
            perfectDragonSoulsTaken: 0,
            perfectGame: 0,
            pickKillWithAlly: 12,
            playedChampSelectPosition: 1,
            poroExplosions: 0,
            quickCleanse: 0,
            quickFirstTurret: 0,
            quickSoloKills: 0,
            riftHeraldTakedowns: 0,
            saveAllyFromDeath: 0,
            scuttleCrabKills: 0,
            skillshotsDodged: 13,
            skillshotsHit: 45,
            snowballsHit: 0,
            soloBaronKills: 0,
            soloKills: 0,
            stealthWardsPlaced: 36,
            survivedSingleDigitHpCount: 0,
            survivedThreeImmobilizesInFight: 2,
            takedownOnFirstTurret: 0,
            takedowns: 16,
            takedownsAfterGainingLevelAdvantage: 0,
            takedownsBeforeJungleMinionSpawn: 0,
            takedownsFirstXMinutes: 4,
            takedownsInAlcove: 0,
            takedownsInEnemyFountain: 0,
            teamBaronKills: 1,
            teamDamagePercentage: 0.05432926698431426,
            teamElderDragonKills: 0,
            teamRiftHeraldKills: 0,
            tookLargeDamageSurvived: 0,
            turretPlatesTaken: 1,
            turretTakedowns: 1,
            turretsTakenWithRiftHerald: 0,
            twentyMinionsIn3SecondsCount: 0,
            twoWardsOneSweeperCount: 1,
            unseenRecalls: 0,
            visionScoreAdvantageLaneOpponent: 0.17659342288970947,
            visionScorePerMinute: 2.2791797741012023,
            wardTakedowns: 6,
            wardTakedownsBefore20M: 4,
            wardsGuarded: 0,
          },
          champExperience: 13120,
          champLevel: 15,
          championId: 117,
          championName: "Lulu",
          championTransform: 0,
          commandPings: 23,
          consumablesPurchased: 10,
          damageDealtToBuildings: 690,
          damageDealtToObjectives: 2672,
          damageDealtToTurrets: 690,
          damageSelfMitigated: 15342,
          dangerPings: 0,
          deaths: 12,
          detectorWardsPlaced: 3,
          doubleKills: 0,
          dragonKills: 0,
          eligibleForProgression: true,
          enemyMissingPings: 3,
          enemyVisionPings: 0,
          firstBloodAssist: false,
          firstBloodKill: false,
          firstTowerAssist: false,
          firstTowerKill: false,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: false,
          getBackPings: 0,
          goldEarned: 9370,
          goldSpent: 8860,
          holdPings: 0,
          individualPosition: "UTILITY",
          inhibitorKills: 0,
          inhibitorTakedowns: 0,
          inhibitorsLost: 4,
          item0: 6616,
          item1: 3011,
          item2: 1052,
          item3: 2065,
          item4: 3853,
          item5: 3158,
          item6: 3364,
          itemsPurchased: 25,
          killingSprees: 0,
          kills: 1,
          lane: "BOTTOM",
          largestCriticalStrike: 0,
          largestKillingSpree: 0,
          largestMultiKill: 1,
          longestTimeSpentLiving: 319,
          magicDamageDealt: 21091,
          magicDamageDealtToChampions: 6458,
          magicDamageTaken: 6605,
          missions: {
            playerScore0: 0,
            playerScore1: 0,
            playerScore10: 0,
            playerScore11: 0,
            playerScore2: 0,
            playerScore3: 0,
            playerScore4: 0,
            playerScore5: 0,
            playerScore6: 0,
            playerScore7: 0,
            playerScore8: 0,
            playerScore9: 0,
          },
          needVisionPings: 0,
          neutralMinionsKilled: 0,
          nexusKills: 0,
          nexusLost: 1,
          nexusTakedowns: 0,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          onMyWayPings: 2,
          participantId: 10,
          pentaKills: 0,
          perks: {
            statPerks: { defense: 5002, flex: 5008, offense: 5008 },
            styles: [
              {
                description: "primaryStyle",
                selections: [
                  { perk: 8465, var1: 2777, var2: 0, var3: 0 },
                  { perk: 8463, var1: 906, var2: 0, var3: 0 },
                  { perk: 8473, var1: 598, var2: 0, var3: 0 },
                  { perk: 8453, var1: 311, var2: 1117, var3: 0 },
                ],
                style: 8400,
              },
              {
                description: "subStyle",
                selections: [
                  { perk: 8345, var1: 3, var2: 0, var3: 0 },
                  { perk: 8347, var1: 0, var2: 0, var3: 0 },
                ],
                style: 8300,
              },
            ],
          },
          physicalDamageDealt: 4347,
          physicalDamageDealtToChampions: 920,
          physicalDamageTaken: 18990,
          placement: 0,
          playerAugment1: 0,
          playerAugment2: 0,
          playerAugment3: 0,
          playerAugment4: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore10: 0,
          playerScore11: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          playerSubteamId: 0,
          profileIcon: 5859,
          pushPings: 0,
          puuid:
            "pHLkt2-Ie5serp0Da1vaqIYH84z_5MnRm4lt2C6c04wTxk7SRXQKTKFcTjS-KKxKuOg8qL7PWRwV6w",
          quadraKills: 0,
          riotIdGameName: "Ard Prada",
          riotIdTagline: "666",
          role: "SUPPORT",
          sightWardsBoughtInGame: 0,
          spell1Casts: 46,
          spell2Casts: 74,
          spell3Casts: 63,
          spell4Casts: 7,
          subteamPlacement: 0,
          summoner1Casts: 5,
          summoner1Id: 4,
          summoner2Casts: 5,
          summoner2Id: 14,
          summonerId: "eJ7Qr9YOl_43aqOcqlpbNZr7yOIZdM13IZopHIV4abYvr_Y",
          summonerLevel: 495,
          summonerName: "Ard Prada",
          teamEarlySurrendered: false,
          teamId: 200,
          teamPosition: "UTILITY",
          timeCCingOthers: 32,
          timePlayed: 2292,
          totalAllyJungleMinionsKilled: 0,
          totalDamageDealt: 25969,
          totalDamageDealtToChampions: 7901,
          totalDamageShieldedOnTeammates: 5432,
          totalDamageTaken: 26155,
          totalEnemyJungleMinionsKilled: 0,
          totalHeal: 2279,
          totalHealsOnTeammates: 502,
          totalMinionsKilled: 14,
          totalTimeCCDealt: 234,
          totalTimeSpentDead: 319,
          totalUnitsHealed: 4,
          tripleKills: 0,
          trueDamageDealt: 530,
          trueDamageDealtToChampions: 521,
          trueDamageTaken: 560,
          turretKills: 1,
          turretTakedowns: 1,
          turretsLost: 11,
          unrealKills: 0,
          visionClearedPings: 0,
          visionScore: 87,
          visionWardsBoughtInGame: 3,
          wardsKilled: 6,
          wardsPlaced: 40,
          win: false,
        },
      ],
      platformId: "EUW1",
      queueId: 400,
      teams: [
        {
          bans: [
            { championId: 134, pickTurn: 1 },
            { championId: 25, pickTurn: 2 },
            { championId: 115, pickTurn: 3 },
            { championId: 2, pickTurn: 4 },
            { championId: 105, pickTurn: 5 },
          ],
          objectives: {
            baron: { first: false, kills: 1 },
            champion: { first: true, kills: 52 },
            dragon: { first: true, kills: 3 },
            horde: { first: false, kills: 0 },
            inhibitor: { first: true, kills: 4 },
            riftHerald: { first: true, kills: 2 },
            tower: { first: true, kills: 11 },
          },
          teamId: 100,
          win: true,
        },
        {
          bans: [
            { championId: 134, pickTurn: 6 },
            { championId: 233, pickTurn: 7 },
            { championId: 897, pickTurn: 8 },
            { championId: 101, pickTurn: 9 },
            { championId: 895, pickTurn: 10 },
          ],
          objectives: {
            baron: { first: true, kills: 1 },
            champion: { first: false, kills: 36 },
            dragon: { first: false, kills: 1 },
            horde: { first: false, kills: 0 },
            inhibitor: { first: false, kills: 0 },
            riftHerald: { first: false, kills: 0 },
            tower: { first: false, kills: 6 },
          },
          teamId: 200,
          win: false,
        },
      ],
      tournamentCode: "",
    },
  },
];

const ranked = [
  {
    leagueId: "0e56a6a6-04fb-49f1-8314-c4c8b943f049",
    queueType: "RANKED_FLEX_SR",
    tier: "PLATINUM",
    rank: "II",
    summonerId: "-JXlAr1LmjIeT6eN8vxCT0LfcTE7h0Ku53bBhDTGlS7xBg4",
    leaguePoints: 22,
    wins: 9,
    losses: 5,
    veteran: false,
    inactive: false,
    freshBlood: false,
    hotStreak: false,
  },
  {
    leagueId: "63812ea2-cfef-387b-9ca9-870b7ee60fa6",
    queueType: "RANKED_SOLO_5x5",
    tier: "MASTER",
    rank: "I",
    summonerId: "-JXlAr1LmjIeT6eN8vxCT0LfcTE7h0Ku53bBhDTGlS7xBg4",
    leaguePoints: 308,
    wins: 122,
    losses: 115,
    veteran: false,
    inactive: false,
    freshBlood: true,
    hotStreak: false,
  },
];

const rankBaseline = {
  "IRON-IV": 0,
  "IRON-III": 100,
  "IRON-II": 200,
  "IRON-I": 300,
  "BRONZE-IV": 400,
  "BRONZE-III": 500,
  "BRONZE-II": 600,
  "BRONZE-I": 700,
  "SILVER-IV": 800,
  "SILVER-III": 900,
  "SILVER-II": 1000,
  "SILVER-I": 1100,
  "GOLD-IV": 1200,
  "GOLD-III": 1300,
  "GOLD-II": 1400,
  "GOLD-I": 1500,
  "PLATINUM-IV": 1600,
  "PLATINUM-III": 1700,
  "PLATINUM-II": 1800,
  "PLATINUM-I": 1900,
  "EMERALD-IV": 2000,
  "EMERALD-III": 2100,
  "EMERALD-II": 2200,
  "EMERALD-I": 2300,
  "DIAMOND-IV": 2400,
  "DIAMOND-III": 2500,
  "DIAMOND-II": 2600,
  "DIAMOND-I": 2700,
  "MASTER-I": 2800,
  "GRANDMASTER-I": 2900,
  "CHALLENGER-I": 3000,
};

async function getMatches(username, tagLine) {
  const res = await fetch(
    `/api/league-of-legends/matches?username=${username}&tagLine=${tagLine}`
  );

  if (!res.ok) throw new Error("Failed to fetch match data");

  return await res.json();
}

let queues;
async function getQueueInfo(queueId) {
  if (!queues) {
    const res = await fetch(
      "https://static.developer.riotgames.com/docs/lol/queues.json"
    );

    if (!res.ok) throw new Error("Failed to fetch queue data");

    queues = await res.json();
  }

  let queueOutcome = queues.find((queue) => queue.queueId === queueId);

  switch (queueOutcome.queueId) {
    case 420:
      queueOutcome.description = "Ranked Solo";
      break;
    case 440:
      queueOutcome.description = "Ranked Flex";
      break;
    case 490:
      queueOutcome.description = "Quick Play";
      break;
    case 400:
      queueOutcome.description = "Draft Pick";
      break;
    case 830:
      queueOutcome.description = "AI Intro";
      break;
    case 840:
      queueOutcome.description = "AI Beginner";
      break;
    case 850:
      queueOutcome.description = "AI Intermediate";
      break;
    case 450:
      queueOutcome.description = "ARAM";
      break;
    case 700:
      queueOutcome.description = "Clash";
      break;
    case 720:
      queueOutcome.description = "ARAM Clash";
      break;
    case 1710:
      queueOutcome.description = "Arena";
      break;
    default:
      queueOutcome.description = "Unknown";
      break;
  }

  return queueOutcome;
}

let spells;
async function getSpellInfo(spellNumberId) {
  if (!spells) {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.11.1/data/en_US/summoner.json"
    );

    if (!res.ok) throw new Error("Failed to fetch summoner data");

    spells = await res.json();
  }

  for (const summonerSpell in spells.data) {
    const spellKey = spells.data[summonerSpell].key;
    if (spellKey === spellNumberId.toString()) {
      return spells.data[summonerSpell].id;
    }
  }
}

let runes;
async function getRuneInfo() {
  if (!runes) {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.12.1/data/en_US/runesReforged.json"
    );

    if (!res.ok) throw new Error("Failed to fetch runes data");

    return (runes = await res.json());
  }
}

async function getPrimaryInfo(runeId) {
  const runeData = await getRuneInfo();

  // for (const rune of runeData) {
  //   rune.slots.find((slot) => {
  //     for (const primaryRune of slot.runes) {
  //       // console.log(primaryRune);
  //       // console.log(runeId);
  //       if (primaryRune.id === runeId) {
  //         return primaryRune.icon;
  //       }
  //     }
  //   });
  // }

  for (const runeTree of runeData) {
    for (const slot of runeTree.slots) {
      const primaryRune = slot.runes.find(
        (primaryRune) => primaryRune.id === runeId
      );

      if (primaryRune) {
        return primaryRune.icon;
      }
    }
  }
}

async function getSecondaryInfo(runeId) {
  const runeData = await getRuneInfo();

  for (const rune of runeData) {
    if (rune.id === runeId) {
      return rune.icon;
    }
  }
}

async function getRankedInfo(summonerId) {
  const res = await fetch(
    `/api/league-of-legends/ranked?summonerId=${summonerId}`
  );

  if (!res.ok) throw new Error("Failed to fetch ranked data");

  return await res.json();
}

async function averageRank(summonerIds) {
  let rankNum = 0;

  let counter = 0;

  const allRankInfo = await Promise.all(
    summonerIds.map((summonerId) => getRankedInfo(summonerId))
  );
  for (const rankInfo of allRankInfo) {
    const soloRank = rankInfo.find(
      (rankInfo) => rankInfo.queueType === "RANKED_SOLO_5x5"
    );

    if (soloRank) {
      const { tier, rank, leaguePoints } = soloRank;
      rankNum += rankBaseline[`${tier}-${rank}`] + leaguePoints;
      counter += 1;
    }
  }

  return rankNum / counter;
}

// const checkNameAndTag = ({ match, params }) => {
//   match.info.participants.forEach((item) => {
//     if (
//       item.riotIdGameName === params.username &&
//       item.riotIdTagline === params.tagLine
//     ) {
//       return true;
//     }
//   });
// };

const GameMode = ({ label }) => {
  return <button className={styles["gamemode-tab"]}>{label}</button>;
};

const Item = ({ match, params }) => {
  const getItem = (item) => {
    const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/${item}.png`;

    return riotURL;
  };

  const items = {};

  match.info.participants.forEach((item) => {
    if (item.riotIdGameName === params.username) {
      items.item0 = getItem(item.item0);
      items.item1 = getItem(item.item1);
      items.item2 = getItem(item.item2);
      items.item3 = getItem(item.item3);
      items.item4 = getItem(item.item4);
      items.item5 = getItem(item.item5);
      items.item6 = getItem(item.item6);
    }
  });

  return (
    <div className={styles["items-container"]}>
      <Image
        src={items.item0}
        width={24}
        height={24}
        alt="Item 0"
        className={styles["item-style"]}
      />
      <Image
        src={items.item1}
        width={24}
        height={24}
        alt="Item 1"
        className={styles["item-style"]}
      />
      <Image
        src={items.item2}
        width={24}
        height={24}
        alt="Item 2"
        className={styles["item-style"]}
      />
      <Image
        src={items.item3}
        width={24}
        height={24}
        alt="Item 3"
        className={styles["item-style"]}
      />
      <Image
        src={items.item4}
        width={24}
        height={24}
        className={styles["item-style"]}
        alt="Item 4"
      />
      <Image
        src={items.item5}
        width={24}
        height={24}
        className={styles["item-style"]}
        alt="Item 5"
      />
      <Image
        src={items.item6}
        width={24}
        height={24}
        alt="Item 6"
        className={styles["item-style"]}
      />
    </div>
  );
};

const Team = ({ team }) => {
  const getChampion = (champ) => {
    if (champ === "FiddleSticks") {
      champ = "Fiddlesticks";
    }

    const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${champ}.png`;

    return riotURL;
  };

  let players = {};

  // const stuff = team.map((participant) => ({
  //   playerName: participant.riotIdGameName,
  //   playerTagLine: participant.riotIdTagline,
  //   championName: participant.championName,
  // }));
  // const stuff = team.map((participant) => {
  //   return {
  //     playerName: participant.riotIdGameName,
  //     playerTagLine: participant.riotIdTagline,
  //     championName: participant.championName,
  //   };
  // });

  let playerNames = team.map((participant) => participant.riotIdGameName);
  let playerTagLine = team.map((participant) => participant.riotIdTagline);
  let championNames = team.map((participant) => participant.championName);

  players.champ1 = getChampion(championNames[0]); // stuff[0].championName
  players.champ2 = getChampion(championNames[1]);
  players.champ3 = getChampion(championNames[2]);
  players.champ4 = getChampion(championNames[3]);
  players.champ5 = getChampion(championNames[4]);

  return (
    <div className={styles["team-container"]}>
      <div className={styles["player-container"]}>
        <Image src={players.champ1} width={20} height={20} alt="Icon 1" />
        <span className={styles["player-styling"]}>
          {playerNames[0]}#{playerTagLine[0]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={players.champ2} width={20} height={20} alt="Icon 2" />
        <span className={styles["player-styling"]}>
          {playerNames[1]}#{playerTagLine[1]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={players.champ3} width={20} height={20} alt="Icon 3" />
        <span className={styles["player-styling"]}>
          {playerNames[2]}#{playerTagLine[2]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={players.champ4} width={20} height={20} alt="Icon 4" />
        <span className={styles["player-styling"]}>
          {playerNames[3]}#{playerTagLine[3]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={players.champ5} width={20} height={20} alt="Icon 5" />
        <span className={styles["player-styling"]}>
          {playerNames[4]}#{playerTagLine[4]}
        </span>
      </div>
    </div>
  );
};

function Match({ match, params }) {
  const [queueInfo, setQueueInfo] = useState({});
  const [spellInfo1, setspellInfo1] = useState({});
  const [spellInfo2, setspellInfo2] = useState({});
  const [runeInfo1, setRuneInfo1] = useState({});
  const [runeInfo2, setRuneInfo2] = useState({});
  const [matchAvg, setMatchAvg] = useState({});

  useEffect(() => {
    (async () => {
      setQueueInfo(await getQueueInfo(match.info.queueId));
    })();
  }, [match.info.queueId]);

  useEffect(() => {
    // (async () => {
    getSpellInfo(getSpellId1()).then((x) => setspellInfo1(x));
    getSpellInfo(getSpellId2()).then((x) => setspellInfo2(x));
    getPrimaryInfo(getRunePrimary()).then((x) => setRuneInfo1(x));
    getSecondaryInfo(getRuneSecondary()).then((x) => setRuneInfo2(x));
    averageRank(getSummonerIds()).then((x) => setMatchAvg(x));
    // setspellInfo1(await getSummonerInfo(getSummrId1()));
    // setspellInfo2(await getSummonerInfo(getSpellId2()));
    // setMatchAvg(await averageRank(getSummonerIds()));
    // })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     setMatchAvg(await averageRank(getSummonerIds()));
  //   })();
  // }, []);

  const getSpellId1 = () => {
    for (const item of match.info.participants) {
      if (item.riotIdGameName === params.username) {
        return item.summoner1Id;
      }
    }
  };

  const getSpellId2 = () => {
    for (const item of match.info.participants) {
      if (item.riotIdGameName === params.username) {
        return item.summoner2Id;
      }
    }
  };

  const getRunePrimary = () => {
    for (const player of match.info.participants) {
      if (player.riotIdGameName === params.username) {
        return player.perks.styles[0].selections[0].perk;
      }
    }
  };

  const getRuneSecondary = () => {
    for (const player of match.info.participants) {
      if (player.riotIdGameName === params.username) {
        return player.perks.styles[1].style;
      }
    }
  };

  const getSummonerIds = () => {
    let summonerIds = [];

    match.info.participants.forEach((player) => {
      summonerIds.push(player.summonerId);
    });

    return summonerIds;
  };

  const findSummonerName = () => {
    let foundName = null;

    match.info.participants.forEach((item) => {
      if (
        item.riotIdGameName === params.username &&
        item.riotIdTagline === params.tagLine
      ) {
        foundName = item.riotIdGameName;
      }
    });

    return foundName; //need to change for riot id and tagline
  };

  const getRelativeTime = () => {
    let endTime = match.info.gameEndTimestamp;

    const diff = new Date(endTime) - new Date();
    const formatter = new Intl.RelativeTimeFormat("en");

    if (diff < 2.68e9) {
      return formatter.format(Math.ceil(diff / 8.64e7), "day");
    } else if (diff < 3.156e10) {
      return formatter.format(Math.ceil(diff / 2.6298e9), "month");
    } else {
      return formatter.format(Math.ceil(diff / 3.15576e10), "year");
    }
  };

  const getGameDuration = () => {
    let gameTime = null;

    const minutes = Math.floor(match.info.gameDuration / 60);
    const seconds = match.info.gameDuration % 60;

    gameTime = `${minutes}m ${seconds}s`;

    return gameTime;
  };

  const getOutcome = () => {
    let victoryOutcome = null;

    match.info.participants.forEach((item) => {
      if (item.riotIdGameName === params.username && item.win === true) {
        victoryOutcome = "VICTORY";
      } else if (
        item.riotIdGameName === params.username &&
        item.win === false
      ) {
        victoryOutcome = "DEFEAT";
      }
    });

    return victoryOutcome;
  };

  const getChampIconInfo = () => {
    let champIcon = null;
    let champLevel = null;

    const getChampion = (champ) => {
      if (champ === "FiddleSticks") {
        champ = "Fiddlesticks";
      }

      const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${champ}.png`;

      return riotURL;
    };

    match.info.participants.forEach((player) => {
      if (player.riotIdGameName === params.username) {
        champIcon = getChampion(player.championName);
        champLevel = player.champLevel;
      }
    });

    return (
      <div className={styles["champ-container"]}>
        <Image
          src={champIcon}
          fill
          sizes="50px"
          alt="Icon 1"
          style={{ borderRadius: "5px" }}
        />
        <div className={styles["level-container"]}>
          <span className={styles["level"]}>{champLevel}</span>
        </div>
      </div>
    );
  };

  const getSummonerSpells = () => {
    let champSpell1 = null;
    let champSpell2 = null;

    const getSpell = (spell) => {
      const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/spell/${spell}.png`;

      return riotURL;
    };

    match.info.participants.forEach((player) => {
      if (player.riotIdGameName === params.username) {
        champSpell1 = getSpell(spellInfo1);
        champSpell2 = getSpell(spellInfo2);
      }
    });

    return (
      <>
        <div className={styles["spell-container1"]}>
          <Image
            src={champSpell1}
            fill
            sizes="50px"
            alt="spell1"
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className={styles["spell-container2"]}>
          <Image
            src={champSpell2}
            fill
            sizes="50px"
            alt="spell2"
            style={{ borderRadius: "5px" }}
          />
        </div>
      </>
    );
  };

  const getSummonerRunes = () => {
    let champRune1 = null;
    let champRune2 = null;

    const getRune = (rune) => {
      const riotURL = `https://ddragon.leagueoflegends.com/cdn/img/${rune}`;

      return riotURL;
    };

    const participant = match.info.participants.find(
      (player) => player.riotIdGameName === params.username
    );

    if (participant) {
      champRune1 = getRune(runeInfo1);
      champRune2 = getRune(runeInfo2);
    }

    return (
      <>
        <div className={styles["rune-container1"]}>
          <Image
            src={champRune1}
            fill
            sizes="50px"
            alt="rune1"
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className={styles["rune-container2"]}>
          <Image
            src={champRune2}
            width={25}
            height={25}
            sizes="50px"
            alt="rune2"
            style={{ borderRadius: "5px" }}
          />
        </div>
      </>
    );
  };

  const getKda = () => {
    let kills = null;
    let deaths = null;
    let assists = null;
    let kdaRatio = null;
    let kpRatio = null;

    match.info.participants.forEach((item) => {
      if (item.riotIdGameName === params.username) {
        kills = item.kills;
        deaths = item.deaths;
        assists = item.assists;

        kdaRatio = item.challenges.kda.toFixed(2);

        kpRatio = (item.challenges.killParticipation * 100).toFixed();
      }
    });

    return (
      <div className={styles["kda-container"]}>
        <div className={styles["kda-num"]}>
          {kills}
          <span className={styles["kda-slash"]}> / </span>
          <span className={styles["kda-death"]}>{deaths}</span>
          <span className={styles["kda-slash"]}> / </span>
          {assists}
        </div>
        <div className={styles["kda-ratio"]}>{kdaRatio} KDA</div>
        <div className={styles["kp-ratio"]}>{kpRatio}% KP</div>
      </div>
    );
  };

  const getGCC = () => {
    let gold = null;
    let creepScore = null;
    let creepScorePerMinute = null;
    let controlWards = null;

    match.info.participants.forEach((item) => {
      if (item.riotIdGameName === params.username) {
        gold = item.goldEarned;

        creepScore = item.totalMinionsKilled;
        const minutes = Math.floor(match.info.gameDuration / 60);
        const seconds = match.info.gameDuration % 60;
        creepScorePerMinute = (creepScore / (minutes + seconds / 60)).toFixed(
          1
        );

        controlWards = item.challenges.controlWardsPlaced;
      }
    });

    return (
      <div className={styles["gcc-container"]}>
        <div className={styles["gold-income"]}>
          <Image
            src={`/images/match/emoney.png`}
            width={16}
            height={16}
            className={styles["gold-styling"]}
            alt="gold"
          />
          {gold}
        </div>
        <div className={styles["creep-score"]}>
          <Image
            src={`/images/match/minion.png`}
            width={16}
            height={16}
            className={styles["cs-styling"]}
            alt="creep score"
          />
          {creepScore} ({creepScorePerMinute})
        </div>
        <div className={styles["control-wards"]}>
          <Image
            src={`/images/match/controlward.png`}
            width={16}
            height={16}
            className={styles["cw-styling"]}
            alt="control ward"
          />
          {controlWards}
        </div>
      </div>
    );
  };

  const getMatchRankAvg = () => {
    let avgRankTitle = null;
    let rankEmblem = null;

    const matchAvgRounded = Math.ceil(matchAvg / 100) * 100;

    for (const rank in rankBaseline) {
      if (rankBaseline[rank] === matchAvgRounded) {
        avgRankTitle = rank;
        rankEmblem = avgRankTitle.slice(0, avgRankTitle.indexOf("-"));
        break;
      }
    }

    return (
      <>
        {rankEmblem && (
          <Image
            src={`/images/ranked/${rankEmblem}.png`}
            width={35}
            height={35}
            alt="rank-emblem"
          />
        )}
        <span className={styles["matchrank-title"]}>{avgRankTitle}</span>
      </>
    );
  };

  const getMultiKill = () => {
    let isMultiKill = false;
    let multiKillType = null;
    let multiKill = null;

    const participant = match.info.participants.find(
      (player) => player.riotIdGameName === params.username
    );

    if (participant) {
      multiKillType =
        participant.pentaKills ||
        participant.quadraKills ||
        participant.tripleKills ||
        participant.doubleKills;

      switch (multiKillType) {
        case participant.pentaKills:
          multiKill = "PENTAKILL";
          break;
        case participant.quadraKills:
          multiKill = "Quadra kill";
          break;
        case participant.tripleKills:
          multiKill = "Triple kill";
          break;
        case participant.doubleKills:
          multiKill = "Double kill";
          break;
        default:
          multiKill = "Unknown";
          break;
      }

      isMultiKill = true;
    }

    return (
      <>
        {isMultiKill && (
          <div
            className={`${styles["multikill-container"]} ${
              multiKill === "PENTAKILL" ? styles["pentakill"] : null
            }`}
          >
            <span className={styles["multikill-title"]}>{multiKill}</span>
          </div>
        )}
      </>
    );
  };

  const getTeams = () => {
    const blueTeam = match.info.participants.filter(
      (participant) => participant.teamId === 100
    );

    const redTeam = match.info.participants.filter(
      (participant) => participant.teamId === 200
    );

    return (
      <>
        <Team team={blueTeam} />
        <Team team={redTeam} />
      </>
    );
  };

  return (
    <div className={styles["match-container"]}>
      <div
        className={`${styles["match-deco"]} ${
          getOutcome() === "VICTORY"
            ? styles["victory-deco"]
            : styles["defeat-deco"]
        }`}
      ></div>
      <div
        className={`${styles["match-content"]} ${
          getOutcome() === "VICTORY"
            ? styles["victory-content"]
            : styles["defeat-content"]
        }`}
      >
        <div className={styles["sum-container1"]}>
          <div className={styles["gamemode-label"]}>
            {queueInfo.description}
          </div>
          <div className={styles["days-label"]}>{getRelativeTime()}</div>
          <div className={styles["gametime-label"]}>{getGameDuration()}</div>
          <div
            className={`${styles["outcome-label"]} ${
              getOutcome() === "VICTORY" ? styles["victory"] : styles["defeat"]
            }`}
          >
            {getOutcome()}
          </div>
        </div>
        <div className={styles["match-divider"]}></div>
        <div className={styles["sum-container2"]}>
          <div className={styles["icon-container1"]}>
            <div className={styles["champsums-container"]}>
              {getChampIconInfo()}
              <div className={styles["summoners-container"]}>
                {getSummonerSpells()}
              </div>
            </div>
            <div className={styles["runepage-container"]}>
              {getSummonerRunes()}
            </div>
          </div>
          <div className={styles["icon-container2"]}>
            <div className={styles["matchstats-container"]}>
              {getKda()}
              {getGCC()}
            </div>
            <Item match={match} params={params} />
          </div>
          <div className={styles["icon-container3"]}>
            <div className={styles["matchrank-container"]}>
              {getMatchRankAvg()}
            </div>
            <div className={styles["analysis-container"]}>
              <Image
                src={`/images/match/heimer_analysis.png`}
                width={24}
                height={24}
                className={styles["cw-styling"]}
                alt="control ward"
              />
              <span className={styles["analysis-title"]}>Analysis</span>
            </div>
            <div className={styles["multikill-placeholder"]}>
              {getMultiKill()}
            </div>
          </div>
        </div>
        <div className={styles["match-divider"]}></div>
        <div className={styles["sum-container3"]}>{getTeams()}</div>
        <div className={styles["expand-tab"]}>
          <RiArrowDownDoubleLine className={styles["expand-styling"]} />
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Region");
  const options = ["EUW", "NA"];

  return (
    <>
      <div className={styles["search-header"]}>
        <div className={styles["search-container"]}>
          <div className={styles["search-icon"]}>
            <IoSearch size={30} />
          </div>
          <input
            className={styles["input-field"]}
            placeholder="Search Riot ID, PLAYER#EUW1"
          />
          <div className={styles["dropdown"]}>
            <div
              className={styles["dropdown-btn"]}
              onClick={() => setIsActive(!isActive)}
            >
              {selected}
              <span className={styles["dropdown-icon"]}>&#9660;</span>
            </div>
            {isActive && (
              <div className={styles["dropdown-content"]}>
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setIsActive(false);
                    }}
                    className={styles["dropdown-item"]}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles["inside-background"]}>
        <div className={styles["username-container"]}>
          <div className={styles["profile-container"]}></div>
          <h1 className={styles["username-title"]}>{params.username}</h1>
        </div>
        <div className={styles["main-container"]}>
          <div className={styles["side-container"]}>
            <div className={styles["ranked-container"]}>
              <div className={styles["ranked-title"]}>Current rank</div>
              <div className={styles["ranked-solo"]}>
                <span className={styles["ranked-label"]}>Ranked Solo</span>
                <div className={styles["ranked-outcome"]}>
                  <div className={styles["ranked-icon-container"]}></div>
                </div>
              </div>
              <div className={styles["ranked-flex"]}>
                <span className={styles["ranked-label"]}>Ranked Flex</span>
                <div className={styles["ranked-outcome"]}>
                  <div className={styles["ranked-icon-container"]}></div>
                </div>
              </div>
            </div>
            <div className={styles["performance-container"]}></div>
          </div>
          <div className={styles["primary-container"]}>
            <div className={styles["gamemode-container"]}>
              <GameMode label="All" />
              <GameMode label="Ranked Solo" />
              <GameMode label="Ranked Flex" />
              <GameMode label="Draft Pick" />
              <GameMode label="Quick Play" />
              <GameMode label="Queue Type" />
            </div>
            <div className={styles["matchsum-container"]}>
              <div className={styles["recent-container"]}>
                <span className={styles["recent-label"]}>Recent Matches</span>
                <div className={styles["matchsearch-container"]}>
                  <div className={styles["matchsearch-icon"]}>
                    <IoSearch size={30} />
                  </div>
                  <input
                    className={styles["matchinput-field"]}
                    placeholder="Search Champion..."
                  />
                </div>
              </div>
              <div className={styles["stats-container"]}></div>
            </div>
            <div className={styles["history-container"]}>
              {matches.map((match) => (
                <Match
                  match={match}
                  params={params}
                  key={match.metadata.matchId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
