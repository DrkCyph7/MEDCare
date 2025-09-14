"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, CheckCircle } from "lucide-react"

interface AppointmentData {
  department: string
  doctor: string
  date: string
  time: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  reason: string
  insurance: string
}

const departments = [
  { id: "cardiology", name: "Cardiology", doctors: ["Dr. Sarah Johnson", "Dr. Michael Brown"] },
  { id: "pediatrics", name: "Pediatrics", doctors: ["Dr. Emily Chen", "Dr. David Wilson"] },
  { id: "orthopedics", name: "Orthopedics", doctors: ["Dr. James Miller", "Dr. Lisa Garcia"] },
  { id: "dermatology", name: "Dermatology", doctors: ["Dr. Anna Davis", "Dr. Robert Taylor"] },
  { id: "neurology", name: "Neurology", doctors: ["Dr. Mark Anderson", "Dr. Jennifer Lee"] },
]

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
]

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1)
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    department: "",
    doctor: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    reason: "",
    insurance: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleInputChange = (field: keyof AppointmentData, value: string) => {
    setAppointmentData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsConfirmed(true)
  }

  const selectedDepartment = departments.find((d) => d.id === appointmentData.department)

  if (isConfirmed) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <Navigation />
        <div className="pt-20 pb-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card p-8 rounded-2xl">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-foreground mb-4">Appointment Confirmed!</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Your appointment has been successfully booked. You will receive a confirmation email shortly.
              </p>
              <div className="bg-muted p-4 rounded-lg text-left space-y-2">
                <p>
                  <strong>Department:</strong> {selectedDepartment?.name}
                </p>
                <p>
                  <strong>Doctor:</strong> {appointmentData.doctor}
                </p>
                <p>
                  <strong>Date:</strong> {appointmentData.date}
                </p>
                <p>
                  <strong>Time:</strong> {appointmentData.time}
                </p>
                <p>
                  <strong>Patient:</strong> {appointmentData.firstName} {appointmentData.lastName}
                </p>
              </div>
              <Button className="mt-6" onClick={() => (window.location.href = "/")}>
                Return to Home
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Book an Appointment</h1>
            <p className="text-lg text-muted-foreground">Schedule your visit with our medical professionals</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNumber ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2 space-x-8 text-sm text-muted-foreground">
              <span className={step >= 1 ? "text-primary" : ""}>Department</span>
              <span className={step >= 2 ? "text-primary" : ""}>Date & Time</span>
              <span className={step >= 3 ? "text-primary" : ""}>Personal Info</span>
              <span className={step >= 4 ? "text-primary" : ""}>Confirmation</span>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            {/* Step 1: Department & Doctor Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Select Department & Doctor</h2>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Department</label>
                  <select
                    value={appointmentData.department}
                    onChange={(e) => handleInputChange("department", e.target.value)}
                    className="w-full p-3 border rounded-lg bg-background"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedDepartment && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Doctor</label>
                    <select
                      value={appointmentData.doctor}
                      onChange={(e) => handleInputChange("doctor", e.target.value)}
                      className="w-full p-3 border rounded-lg bg-background"
                    >
                      <option value="">Select Doctor</option>
                      {selectedDepartment.doctors.map((doctor) => (
                        <option key={doctor} value={doctor}>
                          {doctor}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <Button
                  onClick={handleNext}
                  disabled={!appointmentData.department || !appointmentData.doctor}
                  className="w-full"
                >
                  Next: Select Date & Time
                </Button>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Select Date & Time</h2>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
                  <Input
                    type="date"
                    value={appointmentData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Available Time Slots</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={appointmentData.time === time ? "default" : "outline"}
                        onClick={() => handleInputChange("time", time)}
                        className="p-3"
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={handlePrevious} className="flex-1 bg-transparent">
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!appointmentData.date || !appointmentData.time}
                    className="flex-1"
                  >
                    Next: Personal Information
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Personal Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input
                      value={appointmentData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input
                      value={appointmentData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      value={appointmentData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      value={appointmentData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                  <Input
                    value={appointmentData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Enter your address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Insurance Provider</label>
                  <select
                    value={appointmentData.insurance}
                    onChange={(e) => handleInputChange("insurance", e.target.value)}
                    className="w-full p-3 border rounded-lg bg-background"
                  >
                    <option value="">Select Insurance Provider</option>
                    <option value="aetna">Aetna</option>
                    <option value="bluecross">Blue Cross Blue Shield</option>
                    <option value="cigna">Cigna</option>
                    <option value="humana">Humana</option>
                    <option value="medicare">Medicare</option>
                    <option value="medicaid">Medicaid</option>
                    <option value="uninsured">No Insurance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Reason for Visit</label>
                  <Textarea
                    value={appointmentData.reason}
                    onChange={(e) => handleInputChange("reason", e.target.value)}
                    placeholder="Please describe the reason for your visit"
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={handlePrevious} className="flex-1 bg-transparent">
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={
                      !appointmentData.firstName ||
                      !appointmentData.lastName ||
                      !appointmentData.email ||
                      !appointmentData.phone
                    }
                    className="flex-1"
                  >
                    Review & Confirm
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Review & Confirm</h2>

                <div className="bg-muted p-6 rounded-lg space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Appointment Details</h3>
                      <p>
                        <strong>Department:</strong> {selectedDepartment?.name}
                      </p>
                      <p>
                        <strong>Doctor:</strong> {appointmentData.doctor}
                      </p>
                      <p>
                        <strong>Date:</strong> {appointmentData.date}
                      </p>
                      <p>
                        <strong>Time:</strong> {appointmentData.time}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Patient Information</h3>
                      <p>
                        <strong>Name:</strong> {appointmentData.firstName} {appointmentData.lastName}
                      </p>
                      <p>
                        <strong>Email:</strong> {appointmentData.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {appointmentData.phone}
                      </p>
                      <p>
                        <strong>Insurance:</strong> {appointmentData.insurance || "Not specified"}
                      </p>
                    </div>
                  </div>
                  {appointmentData.reason && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Reason for Visit</h3>
                      <p className="text-muted-foreground">{appointmentData.reason}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={handlePrevious} className="flex-1 bg-transparent">
                    Previous
                  </Button>
                  <Button onClick={handleSubmit} disabled={isSubmitting} className="flex-1">
                    {isSubmitting ? "Booking..." : "Confirm Appointment"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
