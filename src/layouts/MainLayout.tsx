import { Analytics } from "@vercel/analytics/react";
import { Suspense, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router";
import { Loader } from "../components";
import { Input } from "antd";
import classnames from "classnames";
import { SearchOutlined } from "@ant-design/icons";
import { getNews } from "../store/news/action";
import { useAppDispatch } from "../store/hooks";
import dayjs from "dayjs";

export default function MainLayout() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const navItems = [
    { label: "News", path: "/" },
    { label: "Business", path: "/business" },
    { label: "Entertainment", path: "/entertainment" },
    { label: "Health", path: "/health" },
    { label: "Science", path: "/science" },
    { label: "Sports", path: "/sports" },
    { label: "Technology", path: "/technology" },
  ];

  const activePath = (path: string): boolean => {
    if (!category) return path === "/";
    return category === path.replace("/", "");
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector("input");
    if (input) {
      navigate(`/search?q=${input.value}`);
      dispatch(
        getNews({
          q: input.value,
          from: dayjs().subtract(20, "day").format("YYYY-MM-DD"),
          to: dayjs().format("YYYY-MM-DD"),
          sortBy: "publishedAt",
          pageSize: 10,
          page: 1,
        })
      );
    }
  };

  return (
    <div className="h-screen w-full">
      <header className="fixed top-0 left-0 w-full bg-gray-200 flex justify-between items-center px-4 md:px-20 py-4 z-10">
        <Link to="/" className="text-2xl font-extrabold">
          MFD
        </Link>
        <nav className="hidden lg:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={classnames("px-4 py-1 rounded", {
                "bg-blue-500 text-white border-b-2 border-blue-500 hover:text-white": activePath(
                  item.path
                ),
                "text-gray-700 hover:bg-gray-300 hover:text-gray-700": !activePath(
                  item.path
                ),
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
                (e.target as HTMLInputElement).blur();
                setOpenSearch(false);
                setSearchValue("");
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
              "absolute h-full flex justify-center items-center",
              {
                "top-0 right-0 pr-3": openSearch,
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
      <main className="min-h-screen w-full flex justify-center">
        <Suspense fallback={<Loader />}>
          <Outlet />
          <Analytics />
        </Suspense>
      </main>
      <footer className="flex flex-col justify-between gap-6 h-72 pt-12 pb-6 px-4 md:px-20 bg-gray-800 text-white">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm">
          <Link to="/" className="text-2xl font-extrabold">
            MFD
          </Link>
          <div className="flex flex-wrap md:flex-nowrap gap-4 border-y-[1px] py-2">
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
  );
}
