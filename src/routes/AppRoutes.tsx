import { Suspense } from "react"
import { Route, Routes } from "react-router"
import { Loader, NavigationHandler, ProtectedRoute } from "../components"
import { NotFoundRoute, PrivateRoute, PublicRoute } from "./routes"

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <NavigationHandler />
      <Routes>
        {/* Public Routes */}
        {PublicRoute.map(
          ({ path: path1, element: element1, children: children1 }, i1) => (
            <Route key={i1} path={path1} element={element1}>
              {children1?.map(
                (
                  { path: path2, element: element2, children: children2 },
                  i2
                ) => (
                  <Route key={i2} path={path2} element={element2}>
                    {children2?.map(
                      (
                        { path: path3, element: element3, children: children3 },
                        i3
                      ) => (
                        <Route key={i3} path={path3} element={element3}>
                          {children3?.map(
                            ({ path: path4, element: element4 }, i4) => (
                              <Route key={i4} path={path4} element={element4} />
                            )
                          )}
                        </Route>
                      )
                    )}
                  </Route>
                )
              )}
            </Route>
          )
        )}

        {/* Private Routes */}
        {PrivateRoute.map(({ path, element }, i) => (
          <Route
            key={i}
            path={path}
            element={<ProtectedRoute>{element!}</ProtectedRoute>}
          />
        ))}

        {/* Not Found */}
        <Route path={NotFoundRoute.path} element={NotFoundRoute.element} />
      </Routes>
    </Suspense>
  )
}
