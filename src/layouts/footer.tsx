import dayjs from "dayjs"
import { Link } from "react-router"
import { navItems } from "../constant"

export default function Footer() {
  return (
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
  )
}
