import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    rating: 5,
    text: "The care I received was exceptional. The doctors took time to listen and explain everything clearly. The facility is modern and clean.",
    treatment: "Cardiology",
  },
  {
    name: "Michael Chen",
    location: "Los Angeles, CA",
    rating: 5,
    text: "Outstanding pediatric care for my daughter. The staff made her feel comfortable and the treatment was excellent.",
    treatment: "Pediatrics",
  },
  {
    name: "Emily Rodriguez",
    location: "Chicago, IL",
    rating: 5,
    text: "Professional, caring, and efficient. The online booking system made scheduling so easy. Highly recommend!",
    treatment: "Primary Care",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Patients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Real experiences from real patients who trust us with their healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.treatment}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
