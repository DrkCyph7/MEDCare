"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar, Clock, Award, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function HeroSection() {
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-blue-500/20 to-blue-600/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/25 rounded-full blur-xl animate-pulse delay-500"></div>

        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0 400C240 300 480 200 720 250C960 300 1200 450 1440 350V800H0V400Z"
            fill="url(#gradient)"
            fillOpacity="0.6"
            className="animate-pulse"
          />
          <path
            d="M0 500C300 400 600 300 900 350C1200 400 1350 500 1440 450V800H0V500Z"
            fill="url(#gradient2)"
            fillOpacity="0.4"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-screen py-16 sm:py-20">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Award className="h-3 sm:h-4 w-3 sm:w-4 text-primary" />
              <span>25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 sm:h-4 w-3 sm:w-4 text-primary" />
              <span>50,000+ Patients</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground text-balance leading-tight">
            The Best <br />
            <span className="text-primary bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Medical Services
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg text-pretty leading-relaxed">
            Experience exceptional healthcare with our advanced facilities, experienced doctors, and patient-first
            approach. Your health is our priority with comprehensive medical care.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              className="flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 lg:py-6 hover:scale-105 transition-transform bg-primary hover:bg-primary/90 w-full sm:w-auto"
            >
              Learn More
            </Button>
            <Link href="/book-appointment">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 lg:py-6 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto bg-transparent"
              >
                <Calendar className="h-4 sm:h-5 w-4 sm:w-5" />
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative animate-fade-in-delay order-1 lg:order-2">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/medical-hero.jpg"
              alt="Professional medical team examining X-ray - trusted healthcare providers"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Floating stats cards */}
          <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border animate-bounce-slow">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">24/7 Available</p>
                <p className="text-xs text-muted-foreground">Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white/95 backdrop-blur-sm border-t mt-auto">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Opening Hours */}
            <div className="glass-card p-4 sm:p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Opening Hours</h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Thursday</span>
                  <span className="font-medium">8:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Friday</span>
                  <span className="font-medium">8:00 - 18:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-red-500">Emergency Only</span>
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="glass-card p-4 sm:p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <Phone className="h-5 w-5 text-red-500" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Emergency</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">24/7 Emergency Hotline</p>
              <Button className="w-full bg-red-500 hover:bg-red-600 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Phone className="h-4 w-4" />
                +1 (555) 911-HELP
              </Button>
            </div>

            {/* Make an Appointment */}
            <div className="glass-card p-4 sm:p-6 rounded-xl sm:col-span-2 lg:col-span-1 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Quick Appointment</h3>
              </div>
              <div className="space-y-3">
                <select
                  className="w-full p-2 sm:p-3 border rounded-lg text-xs sm:text-sm bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="">Select Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="neurology">Neurology</option>
                </select>
                <select
                  className="w-full p-2 sm:p-3 border rounded-lg text-xs sm:text-sm bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                >
                  <option value="">Select Doctor</option>
                  <option value="dr-smith">Dr. Smith</option>
                  <option value="dr-johnson">Dr. Johnson</option>
                  <option value="dr-williams">Dr. Williams</option>
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="p-2 sm:p-3 border rounded-lg text-xs sm:text-sm bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="p-2 sm:p-3 border rounded-lg text-xs sm:text-sm bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <Link href="/book-appointment">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-xs sm:text-sm">
                    Book Full Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
