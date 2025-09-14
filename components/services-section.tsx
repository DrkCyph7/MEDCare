import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Baby, Eye, Stethoscope, Activity } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostic and treatment options.",
    features: ["ECG & Echo", "Cardiac Surgery", "Preventive Care"],
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert neurological care for brain and nervous system conditions.",
    features: ["Brain Imaging", "Stroke Care", "Epilepsy Treatment"],
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents.",
    features: ["Well-Child Visits", "Vaccinations", "Growth Monitoring"],
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services from routine exams to complex surgeries.",
    features: ["Eye Exams", "Cataract Surgery", "Retinal Care"],
  },
  {
    icon: Stethoscope,
    title: "Primary Care",
    description: "Your first point of contact for all health concerns and preventive care.",
    features: ["Annual Checkups", "Chronic Disease Management", "Health Screenings"],
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "24/7 emergency services with rapid response and expert trauma care.",
    features: ["24/7 Availability", "Trauma Center", "Critical Care"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Medical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            From routine checkups to specialized treatments, we provide complete healthcare solutions with cutting-edge
            technology and compassionate care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
