export const Video = () =>{
  return(
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
  )
}