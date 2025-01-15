import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MultiKill } from "@/app/ui/league-of-legends/match/multiKill";

// Match multi-kill
describe("MultiKill", () => {
  it("renders multiKill correctly", () => {
    render(<MultiKill match={{ multiKill: "Double Kill" }} />);
    expect(screen.getByText("Double Kill")).toBeInTheDocument();

    render(<MultiKill match={{ multiKill: "Triple Kill" }} />);
    expect(screen.getByText("Triple Kill")).toBeInTheDocument();

    render(<MultiKill match={{ multiKill: "Quadra Kill" }} />);
    expect(screen.getByText("Quadra Kill")).toBeInTheDocument();

    render(<MultiKill match={{ multiKill: "PENTAKILL" }} />);
    expect(screen.getByText("PENTAKILL")).toBeInTheDocument();
  });

  it("renders pentakill style when multiKill is PENTAKILL", () => {
    render(<MultiKill match={{ multiKill: "PENTAKILL" }} />);

    // eslint-disable-next-line testing-library/no-node-access
    const container = screen.getByText("PENTAKILL").closest("div");
    expect(container).toHaveClass("multikill-container", "pentakill");
  });

  it("renders empty when multiKill is null", () => {
    render(<MultiKill match={{ multiKill: null }} />);
    expect(screen.queryByText(/kill/i)).not.toBeInTheDocument();
  });
});
