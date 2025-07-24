import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router"
import { describe, expect, it } from "vitest"
import { store } from "../../store"
import HorizontalCard from "./horizontal-card"

const mockArticle = {
  url: "https://example.com/news",
  urlToImage: "https://example.com/image.jpg",
  title: "Example News Title",
  description: "Example news description.",
  publishedAt: "05-07-2025",
  source: { name: "Example Source", id: "example-source" },
  author: "John Doe",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quaerat nisi unde repudiandae perspiciatis velit illum similique voluptate vero ducimus quibusdam numquam, at, aut incidunt culpa dolores provident consectetur a iste. Aut perferendis asperiores porro mollitia eligendi id sint sit unde. Iure id quis quas, quaerat autem ea laborum suscipit?",
}

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>
  )
}

describe("HorizontalCard", () => {
  it("renders article data correctly", () => {
    const { getByText, getByRole } = renderWithProviders(
      <HorizontalCard article={mockArticle} />
    )

    expect(getByText(mockArticle.title)).toBeInTheDocument()
    expect(getByText(mockArticle.description)).toBeInTheDocument()
    expect(getByText(/Example Source/)).toBeInTheDocument()

    const image = getByRole("img")
    expect(image).toHaveAttribute("src", mockArticle.urlToImage)
  })

  it("renders with custom className", () => {
    const customClass = "custom-card-class"
    const { container } = renderWithProviders(
      <HorizontalCard article={mockArticle} className={customClass} />
    )

    const linkElement = container.querySelector("a")
    expect(linkElement).toHaveClass(customClass)
  })

  it("creates correct link path", () => {
    const { container } = renderWithProviders(
      <HorizontalCard article={mockArticle} />
    )

    const linkElement = container.querySelector("a")
    expect(linkElement).toHaveAttribute(
      "href",
      "/article?slug=example-news-title"
    )
  })
})
