"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

const stats: Stat[] = [
  { value: 500, label: "Clients Served", prefix: "+" },
  { value: 15, label: "Years Experience", prefix: "" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 24, label: "Support", suffix: "/7" },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView])

  return (
    <section className="py-16 bg-black text-primary-foreground">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={hasAnimated ? { scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1,
                }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </motion.div>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

