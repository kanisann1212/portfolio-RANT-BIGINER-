import type { midashiProps } from "@/types/type"
import Link from "next/link"


export const Midashi = ({ midashi, src, page }: midashiProps) => {
  return (
    <div className="h-full rounded-3xl ">
      <Link
        href={page}
        key={midashi}
        className='relative rounded-3xl block w-full'
        style={{
          backgroundImage:`url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "800px",
        }}
      >
        <h1 className="text-white text-8xl absolute bottom-4 left-2">{midashi}</h1>
      </Link>
    </div>
  )
}