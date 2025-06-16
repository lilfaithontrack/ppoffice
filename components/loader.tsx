"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PreloaderProps {
  className?: string
  timeout?: number
}

export default function Preloader({ className, timeout = 3000 }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, timeout)

    return () => clearTimeout(timer)
  }, [timeout])

  if (!isLoading) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-950",
        className,
      )}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute h-16 w-16 rounded-full border-4 border-black dark:border-white"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-16 w-16 rounded-full border-4 border-t-transparent border-gray-800 dark:border-gray-200"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-xl font-medium text-black dark:text-white"
      >
        Power Platform Office
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-2 text-sm text-gray-700 dark:text-gray-300"
      >
        Loading resources...
      </motion.div>
    </div>
  )
}

