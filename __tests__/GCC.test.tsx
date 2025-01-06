import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GCC } from "@/app/ui/league-of-legends/match/gcc";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  },
}));

// Component rendering
describe("GCC", () => {
  const mockGCC = {
    gold: 14549,
    creepScore: 219,
    creepScorePerMin: 6,
    controlWards: 0,
  };

  it("renders all GCC values correctly", () => {
    render(<GCC match={mockGCC} />);

    expect(
      within(screen.getByTestId("gold-income")).getByText("14549")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("creep-score")).getByText("219 (6)")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("control-wards")).getByText("0")
    ).toBeInTheDocument();
  });

  it("renders GCC with correct sources", () => {
    render(<GCC match={mockGCC} />);
    const images = screen.getAllByRole("img");

    expect(images[0]).toHaveAttribute("src", "/images/match/emoney.png");
    expect(images[1]).toHaveAttribute("src", "/images/match/minion.png");
    expect(images[2]).toHaveAttribute("src", "/images/match/controlward.png");
  });
});
