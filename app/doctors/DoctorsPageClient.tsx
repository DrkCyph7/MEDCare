"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Heart,
  Brain,
  Baby,
  Eye,
  Stethoscope,
  Activity,
  Calendar,
  MapPin,
  Phone,
  Star,
  Search,
  GraduationCap,
  Award,
} from "lucide-react"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Internal Medicine",
    subSpecialty: "Primary Care",
    icon: Stethoscope,
    experience: "20+ years",
    education: "Harvard Medical School",
    certifications: ["Board Certified Internal Medicine", "ABIM Certified"],
    languages: ["English", "Spanish"],
    rating: 4.9,
    reviewCount: 247,
    bio: "Dr. Mitchell is dedicated to providing comprehensive primary care with a focus on preventive medicine and patient education. She has extensive experience in managing chronic conditions and promoting overall wellness.",
    availability: "Mon-Fri: 8AM-5PM",
    location: "Main Campus - Building A",
    acceptingPatients: true,
  },
  {
    id: 2,
    name: "Dr. James Rodriguez",
    specialty: "Cardiology",
    subSpecialty: "Interventional Cardiology",
    icon: Heart,
    experience: "18+ years",
    education: "Johns Hopkins University",
    certifications: ["Board Certified Cardiology", "Interventional Cardiology Fellowship"],
    languages: ["English", "Spanish", "Portuguese"],
    rating: 4.8,
    reviewCount: 189,
    bio: "Dr. Rodriguez specializes in interventional cardiology and has performed over 2,000 cardiac procedures. He is committed to providing cutting-edge cardiovascular care with a patient-centered approach.",
    availability: "Mon-Thu: 7AM-6PM",
    location: "Cardiac Center - 2nd Floor",
    acceptingPatients: true,
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    specialty: "Pediatrics",
    subSpecialty: "General Pediatrics",
    icon: Baby,
    experience: "15+ years",
    education: "Stanford Medical School",
    certifications: ["Board Certified Pediatrics", "Pediatric Advanced Life Support"],
    languages: ["English", "Mandarin", "Cantonese"],
    rating: 4.9,
    reviewCount: 312,
    bio: "Dr. Chen provides comprehensive pediatric care from newborns to adolescents. She is passionate about child development, preventive care, and working closely with families to ensure optimal health outcomes.",
    availability: "Mon-Fri: 8AM-6PM, Sat: 9AM-1PM",
    location: "Pediatric Wing - 1st Floor",
    acceptingPatients: true,
  },
  {
    id: 4,
    name: "Dr. Michael Thompson",
    specialty: "Neurology",
    subSpecialty: "Stroke & Cerebrovascular Disease",
    icon: Brain,
    experience: "22+ years",
    education: "Mayo Clinic College of Medicine",
    certifications: ["Board Certified Neurology", "Vascular Neurology Fellowship"],
    languages: ["English"],
    rating: 4.7,
    reviewCount: 156,
    bio: "Dr. Thompson is a leading neurologist specializing in stroke care and cerebrovascular diseases. He has published extensively in peer-reviewed journals and is committed to advancing neurological care.",
    availability: "Mon-Fri: 8AM-5PM",
    location: "Neurology Center - 3rd Floor",
    acceptingPatients: false,
  },
  {
    id: 5,
    name: "Dr. Lisa Park",
    specialty: "Ophthalmology",
    subSpecialty: "Retinal Diseases",
    icon: Eye,
    experience: "12+ years",
    education: "University of Pennsylvania",
    certifications: ["Board Certified Ophthalmology", "Retinal Fellowship"],
    languages: ["English", "Korean"],
    rating: 4.8,
    reviewCount: 203,
    bio: "Dr. Park specializes in medical and surgical treatment of retinal diseases. She is experienced in the latest treatments for macular degeneration, diabetic retinopathy, and retinal detachment.",
    availability: "Tue-Fri: 8AM-5PM",
    location: "Eye Center - Ground Floor",
    acceptingPatients: true,
  },
  {
    id: 6,
    name: "Dr. Robert Johnson",
    specialty: "Emergency Medicine",
    subSpecialty: "Trauma & Critical Care",
    icon: Activity,
    experience: "16+ years",
    education: "University of Chicago",
    certifications: ["Board Certified Emergency Medicine", "Advanced Trauma Life Support"],
    languages: ["English"],
    rating: 4.6,
    reviewCount: 98,
    bio: "Dr. Johnson leads our emergency department with expertise in trauma care and critical medicine. He is dedicated to providing rapid, high-quality emergency care 24/7.",
    availability: "24/7 Emergency Coverage",
    location: "Emergency Department",
    acceptingPatients: true,
  },
]

const specialties = [
  "All Specialties",
  "Internal Medicine",
  "Cardiology",
  "Pediatrics",
  "Neurology",
  "Ophthalmology",
  "Emergency Medicine",
]

export default function DoctorsPageClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all-specialties")

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.subSpecialty.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesSpecialty =
        selectedSpecialty === "all-specialties" ||
        doctor.specialty.toLowerCase().replace(/\s+/g, "-") === selectedSpecialty

      return matchesSearch && matchesSpecialty
    })
  }, [searchTerm, selectedSpecialty])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance px-2">
              Our Medical Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4">
              Meet our experienced physicians and specialists who are dedicated to providing exceptional healthcare with
              compassion and expertise.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto px-2">
            <div className="glass-card p-4 sm:p-6 rounded-2xl">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by doctor name or specialty..."
                      className="pl-10 text-sm sm:text-base"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty.toLowerCase().replace(/\s+/g, "-")}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-muted-foreground">
              {filteredDoctors.length === 0
                ? "No doctors found matching your criteria"
                : `Showing ${filteredDoctors.length} doctor${filteredDoctors.length !== 1 ? "s" : ""}`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="glass-card hover:scale-105 transition-all duration-300 group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <doctor.icon className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
                    </div>
                    <div className="text-right">
                      {doctor.acceptingPatients ? (
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800 hover:bg-green-100 text-xs sm:text-sm"
                        >
                          Accepting Patients
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs sm:text-sm">
                          Not Accepting
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardTitle className="text-lg sm:text-xl">{doctor.name}</CardTitle>
                  <CardDescription>
                    <div className="space-y-1">
                      <p className="font-semibold text-primary text-sm sm:text-base">{doctor.specialty}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{doctor.subSpecialty}</p>
                    </div>
                  </CardDescription>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 sm:h-4 w-3 sm:w-4 ${
                            i < Math.floor(doctor.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-medium">{doctor.rating}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">({doctor.reviewCount} reviews)</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    {/* Bio */}
                    <p className="text-xs sm:text-sm text-muted-foreground text-pretty leading-relaxed line-clamp-3">
                      {doctor.bio}
                    </p>

                    {/* Key Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <GraduationCap className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground truncate">{doctor.education}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <Award className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{doctor.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <MapPin className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground truncate">{doctor.location}</span>
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-foreground mb-1">Languages:</p>
                      <div className="flex flex-wrap gap-1">
                        {doctor.languages.map((language, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="text-xs sm:text-sm">
                      <p className="font-medium text-foreground">Availability:</p>
                      <p className="text-muted-foreground">{doctor.availability}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Button size="sm" className="flex-1 text-xs sm:text-sm" disabled={!doctor.acceptingPatients}>
                        <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                        Book Appointment
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent text-xs sm:text-sm">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Excellence in Medical Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Our medical team represents decades of combined experience and expertise across multiple specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Expert Physicians</div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Medical Specialties</div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                <div className="text-muted-foreground">Average Rating</div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100K+</div>
                <div className="text-muted-foreground">Patients Served</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Find the Right Doctor for You</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty leading-relaxed opacity-90">
            Our experienced medical professionals are here to provide you with personalized, compassionate care.
            Schedule your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
