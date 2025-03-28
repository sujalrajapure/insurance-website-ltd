import Image from "next/image"
import Link from "next/link"
import { Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCard from "@/components/testimonial-card"

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Don't just take my word for it. Here's what my clients have to say about their experience working with me.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-blue-600 p-8 md:p-12 flex items-center">
                  <div>
                    <Quote className="h-12 w-12 text-blue-300 mb-6" />
                    <blockquote className="text-xl md:text-2xl text-white mb-6">
                      "Working with this insurance agent has been a game-changer for my family's financial security. The
                      personalized attention and expert guidance we received helped us make informed decisions that
                      perfectly aligned with our long-term goals."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Rajesh Kumar"
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Rajesh Kumar</p>
                        <p className="text-blue-200">CEO, Tech Innovations</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative min-h-[300px] md:min-h-full">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Happy Client" fill className="object-cover" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What My Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I've had the privilege of helping hundreds of clients secure their financial future. Here are some of
              their experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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

            <TestimonialCard
              name="Sunita Reddy"
              role="Business Owner"
              testimonial="As a business owner, I needed comprehensive coverage for both personal and business needs. The tailored solutions provided have given me peace of mind."
              rating={5}
              imageSrc="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              name="Vikram Singh"
              role="Teacher"
              testimonial="The educational approach to explaining insurance concepts made a complex subject accessible. I now understand exactly what I'm paying for and why."
              rating={5}
              imageSrc="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              name="Ananya Desai"
              role="Homemaker"
              testimonial="The attention to detail in understanding our family's unique needs was impressive. The recommended policies have provided excellent coverage at affordable rates."
              rating={5}
              imageSrc="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              name="Rahul Mehta"
              role="Software Engineer"
              testimonial="I appreciate the regular policy reviews and updates. It's reassuring to know that my insurance coverage evolves with my changing life circumstances."
              rating={4}
              imageSrc="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch these short videos to hear directly from my clients about their insurance experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-video bg-gray-200">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Video Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Ravi's Story</h3>
                <p className="text-gray-600">How the right insurance saved his family during a medical emergency</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-video bg-gray-200">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Video Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Meera's Experience</h3>
                <p className="text-gray-600">Planning for retirement with the right pension plan</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-video bg-gray-200">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Video Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">The Kumar Family</h3>
                <p className="text-gray-600">Securing their children's education with the right policies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories of how the right insurance planning made a difference in my clients' lives.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Sharma Family"
                      width={300}
                      height={300}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">The Sharma Family's Medical Emergency</h3>
                    <p className="text-gray-600 mb-4">
                      When Mr. Sharma was diagnosed with a critical illness, the family was devastated. However, the
                      critical illness rider we had added to his life insurance policy provided a lump sum payment that
                      covered his treatment costs without depleting their savings.
                    </p>
                    <p className="text-gray-600">
                      "The foresight to recommend that critical illness rider made all the difference during our
                      difficult time. We could focus on recovery instead of worrying about finances."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Retirement Planning"
                      width={300}
                      height={300}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mr. Patel's Comfortable Retirement</h3>
                    <p className="text-gray-600 mb-4">
                      Mr. Patel started planning for retirement at age 40 with a combination of pension plans and
                      endowment policies. By age 60, he had built a substantial corpus that now provides him with a
                      comfortable monthly income, allowing him to enjoy his retirement years without financial stress.
                    </p>
                    <p className="text-gray-600">
                      "The structured approach to retirement planning has given me financial independence. I can now
                      pursue my hobbies and travel without worrying about money."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Education Planning"
                      width={300}
                      height={300}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Securing Riya's Education</h3>
                    <p className="text-gray-600 mb-4">
                      The Mehta family started a child plan when their daughter Riya was just 3 years old. When she
                      turned 18 and got accepted into a prestigious engineering college, the policy matured with perfect
                      timing, providing the funds needed for her education.
                    </p>
                    <p className="text-gray-600">
                      "We never had to compromise on our daughter's education because we had planned ahead. The policy
                      matured exactly when we needed it the most."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's work together to create a personalized insurance plan that meets your unique needs and goals.
          </p>

          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

