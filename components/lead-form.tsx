"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to a server
    // or integrate with WhatsApp API here

    // For demo purposes, just show success message
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white text-gray-900 p-8 rounded-lg text-center">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your information has been submitted successfully. I'll get back to you within 24 hours.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="border-blue-200 text-blue-600">
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-gray-900 p-8 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-900">
            Your Name
          </Label>
          <Input id="name" placeholder="John Doe" required className="bg-blue-50 border-blue-200" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-900">
            Phone Number
          </Label>
          <Input id="phone" placeholder="+91 98765 43210" required className="bg-blue-50 border-blue-200" />
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <Label htmlFor="email" className="text-gray-900">
          Email Address (Optional)
        </Label>
        <Input id="email" type="email" placeholder="john@example.com" className="bg-blue-50 border-blue-200" />
      </div>

      <div className="space-y-2 mb-6">
        <Label className="text-gray-900">I'm interested in:</Label>
        <RadioGroup defaultValue="life">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="life" id="life" />
              <Label htmlFor="life" className="text-gray-700">
                Life Insurance
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="health" id="health" />
              <Label htmlFor="health" className="text-gray-700">
                Health Insurance
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pension" id="pension" />
              <Label htmlFor="pension" className="text-gray-700">
                Pension Plans
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="child" id="child" />
              <Label htmlFor="child" className="text-gray-700">
                Child Plans
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2 mb-6">
        <Label htmlFor="message" className="text-gray-900">
          Additional Information (Optional)
        </Label>
        <Textarea
          id="message"
          placeholder="Tell me more about your insurance needs..."
          className="bg-blue-50 border-blue-200"
          rows={3}
        />
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <input type="checkbox" id="whatsapp" className="rounded border-gray-300" />
        <Label htmlFor="whatsapp" className="text-gray-700 text-sm">
          I agree to receive updates via WhatsApp
        </Label>
      </div>

      <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
        Get Free Consultation
      </Button>

      <p className="text-xs text-gray-500 mt-4 text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}

