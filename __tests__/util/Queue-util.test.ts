import { getQueueInfo } from "@/app/lib/match-functions/queue-info";

describe("getQueueInfo", () => {
  it("returns Ranked Solo for queue ID 420", () => {
    expect(getQueueInfo(420)).toBe("Ranked Solo");
  });

  it("returns Ranked Flex for queue ID 440", () => {
    expect(getQueueInfo(440)).toBe("Ranked Flex");
  });

  it("returns Swift Play for queue ID 480", () => {
    expect(getQueueInfo(480)).toBe("Swift Play");
  });

  it("returns Draft Pick for queue ID 400", () => {
    expect(getQueueInfo(400)).toBe("Draft Pick");
  });

  it("returns correct queue names for AI gamemodes", () => {
    expect(getQueueInfo(830)).toBe("AI Intro");
    expect(getQueueInfo(840)).toBe("AI Beginner");
    expect(getQueueInfo(850)).toBe("AI Intermediate");
  });

  it("returns ARAM for queue ID 450", () => {
    expect(getQueueInfo(450)).toBe("ARAM");
  });

  it("returns correct queue names for Clash modes", () => {
    expect(getQueueInfo(700)).toBe("Clash");
    expect(getQueueInfo(720)).toBe("ARAM Clash");
  });

  it("returns Arena for Arena queue IDs", () => {
    expect(getQueueInfo(1700)).toBe("Arena");
    expect(getQueueInfo(1710)).toBe("Arena");
  });

  it("returns Swarm for Swarm queue IDs", () => {
    expect(getQueueInfo(1810)).toBe("Swarm");
    expect(getQueueInfo(1820)).toBe("Swarm");
    expect(getQueueInfo(1830)).toBe("Swarm");
    expect(getQueueInfo(1840)).toBe("Swarm");
  });

  it("returns Custom for queue ID 0", () => {
    expect(getQueueInfo(0)).toBe("Custom");
  });

  it("returns Unknown for undefined queue ID", () => {
    expect(getQueueInfo(9999)).toBe("Unknown");
  });
});
