import { render } from "@testing-library/react";
import { NavigationHandler } from ".";
import { useNavigate } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

vi.mock("react-router", () => ({
  useNavigate: vi.fn(),
}));
vi.mock("../../store/hooks", () => ({
  useAppDispatch: vi.fn(),
  useAppSelector: vi.fn(),
}));

describe("NavigationHandler", () => {
  it("navigates when path is set", () => {
    const mockNavigate = vi.fn();
    const mockDispatch = vi.fn();
    (useNavigate as any).mockReturnValue(mockNavigate);
    (useAppDispatch as any).mockReturnValue(mockDispatch);
    (useAppSelector as any).mockImplementation((cb: any) =>
      cb({ navigation: { path: "/test" } }),
    );

    render(<NavigationHandler />);

    expect(mockNavigate).toHaveBeenCalledWith("/test");
    expect(mockDispatch).toHaveBeenCalledWith({ type: "CLEAR_NAVIGATION" });
  });

  it("does nothing when path is not set", () => {
    const mockNavigate = vi.fn();
    const mockDispatch = vi.fn();
    (useNavigate as any).mockReturnValue(mockNavigate);
    (useAppDispatch as any).mockReturnValue(mockDispatch);
    (useAppSelector as any).mockImplementation((cb: any) =>
      cb({ navigation: { path: "" } }),
    );

    render(<NavigationHandler />);

    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
