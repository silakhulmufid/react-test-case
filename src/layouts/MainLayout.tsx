import { SearchOutlined } from "@ant-design/icons"
import { Analytics } from "@vercel/analytics/react"
import { Input } from "antd"
import classnames from "classnames"
import dayjs from "dayjs"
import { Suspense, useState } from "react"
import { Link, Outlet, useNavigate, useParams } from "react-router"
import { Loader } from "../components"
import { useAppDispatch } from "../store/hooks"
import { getNews } from "../store/news/action"

export default function MainLayout() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>("")
  const dispatch = useAppDispatch()

  const navItems = [
    { label: "News", path: "/" },
    { label: "Business", path: "/business" },
    { label: "Entertainment", path: "/entertainment" },
    { label: "Health", path: "/health" },
    { label: "Science", path: "/science" },
    { label: "Sports", path: "/sports" },
    { label: "Technology", path: "/technology" },
  ]

  const activePath = (path: string): boolean => {
    if (!category) return path === "/"
    return category === path.replace("/", "")
  }

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = (e.target as HTMLFormElement).querySelector("input")
    if (input) {
      navigate(`/search?q=${input.value}`)
      dispatch(
        getNews({
          q: input.value,
          from: dayjs().subtract(20, "day").format("YYYY-MM-DD"),
          to: dayjs().format("YYYY-MM-DD"),
          sortBy: "publishedAt",
          pageSize: 10,
          page: 1,
        })
      )
    }
  }

  return (
    <div className="h-screen w-full">
      <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-gray-200 px-4 py-4 md:px-20">
        <Link to="/" className="text-2xl font-extrabold">
          MFD
        </Link>
        <nav className="hidden gap-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={classnames("rounded px-4 py-1", {
                "border-b-2 border-blue-500 bg-blue-500 text-white hover:text-white":
                  activePath(item.path),
                "text-gray-700 hover:bg-gray-300 hover:text-gray-700":
                  !activePath(item.path),
              })}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="relative">
          <form onSubmit={onSearch} className="flex items-center">
            <Input
              value={searchValue}
              placeholder={openSearch ? "Search news..." : ""}
              onChange={(e) => setSearchValue(e.target.value)}
              onPointerLeave={(e) => {
                ;(e.target as HTMLInputElement).blur()
                setOpenSearch(false)
                setSearchValue("")
              }}
              size="large"
              className={classnames("ant-input-search close-search", {
                "w-64": openSearch,
                "w-10": !openSearch,
              })}
            />
          </form>
          <div
            className={classnames(
              "absolute flex h-full items-center justify-center",
              {
                "right-0 top-0 pr-3": openSearch,
                "inset-0": !openSearch,
              }
            )}
          >
            <button onClick={() => setOpenSearch(!openSearch)}>
              <SearchOutlined size={20} />
            </button>
          </div>
        </div>
      </header>
      <main className="flex min-h-screen w-full justify-center">
        <Suspense fallback={<Loader />}>
          <Outlet />
          <Analytics />
        </Suspense>
      </main>
      <footer className="flex h-72 flex-col justify-between gap-6 bg-gray-800 px-4 pb-6 pt-12 text-white md:px-20">
        <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <Link to="/" className="text-2xl font-extrabold">
            MFD
          </Link>
          <div className="flex flex-wrap gap-4 border-y-[1px] py-2 md:flex-nowrap">
            {navItems.map((item, i) => (
              <Link key={i} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-1 text-xs">
          <span>{`© ${dayjs().year()} by`}</span>
          <Link to="https://muvidef.my.id" className="underline">
            mufidev.
          </Link>
          <span>All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}
