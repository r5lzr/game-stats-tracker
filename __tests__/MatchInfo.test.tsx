import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MatchInfo } from "@/app/ui/league-of-legends/match/match-info";
import styles from "../profile.module.css";

describe("MatchCard", () => {
  const mockMatchVictory = {
    outcome: "VICTORY",
    queueInfo: "Ranked Solo",
    relativeTime: "2 hours ago",
    gameDuration: "30m 15s",
  };

  const mockMatchDefeat = {
    outcome: "DEFEAT",
    queueInfo: "Ranked Solo",
    relativeTime: "1 day ago",
    gameDuration: "25m 10s",
  };

  it("renders correctly for match victory", () => {
    render(
      <MatchInfo
        outcome={mockMatchVictory.outcome}
        queueInfo={mockMatchVictory.queueInfo}
        relativeTime={mockMatchVictory.relativeTime}
        gameDuration={mockMatchVictory.gameDuration}
      />
    );

    expect(screen.getByText("Ranked Solo")).toBeInTheDocument();
    expect(screen.getByText("2 hours ago")).toBeInTheDocument();
    expect(screen.getByText("30m 15s")).toBeInTheDocument();
    expect(screen.getByText("VICTORY")).toBeInTheDocument();
    expect(screen.getByText("VICTORY")).toHaveClass(
      `${styles["outcome-label"]} ${styles["victory"]}`
    );
  });

  it("renders correctly for match defeat", () => {
    render(
      <MatchInfo
        outcome={mockMatchDefeat.outcome}
        queueInfo={mockMatchDefeat.queueInfo}
        relativeTime={mockMatchDefeat.relativeTime}
        gameDuration={mockMatchDefeat.gameDuration}
      />
    );

    expect(screen.getByText("Ranked Solo")).toBeInTheDocument();
    expect(screen.getByText("1 day ago")).toBeInTheDocument();
    expect(screen.getByText("25m 10s")).toBeInTheDocument();
    expect(screen.getByText("DEFEAT")).toBeInTheDocument();
    expect(screen.getByText("DEFEAT")).toHaveClass(
      `${styles["outcome-label"]} ${styles["defeat"]}`
    );
  });
});
