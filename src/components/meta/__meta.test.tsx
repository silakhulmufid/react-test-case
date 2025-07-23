import { render, waitFor } from "@testing-library/react"
import { HelmetProvider } from "react-helmet-async"
import { describe, expect, it } from "vitest"
import { Meta } from "."

describe("Meta", () => {
  it("renders meta tags with correct props", async () => {
    const props = {
      title: "Test Title",
      description: "Test Description",
      image: "test-image.png",
    }

    render(
      <HelmetProvider>
        <Meta {...props} />
      </HelmetProvider>
    )

    // Wait for title to update
    await waitFor(() => {
      expect(document.title).toBe(props.title)
    })

    // Check meta tags
    const description = document.querySelector('meta[name="description"]')
    expect(description).toHaveAttribute("content", props.description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    expect(ogTitle).toHaveAttribute("content", props.title)

    const ogImage = document.querySelector('meta[property="og:image"]')
    expect(ogImage).toHaveAttribute("content", props.image)

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    expect(twitterCard).toHaveAttribute("content", "summary_large_image")
  })
})
