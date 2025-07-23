import { useMediaQuery } from "react-responsive"
import { ScaleLoader } from "react-spinners"

export function Loader() {
  const md = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <ScaleLoader
        height={md ? 100 : 50}
        width={md ? 8 : 4}
        barCount={8}
        color="#000"
      />
    </div>
  )
}

export default Loader
