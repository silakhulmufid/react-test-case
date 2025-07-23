import { renderHook } from "@testing-library/react"
import { useMediaQuery } from "react-responsive"
import { describe, expect, it, vi } from "vitest"
import useBreakpoint from "./useBreakpoint"

vi.mock("react-responsive", () => ({
  useMediaQuery: vi.fn(),
}))

describe("useBreakpoint", () => {
  it("returns correct breakpoint values", () => {
    ;(useMediaQuery as any)
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false)
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false)
      .mockImplementationOnce(() => true)

    const { result } = renderHook(() => useBreakpoint())

    expect(result.current.sm).toBe(true)
    expect(result.current.md).toBe(false)
    expect(result.current.lg).toBe(true)
    expect(result.current.xl).toBe(false)
    expect(result.current.xxl).toBe(true)
  })
})
