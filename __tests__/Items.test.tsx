import { render, screen } from "@testing-library/react";
import { Items } from "@/app/ui/league-of-legends/match/items";
import { getItem } from "@/app/ui/league-of-legends/match/items";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, placeholder, width, height }: any) => {
    // Include data-testid to make it easier to query the image properties
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        data-testid="next-image"
        src={src}
        alt={alt}
        data-placeholder={placeholder}
        width={width}
        height={height}
      />
    );
  },
}));

// Utility function
describe("getItem", () => {
  it("returns correct URL when item is provided", () => {
    const expected =
      "https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/1055.png";
    expect(getItem(1055)).toBe(expected);
  });

  it("returns fallback image when item is not provided", () => {
    expect(getItem(0)).toBe("/images/empty.png");
  });
});

// Match items
describe("Items", () => {
  const mockItems = {
    itemId0: 1055,
    itemId1: 1036,
    itemId2: 0,
    itemId3: 3078,
    itemId4: 0,
    itemId5: 3153,
    itemId6: 3363,
  };

  it("renders all items with correct sources", () => {
    render(<Items match={mockItems} />);

    const images = screen.getAllByRole("img");

    expect(images[0]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/1055.png"
    );
    expect(images[1]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/1036.png"
    );
    expect(images[2]).toHaveAttribute("src", "/images/empty.png");
    expect(images[3]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3078.png"
    );
    expect(images[4]).toHaveAttribute("src", "/images/empty.png");
    expect(images[5]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3153.png"
    );
    ``;
    expect(images[6]).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/3363.png"
    );
  });

  it("renders correct alt attribute for item icons", () => {
    render(<Items match={mockItems} />);

    expect(screen.getByAltText("Item 0")).toHaveAttribute("alt", "Item 0");
    expect(screen.getByAltText("Item 1")).toHaveAttribute("alt", "Item 1");
    expect(screen.getByAltText("Item 2")).toHaveAttribute("alt", "Item 2");
    expect(screen.getByAltText("Item 3")).toHaveAttribute("alt", "Item 3");
    expect(screen.getByAltText("Item 4")).toHaveAttribute("alt", "Item 4");
    expect(screen.getByAltText("Item 5")).toHaveAttribute("alt", "Item 5");
    expect(screen.getByAltText("Item 6")).toHaveAttribute("alt", "Item 6");
  });

  it("renders alt when item image doesn't render", () => {
    render(<Items match={mockItems} />);

    expect(screen.getByAltText("Item 0")).toBeInTheDocument();
    expect(screen.getByAltText("Item 1")).toBeInTheDocument();
    expect(screen.getByAltText("Item 2")).toBeInTheDocument();
    expect(screen.getByAltText("Item 3")).toBeInTheDocument();
    expect(screen.getByAltText("Item 4")).toBeInTheDocument();
    expect(screen.getByAltText("Item 5")).toBeInTheDocument();
    expect(screen.getByAltText("Item 6")).toBeInTheDocument();
  });

  it("renders correct fill attribute for primary rune icon", () => {
    render(<Items match={mockItems} />);

    const images = screen.getAllByTestId("next-image");

    expect(images[0]).toHaveAttribute("data-placeholder", "empty");
  });

  it("renders correct width and height for GCC icons", () => {
    render(<Items match={mockItems} />);

    const images = screen.getAllByTestId("next-image");

    images.forEach((img) => {
      expect(img).toHaveAttribute("width", "24");
      expect(img).toHaveAttribute("height", "24");
    });
  });
});
