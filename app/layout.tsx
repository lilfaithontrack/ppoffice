import type React from "react"
import "@/styles/globals.css"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { TopBar } from "@/components/top-bar"
import Footer from "@/components/footer"
import Preloader from "@/components/loader"
import { ErrorBoundary } from "@/components/error"

export const metadata = {
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <Preloader />
          <TopBar />
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <MobileNav />
              <MainNav />
            </div>
          </header>
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}

