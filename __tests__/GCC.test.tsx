import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GCC } from "@/app/ui/league-of-legends/match/gcc";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: any) => {
    // Include data-testid to make it easier to query the image properties
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        data-testid="next-image"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    );
  },
}));

// Match GCC
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

  it("renders correct alt attribute for GCC icons", () => {
    render(<GCC match={mockGCC} />);

    expect(screen.getByAltText("gold")).toHaveAttribute("alt", "gold");
    expect(screen.getByAltText("creep score")).toHaveAttribute(
      "alt",
      "creep score"
    );
    expect(screen.getByAltText("control ward")).toHaveAttribute(
      "alt",
      "control ward"
    );
  });

  it("renders alt when GCC images doesn't render", () => {
    render(<GCC match={mockGCC} />);

    expect(screen.getByAltText("gold")).toBeInTheDocument();
    expect(screen.getByAltText("creep score")).toBeInTheDocument();
    expect(screen.getByAltText("control ward")).toBeInTheDocument();
  });

  it("renders correct width and height for GCC icons", () => {
    render(<GCC match={mockGCC} />);

    const images = screen.getAllByTestId("next-image");

    images.forEach((img) => {
      expect(img).toHaveAttribute("width", "16");
      expect(img).toHaveAttribute("height", "16");
    });
  });
});
