export default function Home() {
  return (
    <>
    <button className="flex justify-self-end font-bold text-white">ログイン</button>
      <div className="h-screeen blur-xs">
        <video
          className="inset-0 w-full h-full object-cover "
          src="/videos/_1_1472600621151420416.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="absolute ">
        <h1 className='font-bold text-white italic text-center text-9xl ' >RANT BIGINER</h1>
        <p className="text-center text-2xl text-white">ーVALORANT初心者のためのサイトー</p>
        <button className="text-center bg-blue-600 text-red-600 rounded-lg w-15 h-10 mix-blend-screen">始める</button>
      </div>
    </>
  );
}
