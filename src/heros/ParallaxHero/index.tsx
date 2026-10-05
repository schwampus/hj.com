'use client'
import React, { useEffect, useRef } from 'react'
type Layer = { src: string; depth: number }

const layers: Layer[] = [
  { src: 'public/media/hero/bg.png', depth: 10 },
  { src: 'public/media/hero/midbg.png', depth: 25 },
  { src: 'public/media/hero/subject.png', depth: 45 },
  { src: 'public/media/hero/fg.png', depth: 80 },
]

export const ParallaxHero: React.FC = () => {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    //todo 1: create 'target' and 'current' objects both x:0 , y:0,      })
    //todo 2: mousemove on target      })
    //todo 3: an animationloop with requestAnimationFrame that eases 'current' towards 'target' and moves each layer    })
    //todo 4: return a cleanup function the listener and cancels the animation frame   })
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {layers.map((layer, i) => (
        <div
          key={layer.src}
          ref={(el) => {
            layerRefs.current[i] = el
          }}
          className="absolute -inset-[5%] will-change-transform"
        >
          {/*todo 5:
         an img that fills this div (object-cover)  */}
        </div>
      ))}
    </section>
  )
}
