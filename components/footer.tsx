import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MedCare Plus</h3>
            <p className="text-background/80 mb-6 text-pretty leading-relaxed">
              Providing trusted medical care for every generation with advanced facilities and experienced healthcare
              professionals.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-background/80 hover:text-background transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-background/80 hover:text-background transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-background/80 hover:text-background transition-colors">
                  News & Health
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Medical Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/cardiology"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/services/neurology" className="text-background/80 hover:text-background transition-colors">
                  Neurology
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pediatrics"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ophthalmology"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Ophthalmology
                </Link>
              </li>
              <li>
                <Link
                  href="/services/primary-care"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Primary Care
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="text-background/80 hover:text-background transition-colors">
                  Emergency Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/80">123 Medical Center Drive</p>
                  <p className="text-background/80">Healthcare City, HC 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-background/80">(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-background/80">info@medcareplus.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/80">Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p className="text-background/80">Sat-Sun: 9:00 AM - 5:00 PM</p>
                  <p className="text-primary font-semibold">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/80">
            © 2024 MedCare Plus. All rights reserved. |
            <Link href="/privacy" className="hover:text-background transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-background transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
