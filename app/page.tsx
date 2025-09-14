import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InsuranceSection } from "@/components/insurance-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MEDArt - The Best Medical Services | Professional Healthcare",
  description:
    "Experience the best medical services with MEDArt. Professional healthcare with advanced facilities, experienced doctors, and patient-first approach. Book appointments online, emergency care available 24/7.",
  openGraph: {
    title: "MEDArt - The Best Medical Services",
    description:
      "Professional healthcare with advanced facilities and experienced doctors. Your health is our priority.",
    images: ["/images/medical-hero.jpg"],
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <InsuranceSection />
      <Footer />
    </main>
  )
}
