import { describe, expect, it } from "vitest"
import { getTimeAgoString } from "./getTimeAgoString"

describe("getTimeAgoString", () => {
  it('returns "a few seconds ago" for current time', () => {
    const result = getTimeAgoString(new Date())
    expect(result).toMatch(/second|moment/)
  })

  it('returns "a day ago" for 1 day ago', () => {
    const oneDayAgo = new Date(Date.now() - 1000 * 60 * 60 * 24)
    const result = getTimeAgoString(oneDayAgo)
    expect(result).toMatch(/day/)
  })

  it("handles timestamp input", () => {
    const timestamp = Date.now() - 1000 * 60 * 60
    const result = getTimeAgoString(timestamp)
    expect(result).toMatch(/hour|minute|second/)
  })

  it("handles string date input", () => {
    const dateString = new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString()
    const result = getTimeAgoString(dateString)
    expect(result).toMatch(/hour|minute|second/)
  })
})
