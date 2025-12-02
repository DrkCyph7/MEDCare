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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Clock, Stethoscope, Heart, Brain, Baby, Eye, Activity, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { format } from "date-fns"

const departments = [
  { id: "primary-care", name: "Primary Care", icon: Stethoscope, description: "General health and wellness" },
  { id: "cardiology", name: "Cardiology", icon: Heart, description: "Heart and cardiovascular care" },
  { id: "neurology", name: "Neurology", icon: Brain, description: "Brain and nervous system" },
  { id: "pediatrics", name: "Pediatrics", icon: Baby, description: "Children's healthcare" },
  { id: "ophthalmology", name: "Ophthalmology", icon: Eye, description: "Eye care and vision" },
  { id: "emergency", name: "Emergency Care", icon: Activity, description: "Urgent medical needs" },
]

const doctors = {
  "primary-care": [
    { id: "mitchell", name: "Dr. Sarah Mitchell", availability: "Mon-Fri", rating: 4.9 },
    { id: "johnson", name: "Dr. Robert Johnson", availability: "Tue-Sat", rating: 4.7 },
  ],
  cardiology: [
    { id: "rodriguez", name: "Dr. James Rodriguez", availability: "Mon-Thu", rating: 4.8 },
    { id: "patel", name: "Dr. Priya Patel", availability: "Wed-Fri", rating: 4.9 },
  ],
  neurology: [{ id: "thompson", name: "Dr. Michael Thompson", availability: "Mon-Fri", rating: 4.7 }],
  pediatrics: [
    { id: "chen", name: "Dr. Emily Chen", availability: "Mon-Sat", rating: 4.9 },
    { id: "williams", name: "Dr. David Williams", availability: "Tue-Fri", rating: 4.8 },
  ],
  ophthalmology: [{ id: "park", name: "Dr. Lisa Park", availability: "Tue-Fri", rating: 4.8 }],
  emergency: [{ id: "emergency", name: "Emergency Department", availability: "24/7", rating: 4.6 }],
}

const timeSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

const appointmentTypes = [
  { id: "new-patient", name: "New Patient Visit", duration: "60 min" },
  { id: "follow-up", name: "Follow-up Visit", duration: "30 min" },
  { id: "consultation", name: "Consultation", duration: "45 min" },
  { id: "procedure", name: "Procedure", duration: "90 min" },
]

export default function AppointmentPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("")
  const [patientInfo, setPatientInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    insurance: "",
    reason: "",
    isNewPatient: false,
    hasInsurance: true,
  })

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handlePatientInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPatientInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle appointment booking - in production, this would send to an API
    // For now, show success feedback
    alert(`Appointment confirmed!\n\nDepartment: ${selectedDepartment}\nDoctor: ${selectedDoctor}\nDate: ${selectedDate}\nTime: ${selectedTime}\n\nYou will receive a confirmation email shortly.`)
    // Reset form
    setCurrentStep(1)
    setSelectedDepartment('')
    setSelectedDoctor('')
    setSelectedDate(undefined)
    setSelectedTime('')
    setAppointmentType('')
    setPatientInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      insurance: '',
      reason: '',
      isNewPatient: false,
      hasInsurance: true,
    })
  }

  const steps = [
    { number: 1, title: "Select Department", completed: currentStep > 1 },
    { number: 2, title: "Choose Doctor & Date", completed: currentStep > 2 },
    { number: 3, title: "Patient Information", completed: currentStep > 3 },
    { number: 4, title: "Confirmation", completed: false },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance px-2">Book an Appointment</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4">
              Schedule your visit with our experienced medical professionals. Choose your preferred department, doctor,
              and time slot.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step.completed
                        ? "bg-primary text-primary-foreground"
                        : currentStep === step.number
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.completed ? <CheckCircle className="h-5 w-5" /> : step.number}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p
                      className={`text-sm font-medium ${
                        step.completed || currentStep === step.number ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-8 sm:w-16 h-0.5 bg-muted mx-4 sm:mx-8 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Department */}
            {currentStep === 1 && (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Select Department</CardTitle>
                  <CardDescription>Choose the medical department for your appointment.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {departments.map((dept) => (
                      <div
                        key={dept.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all hover:scale-105 ${
                          selectedDepartment === dept.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedDepartment(dept.id)}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <dept.icon className="h-6 w-6 text-primary" />
                          <h3 className="font-semibold">{dept.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{dept.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Choose Doctor & Date */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">Choose Doctor</CardTitle>
                    <CardDescription>Select your preferred doctor for this appointment.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedDepartment &&
                        doctors[selectedDepartment as keyof typeof doctors]?.map((doctor) => (
                          <div
                            key={doctor.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all hover:scale-105 ${
                              selectedDoctor === doctor.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => setSelectedDoctor(doctor.id)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{doctor.name}</h3>
                              <Badge variant="outline">{doctor.rating} ★</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Available: {doctor.availability}</p>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-xl">Select Date</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-xl">Available Times</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                            className="justify-start"
                          >
                            <Clock className="h-4 w-4 mr-2" />
                            {time}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Appointment Type</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={appointmentType} onValueChange={setAppointmentType}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {appointmentTypes.map((type) => (
                          <div key={type.id} className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value={type.id} id={type.id} />
                            <Label htmlFor={type.id} className="flex-1 cursor-pointer">
                              <div>
                                <p className="font-medium">{type.name}</p>
                                <p className="text-sm text-muted-foreground">Duration: {type.duration}</p>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Step 3: Patient Information */}
            {currentStep === 3 && (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Patient Information</CardTitle>
                  <CardDescription>Please provide your personal and insurance information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={patientInfo.firstName}
                        onChange={handlePatientInfoChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={patientInfo.lastName}
                        onChange={handlePatientInfoChange}
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
                        value={patientInfo.email}
                        onChange={handlePatientInfoChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={patientInfo.phone}
                        onChange={handlePatientInfoChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={patientInfo.dateOfBirth}
                        onChange={handlePatientInfoChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="insurance">Insurance Provider</Label>
                      <Select onValueChange={(value) => setPatientInfo((prev) => ({ ...prev, insurance: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select insurance provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blue-cross">Blue Cross Blue Shield</SelectItem>
                          <SelectItem value="aetna">Aetna</SelectItem>
                          <SelectItem value="cigna">Cigna</SelectItem>
                          <SelectItem value="united">UnitedHealthcare</SelectItem>
                          <SelectItem value="humana">Humana</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="none">No Insurance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="reason">Reason for Visit</Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      rows={3}
                      value={patientInfo.reason}
                      onChange={handlePatientInfoChange}
                      placeholder="Please describe the reason for your visit..."
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newPatient"
                      checked={patientInfo.isNewPatient}
                      onCheckedChange={(checked) =>
                        setPatientInfo((prev) => ({ ...prev, isNewPatient: checked as boolean }))
                      }
                    />
                    <Label htmlFor="newPatient">I am a new patient</Label>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Confirm Your Appointment</CardTitle>
                  <CardDescription>Please review your appointment details before confirming.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Appointment Details</h3>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Department:</span>{" "}
                          {departments.find((d) => d.id === selectedDepartment)?.name}
                        </p>
                        <p>
                          <span className="font-medium">Doctor:</span>{" "}
                          {selectedDepartment &&
                            doctors[selectedDepartment as keyof typeof doctors]?.find((d) => d.id === selectedDoctor)
                              ?.name}
                        </p>
                        <p>
                          <span className="font-medium">Date:</span>{" "}
                          {selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""}
                        </p>
                        <p>
                          <span className="font-medium">Time:</span> {selectedTime}
                        </p>
                        <p>
                          <span className="font-medium">Type:</span>{" "}
                          {appointmentTypes.find((t) => t.id === appointmentType)?.name}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Patient Information</h3>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Name:</span> {patientInfo.firstName} {patientInfo.lastName}
                        </p>
                        <p>
                          <span className="font-medium">Email:</span> {patientInfo.email}
                        </p>
                        <p>
                          <span className="font-medium">Phone:</span> {patientInfo.phone}
                        </p>
                        <p>
                          <span className="font-medium">Insurance:</span> {patientInfo.insurance || "Not provided"}
                        </p>
                        {patientInfo.isNewPatient && (
                          <Badge variant="secondary" className="mt-2">
                            New Patient
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {patientInfo.reason && (
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Reason for Visit</h3>
                      <p className="text-muted-foreground">{patientInfo.reason}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="bg-transparent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && !selectedDepartment) ||
                    (currentStep === 2 && (!selectedDoctor || !selectedDate || !selectedTime || !appointmentType)) ||
                    (currentStep === 3 &&
                      (!patientInfo.firstName ||
                        !patientInfo.lastName ||
                        !patientInfo.email ||
                        !patientInfo.phone ||
                        !patientInfo.dateOfBirth))
                  }
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" size="lg">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Confirm Appointment
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
