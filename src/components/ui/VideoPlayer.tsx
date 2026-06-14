"use client"
import ReactPlayer from 'react-player'
type Props = {
    src: string | null
}
export const VideoPlayer = ({ src }: Props) => {
    return (
        <>
        {src ? (
        <ReactPlayer
            src={`https://www.youtube.com/watch?v=${src}`}
            width="100%"
            height="100%"
            controls={true}
        />
    ):(<h1 className=''>動画情報を取得できませんでした。</h1>)
}
</>
    )
}