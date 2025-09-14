import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import DoctorsPageClient from "./DoctorsPageClient"

export const metadata: Metadata = {
  title: "Our Medical Team - Expert Doctors & Specialists | MEDArt",
  description:
    "Meet our experienced physicians and specialists who provide exceptional healthcare with compassion and expertise. Find the right doctor for your medical needs.",
  keywords:
    "doctors, physicians, medical specialists, healthcare professionals, cardiology, pediatrics, neurology, ophthalmology, emergency medicine",
  openGraph: {
    title: "Our Medical Team - Expert Doctors & Specialists",
    description:
      "Meet our experienced physicians and specialists who provide exceptional healthcare with compassion and expertise.",
    type: "website",
    images: ["/images/medical-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Medical Team - Expert Doctors & Specialists",
    description: "Meet our experienced physicians and specialists who provide exceptional healthcare.",
  },
}

export default function DoctorsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DoctorsPageClient />
      <Footer />
    </main>
  )
}
