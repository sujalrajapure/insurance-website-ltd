import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Shield, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialCard from "@/components/testimonial-card"
import LeadForm from "@/components/lead-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Secure Your Future with Expert Insurance Guidance</h1>
            <p className="text-xl mb-8 text-blue-100">
              With 10+ years of experience as an LIC agent, I help families and individuals find the perfect insurance
              solutions for their needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                <Link href="/insurance-plans">Explore Plans</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Insurance Agent"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="container mx-auto px-4 md:px-6 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-700 p-4 rounded-lg">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">IRDA Approved</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-lg">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">500+ Happy Clients</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-lg">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">₹10Cr+ Claims Settled</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-lg">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">10+ Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Me As Your Insurance Advisor?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With a decade of experience in the insurance industry, I provide personalized solutions tailored to your
              unique financial goals and protection needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Benefit from my extensive knowledge of LIC policies and insurance strategies to make informed
                  decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personalized Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receive customized insurance recommendations based on your specific needs and financial situation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Count on me for continuous assistance with policy management, claims, and future adjustments.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Insurance Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Insurance Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of the most popular LIC insurance plans that can help secure your future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <CardTitle>LIC Jeevan Anand</CardTitle>
                <CardDescription>Life Insurance with Endowment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Whole life cover with maturity benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Ideal for long-term financial security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Tax benefits under Section 80C</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/insurance-plans#jeevan-anand">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <CardTitle>LIC Tech Term</CardTitle>
                <CardDescription>Pure Term Insurance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>High coverage at affordable premiums</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Multiple policy term options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Additional rider benefits available</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/insurance-plans#tech-term">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <CardTitle>LIC PMVVY</CardTitle>
                <CardDescription>Pension Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Guaranteed pension for senior citizens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Monthly, quarterly, half-yearly, yearly options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Return of purchase price to nominee</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/insurance-plans#pmvvy">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/insurance-plans">View All Insurance Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What My Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what some of my clients have to say about their experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              role="Business Owner"
              testimonial="The personalized attention I received was exceptional. My agent took the time to understand my business needs and recommended the perfect insurance solution."
              rating={5}
              imageSrc="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              name="Priya Sharma"
              role="IT Professional"
              testimonial="I was confused about which policy would be best for my family. The clear explanations and patience shown during our consultations made the decision easy."
              rating={5}
              imageSrc="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              name="Amit Patel"
              role="Doctor"
              testimonial="The claim process was handled so efficiently during a difficult time for our family. I'm grateful for the support and professionalism shown throughout."
              rating={4}
              imageSrc="/placeholder.svg?height=100&width=100"
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insurance Insights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest articles on insurance planning, tax savings, and financial security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Tax Saving Tips"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>5 Ways Insurance Can Help You Save Taxes</CardTitle>
                <CardDescription>March 15, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Discover how the right insurance policies can help you maximize your tax benefits under Section 80C
                  and other provisions.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-blue-600">
                  <Link href="/blog/tax-saving-tips">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Child Education Planning"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Planning Your Child's Education with Insurance</CardTitle>
                <CardDescription>February 28, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn how to create a solid financial foundation for your child's education through strategic
                  insurance planning.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-blue-600">
                  <Link href="/blog/child-education-planning">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Retirement Planning"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Retirement Planning: Start Early, Retire Rich</CardTitle>
                <CardDescription>January 10, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Explore how starting your retirement planning early with the right insurance products can lead to a
                  comfortable retirement.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-blue-600">
                  <Link href="/blog/retirement-planning">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Insurance Consultation</h2>
              <p className="text-xl text-blue-100">
                Fill out this short form, and I'll get back to you within 24 hours with personalized insurance
                recommendations.
              </p>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  )
}

