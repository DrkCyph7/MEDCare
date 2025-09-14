import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MEDArt - The Best Medical Services | Professional Healthcare",
  description:
    "Experience the best medical services with MEDArt. Professional healthcare with advanced facilities, experienced doctors, and patient-first approach. Book appointments online, emergency care available 24/7.",
  keywords:
    "medical services, healthcare, doctors, hospital, emergency care, appointment booking, cardiology, pediatrics, diagnostics, telemedicine",
  authors: [{ name: "MEDArt Medical Center" }],
  creator: "MEDArt",
  publisher: "MEDArt Medical Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://medart-medical.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MEDArt - The Best Medical Services",
    description:
      "Professional healthcare with advanced facilities and experienced doctors. Your health is our priority.",
    url: "https://medart-medical.com",
    siteName: "MEDArt Medical Center",
    images: [
      {
        url: "/images/medical-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MEDArt Medical Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEDArt - The Best Medical Services",
    description: "Professional healthcare with advanced facilities and experienced doctors.",
    images: ["/images/medical-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
