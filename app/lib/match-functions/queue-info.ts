export async function getQueueInfo(queueId: number) {
  let queueOutcome;

  switch (queueId) {
    case 420:
      queueOutcome = "Ranked Solo";
      break;
    case 440:
      queueOutcome = "Ranked Flex";
      break;
    case 490:
      queueOutcome = "Quick Play";
      break;
    case 400:
      queueOutcome = "Draft Pick";
      break;
    case 830:
      queueOutcome = "AI Intro";
      break;
    case 840:
      queueOutcome = "AI Beginner";
      break;
    case 850:
      queueOutcome = "AI Intermediate";
      break;
    case 450:
      queueOutcome = "ARAM";
      break;
    case 700:
      queueOutcome = "Clash";
      break;
    case 720:
      queueOutcome = "ARAM Clash";
      break;
    case 1700 || 1710:
      queueOutcome = "Arena";
      break;
    case 1810:
      queueOutcome = "Swarm";
      break;
    case 1820:
      queueOutcome = "Swarm";
      break;
    case 1830:
      queueOutcome = "Swarm";
      break;
    case 1840:
      queueOutcome = "Swarm";
      break;
    case 0:
      queueOutcome = "Custom";
      break;
    default:
      queueOutcome = "Unknown";
      break;
  }

  return queueOutcome;
}
