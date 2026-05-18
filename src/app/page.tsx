import { User } from "lucide-react"
export default function Home() {
  return (
    <>
      <div className="relative h-screen blur-xs">
        <video
          className="inset-0 w-full h-full object-cover "
          src="/videos/_1_1472600621151420416.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <span className="absolute bg-white rounded-4xl w-10 h-10 opacity-70">
        <User className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </span>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className='font-bold text-white italic text-center text-9xl ' >RANT BIGINER</h1>
        <p className="text-center text-2xl text-white">ーVALORANT初心者のためのサイトー</p>
        <button className="text-center bg-blue-600 text-red-600 rounded-lg w-15 h-10 mix-blend-screen">始める</button>
      </div>
    </>
  );
}
