import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Professional Insurance Agent - LIC Insurance Solutions",
  description:
    "Expert insurance advice from a 10-year experienced LIC agent. Get personalized insurance solutions for life, health, pension, and child plans.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container mx-auto px-4 md:px-6">
                <div className="py-2 flex justify-between items-center text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <a href="tel:+919876543210" className="flex items-center hover:text-blue-600">
                      <Phone className="h-4 w-4 mr-1" />
                      <span>+91 98765 43210</span>
                    </a>
                    <a href="mailto:agent@licinsurance.com" className="flex items-center hover:text-blue-600">
                      <Mail className="h-4 w-4 mr-1" />
                      <span>agent@licinsurance.com</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href="#" className="hover:text-blue-600">
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-blue-600">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-blue-600">
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-blue-600">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="py-4 flex flex-col md:flex-row justify-between items-center">
                  <Link href="/" className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
                    LIC Insurance Expert
                  </Link>

                  <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                    <Link href="/" className="font-medium hover:text-blue-600">
                      Home
                    </Link>
                    <Link href="/about" className="font-medium hover:text-blue-600">
                      About
                    </Link>
                    <Link href="/insurance-plans" className="font-medium hover:text-blue-600">
                      Insurance Plans
                    </Link>
                    <Link href="/blog" className="font-medium hover:text-blue-600">
                      Blog
                    </Link>
                    <Link href="/testimonials" className="font-medium hover:text-blue-600">
                      Testimonials
                    </Link>
                    <Link href="/contact" className="font-medium hover:text-blue-600">
                      Contact
                    </Link>
                  </nav>

                  <Link href="/contact" className="hidden md:block">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                      Get Free Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </header>

            {children}

            <footer className="bg-gray-900 text-white pt-16 pb-8">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4">LIC Insurance Expert</h3>
                    <p className="text-gray-400 mb-4">
                      Providing expert insurance advice and personalized solutions for over 10 years.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-white">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/" className="text-gray-400 hover:text-white">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-gray-400 hover:text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/insurance-plans" className="text-gray-400 hover:text-white">
                          Insurance Plans
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="text-gray-400 hover:text-white">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/testimonials" className="text-gray-400 hover:text-white">
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-gray-400 hover:text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Insurance Products</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/insurance-plans#life" className="text-gray-400 hover:text-white">
                          Life Insurance
                        </Link>
                      </li>
                      <li>
                        <Link href="/insurance-plans#pension" className="text-gray-400 hover:text-white">
                          Pension Plans
                        </Link>
                      </li>
                      <li>
                        <Link href="/insurance-plans#child" className="text-gray-400 hover:text-white">
                          Child Plans
                        </Link>
                      </li>
                      <li>
                        <Link href="/insurance-plans#health" className="text-gray-400 hover:text-white">
                          Health Insurance
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                        <span className="text-gray-400">123 Insurance Plaza, MG Road, Bangalore, Karnataka 560001</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-2" />
                        <a href="tel:+919876543210" className="text-gray-400 hover:text-white">
                          +91 98765 43210
                        </a>
                      </li>
                      <li className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-400 mr-2" />
                        <a href="mailto:agent@licinsurance.com" className="text-gray-400 hover:text-white">
                          agent@licinsurance.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                  <p className="text-gray-400 text-center text-sm">
                    &copy; {new Date().getFullYear()} LIC Insurance Expert. All rights reserved. IRDAI Registration No:
                    AB123456789
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function MapPin(props) {
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



import './globals.css'