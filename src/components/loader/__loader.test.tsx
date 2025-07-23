import { render } from "@testing-library/react"
import { expect, test } from "vitest"
import { Loader } from "."

test("renders loader component", () => {
  const { container } = render(<Loader />)

  expect(container.querySelectorAll("span").length).toBeGreaterThan(0)
})
