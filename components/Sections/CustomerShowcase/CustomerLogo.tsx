"use client"

import { useCallback, useEffect, useMemo, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import customers from "@/lib/customerLogo"

const GROUP_SIZE = 8
type Logo = (typeof customers)[number]

export default function CustomerLogo() {
    const [currentGroup, setCurrentGroup] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const customerGroups = useMemo(() => {
        return Array.from(
            {
                length: Math.ceil(customers.length / GROUP_SIZE),
            },
            (_, index) =>
                customers.slice(
                    index * GROUP_SIZE,
                    index * GROUP_SIZE + GROUP_SIZE
                )
        )
    }, [])

    const startAnimation = useCallback(() => {
        if (intervalRef.current) return

        intervalRef.current = setInterval(() => {
            setIsTransitioning(true)

            setTimeout(() => {
                setCurrentGroup((current) =>
                    (current + 1) % customerGroups.length
                )
            }, 300)

            setTimeout(() => {
                setIsTransitioning(false)
            }, 600)
        }, 3500)
    }, [customerGroups.length])

    const stopAnimation = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }, [])

    useEffect(() => {
        startAnimation()

        return () => {
            stopAnimation()
        }
    }, [startAnimation, stopAnimation])

    const currentCustomers = customerGroups[currentGroup]

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3">
            {currentCustomers.map((customer, index) => (
                <CustomerCard
                    key={index}
                    customer={customer}
                    isTransitioning={isTransitioning}
                    onMouseEnter={stopAnimation}
                    onMouseLeave={startAnimation}
                />
            ))}
        </div>
    )
}


function CustomerCard({ customer, isTransitioning, onMouseEnter, onMouseLeave }:
    { customer: Logo, isTransitioning: boolean, onMouseEnter: () => void, onMouseLeave: () => void }) {
    return (
        <div onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} className="relative flex items-center justify-center aspect-163/104 lg:aspect-160/155 overflow-hidden isolate border border-[#ffffff14] rounded-md bg-[#ffffff12] hover:bg-[#ffffff18]">
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                    opacity: isTransitioning ? 0 : 1,
                    scale: isTransitioning ? 0.96 : 1,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            >
                <ShowLogo customer={customer} />
            </motion.div>

            <motion.div
                className="pointer-events-none absolute inset-0 bg-[#ffffff12]"
                animate={{
                    opacity: isTransitioning ? 0.72 : 0,
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            />
        </div>
    )
}

function ShowLogo({ customer }: { customer: Logo }) {
    if (customer.type === "image") {
        return (
            <div className="flex items-center justify-center [&>svg]:max-w-30 [&>svg]:w-auto [&>svg]:h-6">
                <Image
                    src={customer.src}
                    alt={customer.name}
                    width="120"
                    height="24"
                    className="h-6 w-auto max-w-30"
                />
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center [&>svg]:max-w-30 [&>svg]:w-auto [&>svg]:h-6"
            dangerouslySetInnerHTML={{
                __html: customer.src,
            }}
        />
    )
}