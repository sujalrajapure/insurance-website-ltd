import Image from "next/image"
import { Star, StarHalf } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  testimonial: string
  rating: number
  imageSrc: string
}

export default function TestimonialCard({ name, role, testimonial, rating, imageSrc }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <Image src={imageSrc || "/placeholder.svg"} alt={name} width={60} height={60} className="rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>

        <div className="flex mb-4">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
          {rating % 1 !== 0 && <StarHalf className="h-5 w-5 text-yellow-400 fill-current" />}
        </div>

        <p className="text-gray-600 italic">"{testimonial}"</p>
      </CardContent>
    </Card>
  )
}

