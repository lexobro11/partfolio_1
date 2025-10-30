import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
// import { I18nProvider } from "@/lib/i18n.tsx" // Olib tashlandi

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "G'iyos-Technoid | Professional Web Dasturchi",
  description:
    "HTML, CSS, JavaScript, TypeScript va React/TSX texnologiyalarida tajribali web dasturchi. Zamonaviy va responsive web saytlar yaratishga ixtisoslashganman. G'iyos-Technoid portfoliosi.",
  keywords: [
    "G'iyos-Technoid",
    "Web Dasturchi",
    "Frontend Dasturchi",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "O'zbekiston",
    "Xorazm",
  ],
  authors: [{ name: "G'iyos-Technoid" }],
  creator: "G'iyos-Technoid",
  openGraph: {
    title: "G'iyos-Technoid | Professional Web Dasturchi",
    description:
      "HTML, CSS, JavaScript, TypeScript va React/TSX texnologiyalarida tajribali web dasturchi. Zamonaviy va responsive web saytlar yaratishga ixtisoslashganman.",
    url: "https://your-portfolio-url.com", // Bu URLni yangilang
    siteName: "G'iyos-Technoid Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg", // OG rasmini yarating
        width: 1200,
        height: 630,
        alt: "G'iyos-Technoid Portfolio",
      },
    ],
    locale: "uz_UZ", // O'zbekcha locale
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G'iyos-Technoid | Professional Web Dasturchi",
    description:
      "HTML, CSS, JavaScript, TypeScript va React/TSX texnologiyalarida tajribali web dasturchi. Zamonaviy va responsive web saytlar yaratishga ixtisoslashganman.",
    creator: "@yourtwitterhandle", // Buni yangilang
    images: ["https://your-portfolio-url.com/twitter-image.jpg"], // Twitter rasmini yarating
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      {" "}
      {/* Tilni 'uz' ga o'zgartirildi */}
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* <I18nProvider>{children}</I18nProvider> */} {/* Olib tashlandi */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
