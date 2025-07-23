import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { describe, expect, it } from "vitest"
import { ProtectedRoute } from "."

describe("ProtectedRoute", () => {
  it("renders children when authenticated", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    )
    expect(getByText("Protected Content")).toBeInTheDocument()
  })
})
