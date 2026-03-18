"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the shape of your translations
interface Translations {
  [key: string]: any
}

// Define the shape of the i18n context
interface I18nContextType {
  locale: string
  setLocale: (locale: string) => void
  t: (key: string, fallback?: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<string>("uz") // Default to Uzbek
  const [translations, setTranslations] = useState<Translations>({})

  useEffect(() => {
    async function loadTranslations() {
      const url = `/locales/${locale}.json`
      console.log(`Attempting to load translations from: ${url}`) // Debugging log
      try {
        const response = await fetch(url)
        if (!response.ok) {
          // If response is not OK (e.g., 404), throw an error with status
          const errorText = await response.text() // Get response body for more info
          throw new Error(`HTTP error! Status: ${response.status}, Body: ${errorText.substring(0, 100)}...`)
        }
        const data = await response.json()
        setTranslations(data)
        console.log(`Translations for ${locale} loaded successfully.`)
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error)
        setTranslations({}) // Fallback to empty translations on error
      }
    }
    loadTranslations()
  }, [locale])

  const t = (key: string, fallback?: string): string => {
    const keys = key.split(".")
    let current: any = translations
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k]
      } else {
        return fallback || key // Return key itself if not found
      }
    }
    return typeof current === "string" ? current : fallback || key
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within an I18nProvider")
  }
  return context
}
