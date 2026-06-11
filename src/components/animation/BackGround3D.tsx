"use client"

import { useAnimationFrame } from "motion/react"
import { useRef } from "react"


const LAYERS = 18
const THICKNESS = 36  
const STEP = THICKNESS / (LAYERS - 1)

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
            <path
                fill="currentColor"
                d="M23.792 2.152a.252.252 0 0 0-.098.083c-3.384 4.23-6.769 8.46-10.15 12.69c-.107.093-.025.288.119.265c2.439.003 4.877 0 7.316.001a.66.66 0 0 0 .552-.25c.774-.967 1.55-1.934 2.324-2.903a.72.72 0 0 0 .144-.49c-.002-3.077 0-6.153-.003-9.23c.016-.11-.1-.206-.204-.167zM.077 2.166c-.077.038-.074.132-.076.205c.002 3.074.001 6.15.001 9.225a.679.679 0 0 0 .158.463l7.64 9.55c.12.152.308.25.505.247c2.455 0 4.91.003 7.365 0c.142.02.222-.174.116-.265C10.661 15.176 5.526 8.766.4 2.35c-.08-.094-.174-.272-.322-.184z"
            />
        </svg>
    )
}

export default function Background3DIcon() {
    const ref = useRef<HTMLDivElement>(null)

    useAnimationFrame((t) => {
        if (!ref.current) return
        const rotateY = (t / 40) % 360           
        const rotateX = Math.sin(t / 3000) * 18  
        ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    const mid = (LAYERS - 1) / 2

    return (
        <div className="bg3d-container" aria-hidden>
            <div className="bg3d-scene">
                <div className="bg3d-icon" ref={ref}>
                    {Array.from({ length: LAYERS }).map((_, i) => {
                        const z = (i - mid) * STEP
                        const edge = Math.abs(i - mid) / mid       
                        const lightness = 35 + edge * 35           
                        return (
                            <div
                                key={i}
                                className="bg3d-layer"
                                style={{
                                    transform: `translateZ(${z}px)`,
                                    color: `hsl(210 0% ${lightness}%)`,
                                }}
                            >
                                <Icon />
                            </div>
                        )
                    })}
                </div>
            </div>
            <StyleSheet />
        </div>
    )
}

function StyleSheet() {
    return (
        <style>{`
            .bg3d-container {
                position: fixed;
                inset: 0;
                z-index: -1;           
                display: flex;
                align-items: center;
                justify-content: center;
                pointer-events: none;   
                overflow: hidden;
                background: #0a0a0a;    
            }
            .bg3d-scene {
                perspective: 1200px;
                width: 600px;
                height: 600px;
            }
            .bg3d-icon {
                width: 100%;
                height: 100%;
                position: relative;
                transform-style: preserve-3d;
            }
            .bg3d-layer {
                position: absolute;
                inset: 0;
                transform-style: preserve-3d;
            }
        `}</style>
    )
}