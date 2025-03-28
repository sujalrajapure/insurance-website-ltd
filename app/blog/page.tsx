import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance Insights</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Stay informed with the latest articles on insurance planning, tax savings, and financial security.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="text" placeholder="Search articles..." className="pl-10" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
              <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                All
              </Button>
              <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                Tax Planning
              </Button>
              <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                Retirement
              </Button>
              <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                Child Planning
              </Button>
              <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                Health Insurance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Featured Article" fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                  <Tag className="h-3 w-3 mr-1" />
                  Featured
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  March 15, 2023
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Clock className="h-3 w-3 mr-1" />5 min read
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Ultimate Guide to Tax Saving Through Insurance
              </h2>

              <p className="text-gray-600 mb-6">
                Discover how strategic insurance planning can help you maximize your tax benefits under Section 80C and
                other provisions of the Income Tax Act. This comprehensive guide covers everything from term insurance
                to ULIPs and pension plans.
              </p>

              <Button asChild>
                <Link href="/blog/tax-saving-guide">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest insights on insurance, financial planning, and wealth creation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard
              title="5 Ways Insurance Can Help You Save Taxes"
              excerpt="Discover how the right insurance policies can help you maximize your tax benefits under Section 80C and other provisions."
              category="Tax Planning"
              date="March 15, 2023"
              readTime="5 min read"
              slug="tax-saving-tips"
              imageSrc="/placeholder.svg?height=200&width=400"
            />

            <BlogCard
              title="Planning Your Child's Education with Insurance"
              excerpt="Learn how to create a solid financial foundation for your child's education through strategic insurance planning."
              category="Child Planning"
              date="February 28, 2023"
              readTime="4 min read"
              slug="child-education-planning"
              imageSrc="/placeholder.svg?height=200&width=400"
            />

            <BlogCard
              title="Retirement Planning: Start Early, Retire Rich"
              excerpt="Explore how starting your retirement planning early with the right insurance products can lead to a comfortable retirement."
              category="Retirement"
              date="January 10, 2023"
              readTime="6 min read"
              slug="retirement-planning"
              imageSrc="/placeholder.svg?height=200&width=400"
            />

            <BlogCard
              title="Understanding Critical Illness Coverage"
              excerpt="Learn about the importance of critical illness coverage and how it differs from regular health insurance policies."
              category="Health Insurance"
              date="December 5, 2022"
              readTime="7 min read"
              slug="critical-illness-coverage"
              imageSrc="/placeholder.svg?height=200&width=400"
            />

            <BlogCard
              title="Term Insurance vs. Whole Life Insurance"
              excerpt="A comprehensive comparison of term insurance and whole life insurance to help you make an informed decision."
              category="Life Insurance"
              date="November 18, 2022"
              readTime="8 min read"
              slug="term-vs-whole-life"
              imageSrc="/placeholder.svg?height=200&width=400"
            />

            <BlogCard
              title="How to Choose the Right Health Insurance"
              excerpt="A step-by-step guide to selecting the perfect health insurance policy for you and your family's needs."
              category="Health Insurance"
              date="October 22, 2022"
              readTime="6 min read"
              slug="choosing-health-insurance"
              imageSrc="/placeholder.svg?height=200&width=400"
            />
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most read topics to enhance your insurance and financial knowledge.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TopicCard title="Tax Planning" count={12} icon={<TaxIcon className="h-8 w-8 text-blue-600" />} />

            <TopicCard title="Retirement" count={8} icon={<RetirementIcon className="h-8 w-8 text-blue-600" />} />

            <TopicCard title="Child Planning" count={10} icon={<ChildIcon className="h-8 w-8 text-blue-600" />} />

            <TopicCard title="Health Insurance" count={15} icon={<HealthIcon className="h-8 w-8 text-blue-600" />} />

            <TopicCard title="Life Insurance" count={18} icon={<LifeIcon className="h-8 w-8 text-blue-600" />} />

            <TopicCard title="Investment" count={9} icon={<InvestmentIcon className="h-8 w-8 text-blue-600" />} />

            <TopicCard title="Claims" count={7} icon={<ClaimsIcon className="h-8 w-8 text-blue-600" />} />

            <TopicCard
              title="Financial Planning"
              count={14}
              icon={<PlanningIcon className="h-8 w-8 text-blue-600" />}
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insurance insights, tips, and updates delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="bg-white text-gray-900" />
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Subscribe</Button>
            </div>

            <p className="text-sm text-blue-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function BlogCard({ title, excerpt, category, date, readTime, slug, imageSrc }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4 mb-2">
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
            <Tag className="h-3 w-3 mr-1" />
            {category}
          </span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex items-center gap-3 text-xs">
          <span className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </span>
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Button asChild variant="link" className="p-0 h-auto text-blue-600">
          <Link href={`/blog/${slug}`}>
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function TopicCard({ title, count, icon }) {
  return (
    <Link href={`/blog/category/${title.toLowerCase().replace(" ", "-")}`}>
      <Card className="hover:border-blue-200 hover:shadow-md transition-all">
        <CardContent className="flex flex-col items-center text-center p-6">
          <div className="mb-4">{icon}</div>
          <CardTitle className="text-lg mb-1">{title}</CardTitle>
          <p className="text-sm text-gray-500">{count} Articles</p>
        </CardContent>
      </Card>
    </Link>
  )
}

// Custom icons for topics
function TaxIcon(props) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}

function RetirementIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ChildIcon(props) {
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
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    </svg>
  )
}

function HealthIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  )
}

function LifeIcon(props) {
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
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  )
}

function InvestmentIcon(props) {
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
      <path d="M2 20h20" />
      <path d="M5 20V8.2a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V20" />
      <path d="M13 20V4.2a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V20" />
    </svg>
  )
}

function ClaimsIcon(props) {
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
      <path d="m9 9 6 6" />
      <path d="m15 9-6 6" />
    </svg>
  )
}

function PlanningIcon(props) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

