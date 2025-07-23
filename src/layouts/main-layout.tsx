import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { Outlet } from "react-router"
import { Loader } from "../components"
import Footer from "./footer"
import Header from "./header"

export default function MainLayout() {
  return (
    <div className="h-screen w-full">
      <Header />
      <main className="flex min-h-screen w-full justify-center">
        <Suspense fallback={<Loader />}>
          <Outlet />
          <Analytics />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
