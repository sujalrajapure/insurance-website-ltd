import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Have questions about insurance or need personalized advice? I'm here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call me directly for immediate assistance</p>
                <Button asChild variant="link" className="text-blue-600">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Message me on WhatsApp for quick responses</p>
                <Button asChild variant="link" className="text-blue-600">
                  <a href="https://wa.me/919876543210">Chat on WhatsApp</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send me an email for detailed inquiries</p>
                <Button asChild variant="link" className="text-blue-600">
                  <a href="mailto:agent@licinsurance.com">agent@licinsurance.com</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and I'll get back to you within 24 hours with a response to your inquiry.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Insurance Inquiry" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="I'm interested in learning more about life insurance options..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit My Office</h2>
              <p className="text-gray-600 mb-4 flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                <span>123 Insurance Plaza, MG Road, Bangalore, Karnataka 560001</span>
              </p>
              <p className="text-gray-600 mb-8">
                I'm available for in-person consultations Monday through Saturday, 10:00 AM to 6:00 PM. Feel free to
                drop by or schedule an appointment in advance for a personalized consultation.
              </p>

              <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Office Location Map"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about insurance and my services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly can you process insurance applications?
                </h3>
                <p className="text-gray-600">
                  Most applications are processed within 3-5 business days. For simple policies without medical
                  requirements, we can often get approval within 24-48 hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you charge any fees for your consultation services?
                </h3>
                <p className="text-gray-600">
                  No, all consultations are completely free of charge. My services are compensated through commissions
                  from the insurance companies when you purchase a policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I file a claim on my insurance policy?
                </h3>
                <p className="text-gray-600">
                  I provide full support for the claims process. Simply contact me with the policy details, and I'll
                  guide you through the entire procedure and help expedite your claim.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can you help with policies from companies other than LIC?
                </h3>
                <p className="text-gray-600">
                  While I specialize in LIC policies, I can provide general guidance on other insurance products. For
                  specific non-LIC policies, I can refer you to trusted colleagues.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Don't see your question here? Feel free to reach out directly.</p>
            <Button asChild>
              <Link href="#contact-form">Ask Your Question</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Financial Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's work together to find the perfect insurance solutions for your needs. Contact me today for a free,
            no-obligation consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <a href="https://wa.me/919876543210">
                <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

