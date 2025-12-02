"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar, Heart } from "lucide-react"
import { SearchBar } from "./search-bar"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Link
              href="/"
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary flex items-center gap-1.5 sm:gap-2"
            >
              <div className="w-5 sm:w-6 md:w-7 lg:w-8 h-5 sm:h-6 md:h-7 lg:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-2.5 sm:w-3 md:w-3.5 lg:w-4 h-2.5 sm:h-3 md:h-3.5 lg:h-4 text-white fill-white" />
              </div>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight">
                MED<span className="text-blue-600">Care</span>
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center flex-1 max-w-xs lg:max-w-sm xl:max-w-md mx-2 lg:mx-4 xl:mx-8">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1.5 md:space-x-2 lg:space-x-3 xl:space-x-4 2xl:space-x-6">
              <Link
                href="/"
                className="text-xs md:text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap px-2 md:px-2.5 lg:px-3 py-1.5 md:py-2 rounded-md hover:bg-primary/5 min-h-[36px] flex items-center"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-xs md:text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap px-2 md:px-2.5 lg:px-3 py-1.5 md:py-2 rounded-md hover:bg-primary/5 min-h-[36px] flex items-center"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-xs md:text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap px-2 md:px-2.5 lg:px-3 py-1.5 md:py-2 rounded-md hover:bg-primary/5 min-h-[36px] flex items-center"
              >
                Services
              </Link>
              <Link
                href="/doctors"
                className="text-xs md:text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap px-2 md:px-2.5 lg:px-3 py-1.5 md:py-2 rounded-md hover:bg-primary/5 min-h-[36px] flex items-center"
              >
                Doctors
              </Link>
              <Link
                href="/news"
                className="text-xs md:text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap px-2 md:px-2.5 lg:px-3 py-1.5 md:py-2 rounded-md hover:bg-primary/5 min-h-[36px] flex items-center"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="text-xs md:text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap px-2 md:px-2.5 lg:px-3 py-1.5 md:py-2 rounded-md hover:bg-primary/5 min-h-[36px] flex items-center"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1.5 lg:gap-2 text-xs md:text-sm px-2.5 md:px-3 lg:px-4 py-2 hover:bg-primary hover:text-white transition-colors bg-transparent min-h-[40px]"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">+1 (555) 123-4567</span>
              <span className="lg:hidden">Call</span>
            </Button>
            <Link href="/book-appointment">
              <Button
                size="sm"
                className="flex items-center gap-1.5 lg:gap-2 text-xs md:text-sm px-2.5 md:px-3 lg:px-4 py-2 bg-primary hover:bg-primary/90 min-h-[40px]"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden lg:inline">Book Appointment</span>
                <span className="lg:hidden">Book</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2 -mr-2 rounded-md hover:bg-primary/5 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border/10 animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2 rounded-lg mx-2">
              {/* Mobile Search */}
              <div className="px-3 py-2 lg:hidden">
                <SearchBar />
              </div>

              {/* Mobile Navigation Links */}
              <Link
                href="/"
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/doctors"
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Doctors
              </Link>
              <Link
                href="/news"
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 px-3 py-4 border-t border-border/10 mt-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center gap-2 bg-transparent w-full hover:bg-primary hover:text-white transition-colors min-h-[48px] text-base"
                >
                  <Phone className="h-5 w-5" />
                  +1 (555) 123-4567
                </Button>
                <Link href="/book-appointment" onClick={() => setIsOpen(false)} className="w-full">
                  <Button
                    size="lg"
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 min-h-[48px] text-base"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
