import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pings } from "@/app/ui/league-of-legends/match/pings";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  },
}));

// Component rendering
describe("Pings", () => {
  const mockPings = {
    visionPings: 2,
    pushPings: 3,
    dangerPings: 0,
    pathingPings: 4,
    assistPings: 1,
    missingPings: 1,
  };

  it("renders all ping values correctly", () => {
    render(<Pings match={mockPings} />);

    expect(
      within(screen.getByTestId("vision-ping")).getByText(2)
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("push-ping")).getByText(3)
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("danger-ping")).getByText(0)
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("pathing-ping")).getByText(4)
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("assist-ping")).getByText(1)
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("missing-ping")).getByText(1)
    ).toBeInTheDocument();
  });

  it("renders pings with correct sources", () => {
    render(<Pings match={mockPings} />);
    const images = screen.getAllByRole("img");

    expect(images[0]).toHaveAttribute("src", "/images/match/vision.png");
    expect(images[1]).toHaveAttribute("src", "/images/match/pathing.png");
    expect(images[2]).toHaveAttribute("src", "/images/match/push.png");
    expect(images[3]).toHaveAttribute("src", "/images/match/assist.png");
    expect(images[4]).toHaveAttribute("src", "/images/match/danger.png");
    expect(images[5]).toHaveAttribute("src", "/images/match/missing.png");
  });
});
