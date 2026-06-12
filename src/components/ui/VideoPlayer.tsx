"use client"

import { useState } from 'react'
import ReactPlayer from 'react-player'

type Props = {
    src: string | null
}

export const VideoPlayer = ({ src }: Props) => {
    const [settings, setSettings] = useState({
        playbackRate: 1.0,  
        volume: 1.0,        
        muted: false        
    })
    const videoURL = src

    const handleRateChange = (event: React.SyntheticEvent<HTMLVideoElement>) => {
        setSettings(prev => ({
            ...prev,
            playbackRate: event.currentTarget.playbackRate
        }))
    }

  
    const handleVolumeChange = (event: React.SyntheticEvent<HTMLVideoElement>) => {
        setSettings(prev => ({
            ...prev,
            muted: event.currentTarget.muted,  
            volume: event.currentTarget.volume 
        }))
    }

    return (
        <>
        {videoURL ? (
        <ReactPlayer
            src={ videoURL }
            width="100%"
            height="100%"
            controls={true}
            playbackRate={settings.playbackRate}
            volume={settings.volume}
            muted={settings.muted}
            onRateChange={handleRateChange}
            onVolumeChange={handleVolumeChange}
        />
    ):(<h1 className=''>動画情報を取得できませんでした。</h1>)
}
</>
    )
}