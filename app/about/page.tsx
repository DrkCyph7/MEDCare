import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award, Shield, Target, Lightbulb, Calendar } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, respect, and genuine concern for their wellbeing.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in medical care, continuously improving our services.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards and transparency in all our interactions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work together as a team to provide comprehensive, coordinated care.",
  },
  {
    icon: Target,
    title: "Patient-Centered",
    description: "Every decision we make is guided by what's best for our patients and their families.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and methods to enhance patient care and outcomes.",
  },
]

const leadership = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    specialty: "Internal Medicine",
    experience: "20+ years",
    education: "Harvard Medical School",
  },
  {
    name: "Dr. James Rodriguez",
    role: "Director of Cardiology",
    specialty: "Cardiovascular Surgery",
    experience: "18+ years",
    education: "Johns Hopkins University",
  },
  {
    name: "Dr. Emily Chen",
    role: "Head of Pediatrics",
    specialty: "Pediatric Medicine",
    experience: "15+ years",
    education: "Stanford Medical School",
  },
  {
    name: "Michael Thompson",
    role: "Chief Executive Officer",
    specialty: "Healthcare Administration",
    experience: "25+ years",
    education: "MBA Healthcare Management",
  },
]

const facilities = [
  "State-of-the-art diagnostic imaging center",
  "Advanced surgical suites with robotic assistance",
  "Comprehensive laboratory services",
  "24/7 emergency department",
  "Intensive care units",
  "Rehabilitation and physical therapy center",
  "Outpatient specialty clinics",
  "Pharmacy and medical supplies",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About MedCare Plus</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              For over 25 years, we've been dedicated to providing exceptional healthcare services with a commitment to
              innovation, compassion, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                To provide comprehensive, compassionate, and innovative healthcare services that improve the health and
                wellbeing of our community. We are committed to delivering patient-centered care with the highest
                standards of medical excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                Our mission extends beyond treatment to include prevention, education, and support for patients and
                their families throughout their healthcare journey.
              </p>
              <Button size="lg" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Schedule a Visit
              </Button>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">25+</div>
                <div className="text-xl font-semibold text-foreground mb-2">Years of Service</div>
                <div className="text-muted-foreground text-pretty">
                  Serving our community with dedication and excellence since 1999
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              These fundamental principles guide everything we do and shape the culture of care at MedCare Plus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Meet the experienced professionals who lead our commitment to exceptional healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <p className="text-primary font-semibold">{leader.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium">Specialty:</span> {leader.specialty}
                    </p>
                    <p>
                      <span className="font-medium">Experience:</span> {leader.experience}
                    </p>
                    <p>
                      <span className="font-medium">Education:</span> {leader.education}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                World-Class Facilities
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                Our modern medical facility is equipped with the latest technology and designed with patient comfort and
                safety in mind. Every aspect of our infrastructure supports our commitment to providing the highest
                quality care.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 glass rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">Hospital Beds</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">12</div>
                  <div className="text-muted-foreground">Operating Rooms</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Emergency Care</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Experience the MedCare Plus Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty leading-relaxed opacity-90">
            Join thousands of patients who trust us with their healthcare needs. Schedule your appointment today and
            experience compassionate, comprehensive care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Users className="h-5 w-5" />
              Meet Our Doctors
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
