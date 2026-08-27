"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"

type Agent = {
    heading: string
    detail: string
}

const text: Agent[] = [
    {
        heading: "Search requests",
        detail: "132,267",
    },
    {
        heading: "API requests",
        detail: "22,993",
    },
    {
        heading: "Fallback provided",
        detail: "3,368",
    },
    {
        heading: "Content updates",
        detail: "22,130",
    },
    {
        heading: "Pages read",
        detail: "10,765,136",
    },
]

export default function AgentSection() {
    const controls = useAnimationControls()

    const startMarquee = () => {
        controls.start({
            x: "-50%",
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            },
        })
    }

    useEffect(() => {
        startMarquee()

        return () => {
            controls.stop()
        }
    }, [])

    return (
        <div className="relative overflow-hidden"
            onMouseEnter={() => controls.stop()}
            onMouseLeave={startMarquee}
        >
            <motion.div
                className="flex w-max gap-8"
                animate={controls}
            >
                <div className="flex shrink-0 items-center gap-8">
                    {text.map((t, index) => (
                        <AgentItem
                            key={`first-${index}`}
                            agent={t}
                        />
                    ))}
                </div>

                <div className="flex shrink-0 items-center gap-8">
                    {text.map((t, index) => (
                        <AgentItem
                            key={`second-${index}`}
                            agent={t}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

function AgentItem({ agent }: { agent: Agent }) {
    return (
        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap font-medium text-xs/4">
            <p className="text-[#ffffff99]">{agent.heading}</p>

            <span className="rounded-xs bg-[#1fa77a14] px-2 py-1 text-[#18e299]">{agent.detail}</span>
        </div>
    )
}