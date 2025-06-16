"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ErrorNotificationProps {
  message?: string
  onDismiss?: () => void
  autoHideDuration?: number
}

export function ErrorNotification({
  message = "An error occurred",
  onDismiss,
  autoHideDuration = 5000,
}: ErrorNotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (autoHideDuration > 0) {
      const timer = setTimeout(() => {
        handleDismiss()
      }, autoHideDuration)

      return () => clearTimeout(timer)
    }
  }, [autoHideDuration])

  const handleDismiss = () => {
    setIsVisible(false)
    if (onDismiss) onDismiss()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 z-[9999] flex items-center gap-2 rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground shadow-lg"
        >
          <AlertCircle className="h-4 w-4" />
          <span>{message}</span>
          <button
            onClick={handleDismiss}
            className="ml-2 rounded-full p-1 hover:bg-destructive-foreground/10"
            aria-label="Dismiss error"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Global error handling
export function useErrorHandler() {
  const [errors, setErrors] = useState<string[]>([])

  const addError = (message: string) => {
    setErrors((prev) => [...prev, message])
  }

  const removeError = (index: number) => {
    setErrors((prev) => prev.filter((_, i) => i !== index))
  }

  const clearAllErrors = () => {
    setErrors([])
  }

  // Prevent errors from external scripts or resources
  useEffect(() => {
    const originalConsoleError = console.error
    const originalWindowError = window.onerror

    // Override console.error
    console.error = (...args) => {
      // Still log to console but don't show UI notification for certain errors
      originalConsoleError(...args)

      // Filter out known third-party errors that can be ignored
      const errorString = args.join(" ")
      if (
        !errorString.includes("ResizeObserver") &&
        !errorString.includes("hydration") &&
        !errorString.includes("Minified React error")
      ) {
        addError("An error occurred in the application")
      }
    }

    // Handle window errors
    window.onerror = (message, source, lineno, colno, error) => {
      if (originalWindowError) {
        originalWindowError(message, source, lineno, colno, error)
      }

      // Don't show UI notifications for script errors from extensions or third parties
      if (source && source.includes(window.location.origin)) {
        addError("An unexpected error occurred")
      }

      return true // Prevents default error handling
    }

    return () => {
      console.error = originalConsoleError
      window.onerror = originalWindowError
    }
  }, [])

  return { errors, addError, removeError, clearAllErrors }
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const { errors, removeError } = useErrorHandler()

  return (
    <>
      {children}

      {/* Render error notifications */}
      {errors.map((error, index) => (
        <ErrorNotification key={`error-${index}`} message={error} onDismiss={() => removeError(index)} />
      ))}
    </>
  )
}

