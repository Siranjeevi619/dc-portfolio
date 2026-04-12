import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Arima } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const arima = Arima({ subsets: ["latin", "tamil"], weight: ["400", "700"], variable: "--font-arima" })

export const metadata: Metadata = {
  title: "Dr. Jothi Prakash V | Professor & Researcher",
  description: "Portfolio of Dr. Jothi Prakash V - Assistant Professor specializing in AI, Deep Learning, and NLP",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${arima.variable}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
