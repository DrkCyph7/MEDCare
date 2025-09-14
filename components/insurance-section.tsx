import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle } from "lucide-react"

const insurancePartners = [
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  "UnitedHealthcare",
  "Humana",
  "Kaiser Permanente",
  "Medicare",
  "Medicaid",
]

const certifications = ["Joint Commission Accredited", "AAAHC Certified", "HIPAA Compliant", "ISO 9001:2015 Certified"]

export function InsuranceSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Insurance Partners */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="h-6 w-6 text-primary" />
                Insurance Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                We accept most major insurance plans to make quality healthcare accessible to everyone.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {insurancePartners.map((partner, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-background/50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{partner}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CheckCircle className="h-6 w-6 text-primary" />
                Certifications & Accreditations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                Our commitment to excellence is recognized by leading healthcare organizations.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
