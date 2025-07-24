import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { Outlet } from "react-router"
import { Loader } from "../components"
import { useToastMessage } from "../hooks/useToastMessage"
import Footer from "./footer"
import Header from "./header"

export default function MainLayout() {
  const toast = useToastMessage()

  return (
    <div className="h-screen w-full">
      {toast}
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
