import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Brain,
  Baby,
  Eye,
  Stethoscope,
  Activity,
  Microscope,
  Monitor,
  Phone,
  Calendar,
  Clock,
  CheckCircle,
} from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Primary Care",
    description: "Comprehensive healthcare for all ages with preventive care and chronic disease management.",
    features: [
      "Annual physical exams",
      "Preventive screenings",
      "Chronic disease management",
      "Immunizations and vaccines",
      "Health counseling",
      "Wellness programs",
    ],
    availability: "Mon-Fri: 8AM-6PM",
    emergencyAvailable: false,
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Advanced heart and cardiovascular care with state-of-the-art diagnostic and treatment options.",
    features: [
      "Cardiac catheterization",
      "Echocardiography",
      "Stress testing",
      "Pacemaker implantation",
      "Heart surgery",
      "Cardiac rehabilitation",
    ],
    availability: "Mon-Fri: 7AM-7PM",
    emergencyAvailable: true,
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert care for brain, spine, and nervous system disorders with advanced diagnostic capabilities.",
    features: [
      "Brain imaging (MRI, CT)",
      "Stroke treatment",
      "Epilepsy management",
      "Movement disorders",
      "Memory disorders",
      "Neurological rehabilitation",
    ],
    availability: "Mon-Fri: 8AM-5PM",
    emergencyAvailable: true,
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents up to age 18.",
    features: [
      "Well-child visits",
      "Immunizations",
      "Growth and development monitoring",
      "Pediatric urgent care",
      "Behavioral health",
      "Adolescent medicine",
    ],
    availability: "Mon-Fri: 8AM-6PM, Sat: 9AM-1PM",
    emergencyAvailable: false,
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services from routine exams to complex surgical procedures.",
    features: [
      "Comprehensive eye exams",
      "Cataract surgery",
      "Glaucoma treatment",
      "Retinal disorders",
      "LASIK surgery",
      "Pediatric ophthalmology",
    ],
    availability: "Mon-Fri: 8AM-5PM",
    emergencyAvailable: false,
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "24/7 emergency services with rapid response times and expert trauma care.",
    features: [
      "24/7 emergency department",
      "Trauma center",
      "Critical care",
      "Emergency surgery",
      "Cardiac emergency care",
      "Stroke response team",
    ],
    availability: "24/7 - Always Open",
    emergencyAvailable: true,
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description: "Comprehensive diagnostic testing with rapid results and advanced laboratory capabilities.",
    features: [
      "Blood work and chemistry panels",
      "Microbiology testing",
      "Pathology services",
      "Genetic testing",
      "Drug screening",
      "Specialized diagnostics",
    ],
    availability: "Mon-Fri: 6AM-8PM, Weekends: 8AM-4PM",
    emergencyAvailable: true,
  },
  {
    icon: Monitor,
    title: "Diagnostic Imaging",
    description: "State-of-the-art imaging technology for accurate diagnosis and treatment planning.",
    features: [
      "MRI and CT scans",
      "X-rays and ultrasound",
      "Mammography",
      "Nuclear medicine",
      "PET scans",
      "Interventional radiology",
    ],
    availability: "Mon-Fri: 7AM-7PM, Weekends: 8AM-4PM",
    emergencyAvailable: true,
  },
  {
    icon: Phone,
    title: "Telemedicine",
    description: "Virtual healthcare consultations for convenient access to medical care from home.",
    features: [
      "Virtual consultations",
      "Remote monitoring",
      "Follow-up appointments",
      "Prescription management",
      "Health education",
      "Chronic care management",
    ],
    availability: "Mon-Fri: 8AM-8PM, Weekends: 10AM-6PM",
    emergencyAvailable: false,
  },
]

const specialtyServices = [
  "Orthopedics & Sports Medicine",
  "Women's Health & Obstetrics",
  "Mental Health & Psychiatry",
  "Dermatology",
  "Gastroenterology",
  "Pulmonology",
  "Endocrinology",
  "Rheumatology",
  "Urology",
  "Oncology",
  "Physical Therapy",
  "Nutrition Counseling",
]

export const metadata: Metadata = {
  title: "Medical Services - Comprehensive Healthcare Solutions | MEDArt",
  description:
    "Discover our comprehensive medical services including primary care, cardiology, neurology, pediatrics, emergency care, and more. Expert healthcare with advanced technology.",
  keywords:
    "medical services, primary care, cardiology, neurology, pediatrics, emergency care, diagnostic imaging, laboratory services, telemedicine, healthcare",
  openGraph: {
    title: "Medical Services - Comprehensive Healthcare Solutions",
    description:
      "Discover our comprehensive medical services including primary care, cardiology, neurology, pediatrics, and more.",
    type: "website",
    images: ["/images/medical-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Services - Comprehensive Healthcare Solutions",
    description: "Expert healthcare services with advanced technology and compassionate care.",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance px-2">
              Medical Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4">
              Comprehensive healthcare services delivered by experienced professionals using the latest medical
              technology and evidence-based practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                    </div>
                    {service.emergencyAvailable && (
                      <Badge variant="destructive" className="text-xs sm:text-sm">
                        Emergency Available
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-2">Services Include:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-xs sm:text-sm text-primary font-medium">
                            +{service.features.length - 4} more services
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Clock className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                      <span className="truncate">{service.availability}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1 text-xs sm:text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                        Book Now
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent text-xs sm:text-sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Additional Specialty Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4">
              We offer a wide range of specialized medical services to meet all your healthcare needs under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {specialtyServices.map((service, index) => (
              <Card
                key={index}
                className="glass-card hover:scale-105 transition-all duration-300 text-center p-3 sm:p-4"
              >
                <CardContent className="p-0">
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm text-balance">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Accessibility */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl flex items-center gap-3">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-primary flex-shrink-0" />
                  Insurance & Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-pretty leading-relaxed">
                  We accept most major insurance plans and offer flexible payment options to make healthcare accessible
                  to everyone.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Most major insurance plans accepted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Flexible payment plans available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Financial assistance programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Online bill pay and statements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl flex items-center gap-3">
                  <Activity className="h-5 sm:h-6 w-5 sm:w-6 text-primary flex-shrink-0" />
                  Quality & Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-pretty leading-relaxed">
                  Our commitment to quality and safety is reflected in our accreditations and continuous improvement
                  initiatives.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Joint Commission accredited</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">HIPAA compliant and secure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Evidence-based medical practices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Continuous quality improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty leading-relaxed opacity-90 px-4">
            Our experienced medical team is ready to provide you with the highest quality care. Book your appointment
            today or contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" variant="secondary" className="flex items-center gap-2 text-sm sm:text-base">
              <Calendar className="h-4 sm:h-5 w-4 sm:w-5" />
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm sm:text-base"
            >
              <Phone className="h-4 sm:h-5 w-4 sm:w-5" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
