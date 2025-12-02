"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, AlertTriangle, Send, Calendar, Car, Bus, NavigationIcon } from "lucide-react"

const emergencyNumbers = [
  {
    title: "Emergency Services",
    number: "911",
    description: "Life-threatening emergencies",
    available: "24/7",
  },
  {
    title: "Hospital Main Line",
    number: "(555) 123-4567",
    description: "General inquiries and appointments",
    available: "24/7",
  },
  {
    title: "Nurse Hotline",
    number: "(555) 123-NURSE",
    description: "Medical questions and advice",
    available: "24/7",
  },
  {
    title: "Poison Control",
    number: "1-800-222-1222",
    description: "Poison emergencies and information",
    available: "24/7",
  },
]

const departments = [
  "General Inquiry",
  "Appointment Scheduling",
  "Billing & Insurance",
  "Medical Records",
  "Patient Relations",
  "Emergency Services",
]

const workingHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM", type: "regular" },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM", type: "weekend" },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM", type: "weekend" },
  { day: "Emergency Department", hours: "24/7 - Always Open", type: "emergency" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, department: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in production, this would send to an API
    // For now, show success feedback
    alert('Thank you! Your message has been sent successfully. We\'ll get back to you soon.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      subject: '',
      message: '',
    })
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance px-2">Contact Us</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4">
              We're here to help with all your healthcare needs. Reach out to us for appointments, questions, or
              emergency assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-8 sm:py-12 bg-destructive text-destructive-foreground">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertTriangle className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Emergency Hotlines</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {emergencyNumbers.map((emergency, index) => (
              <Card key={index} className="bg-destructive-foreground text-destructive border-0">
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-lg mb-2">{emergency.title}</h3>
                  <p className="text-2xl font-bold text-destructive mb-2">{emergency.number}</p>
                  <p className="text-sm text-muted-foreground mb-1">{emergency.description}</p>
                  <p className="text-xs font-medium">{emergency.available}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept.toLowerCase().replace(/\s+/g, "-")}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Location & Hours */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    Location & Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Address</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>MedCare Plus Medical Center</p>
                      <p>123 Medical Center Drive</p>
                      <p>Healthcare City, HC 12345</p>
                      <p>United States</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Hours of Operation</h3>
                    <div className="space-y-2">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span
                            className={`font-medium ${
                              schedule.type === "emergency"
                                ? "text-destructive"
                                : schedule.type === "weekend"
                                  ? "text-muted-foreground"
                                  : "text-foreground"
                            }`}
                          >
                            {schedule.day}
                          </span>
                          <span
                            className={`${
                              schedule.type === "emergency" ? "text-destructive font-bold" : "text-muted-foreground"
                            }`}
                          >
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Main Phone</p>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@medcareplus.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Appointments</p>
                      <p className="text-muted-foreground">(555) 123-APPT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Find Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Located in the heart of Healthcare City with easy access to public transportation and ample parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardContent className="p-0">
                  <div className="min-h-[300px] md:min-h-[420px] lg:min-h-[520px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                      <p className="text-muted-foreground">
                        123 Medical Center Drive
                        <br />
                        Healthcare City, HC 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Directions */}
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    By Car
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    Free parking available in our main parking garage. Valet parking available at the main entrance.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bus className="h-5 w-5 text-primary" />
                    Public Transit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    Bus routes 15, 22, and 45 stop directly in front of the medical center. Metro station is 0.3 miles
                    away.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <NavigationIcon className="h-5 w-5 text-primary" />
                    GPS Coordinates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Latitude: 40.7128
                    <br />
                    Longitude: -74.0060
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty leading-relaxed opacity-90">
            Our medical team is available 24/7 for emergencies. For non-urgent matters, schedule an appointment or
            contact us during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="destructive" className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Emergency: Call 911
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Calendar className="h-5 w-5" />
              Schedule Appointment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
