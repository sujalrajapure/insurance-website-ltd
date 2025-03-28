import Image from "next/image"
import Link from "next/link"
import { Award, Calendar, CheckCircle, Clock, FileText, Shield, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              With 10+ years of experience as an LIC agent, I've helped hundreds of families secure their financial
              future with the right insurance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Insurance Agent"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey in Insurance</h2>
              <p className="text-lg text-gray-600 mb-4">
                My journey in the insurance industry began in 2013 when I joined LIC as an agent. What started as a
                career choice quickly became a passion as I witnessed firsthand how the right insurance policies can
                transform lives and provide security during difficult times.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Over the past decade, I've had the privilege of helping hundreds of clients navigate the complex world
                of insurance, from young professionals just starting their careers to retirees looking to secure their
                golden years.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My approach has always been client-centric, focusing on understanding each individual's unique needs and
                circumstances before recommending any insurance solution. This philosophy has earned me the trust of my
                clients and numerous accolades from LIC.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-blue-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-medium">Started in 2013</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-medium">500+ Happy Clients</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Top Agent Award 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Qualifications & Certifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I continuously invest in my professional development to provide you with the best insurance advice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-600" />
                  IRDA Licensed Agent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Licensed by the Insurance Regulatory and Development Authority of India to provide insurance advice
                  and services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  LIC Certified Financial Advisor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced certification in financial planning and insurance solutions from Life Insurance Corporation
                  of India.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-blue-600" />
                  Million Dollar Round Table Member
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Member of the prestigious MDRT, recognizing the top insurance and financial services professionals
                  globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My commitment to excellence has been recognized through various awards and achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4 bg-blue-100 p-3 rounded-full h-fit">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">LIC Chairman's Club Member</h3>
                <p className="text-gray-600 mb-1">2020, 2021, 2022</p>
                <p className="text-gray-600">
                  Recognized among the top 1% of LIC agents nationwide for exceptional performance and client service.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 bg-blue-100 p-3 rounded-full h-fit">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Top Performer Award</h3>
                <p className="text-gray-600 mb-1">2018, 2019, 2021</p>
                <p className="text-gray-600">
                  Awarded for consistently exceeding targets and maintaining high client satisfaction rates.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 bg-blue-100 p-3 rounded-full h-fit">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">500+ Families Protected</h3>
                <p className="text-gray-600 mb-1">2013 - Present</p>
                <p className="text-gray-600">
                  Successfully helped over 500 families secure their financial future with customized insurance
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 bg-blue-100 p-3 rounded-full h-fit">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">₹10+ Crore Claims Settled</h3>
                <p className="text-gray-600 mb-1">2013 - Present</p>
                <p className="text-gray-600">
                  Successfully processed and expedited claims worth over ₹10 crore, ensuring financial support when
                  clients needed it most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Approach to Insurance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I believe in a client-first approach that focuses on understanding your unique needs before recommending
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Listen</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  I take the time to understand your financial situation, goals, and concerns before making any
                  recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Analyze</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  I analyze your needs and match them with the most suitable insurance products available in the market.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Recommend</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  I provide clear, jargon-free explanations of recommended policies and how they address your specific
                  needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  My service doesn't end with the sale. I provide ongoing support for policy management, claims, and
                  reviews.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Me as Your Insurance Advisor?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's what sets me apart from other insurance agents and why clients continue to trust me with their
              financial security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Client-First Approach</h3>
                <p className="text-gray-600">
                  I prioritize your needs and goals above all else. My recommendations are always based on what's best
                  for you, not what earns the highest commission.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent Communication</h3>
                <p className="text-gray-600">
                  I believe in complete transparency. You'll always understand exactly what you're buying, including
                  benefits, limitations, and costs.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  My service extends far beyond the sale. I'm available for policy reviews, claims assistance, and any
                  questions that arise throughout your policy term.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Solutions</h3>
                <p className="text-gray-600">
                  I don't believe in one-size-fits-all. Each recommendation is tailored to your specific financial
                  situation, goals, and risk tolerance.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Missing component definition
function Trophy(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

function Search(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

