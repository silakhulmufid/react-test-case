import { lazy } from "react"
import type { RouteObject } from "react-router"
import MainLayout from "../layouts/main-layout"

const Home = lazy(() => import("../pages/home"))
const Article = lazy(() => import("../pages/article"))
const Search = lazy(() => import("../pages/search"))
const NotFound = lazy(() => import("../pages/not-found"))

export const PublicRoute: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/article", element: <Article /> },
      { path: "/:category", element: <Home /> },
    ],
  },
]

export const PrivateRoute: RouteObject[] = []

export const NotFoundRoute: RouteObject = {
  path: "*",
  element: <NotFound />,
}
