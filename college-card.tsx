"use client"

import Image from "next/image"
import { MapPin, Star, Award, IndianRupee, Calendar, Building2, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { type College } from "@/lib/colleges-data"

interface CollegeCardProps {
  college: College
  onViewDetails: (college: College) => void
}

export function CollegeCard({ college, onViewDetails }: CollegeCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const streamColors = {
    Science: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Technology: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Engineering: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Mathematics: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  }

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="relative p-0">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={college.imageUrl}
            alt={college.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute right-3 top-3 flex gap-2">
            <Badge className={streamColors[college.stream]}>{college.stream}</Badge>
            <Badge variant="secondary" className="bg-card/80 text-foreground backdrop-blur">
              <Award className="mr-1 h-3 w-3" />
              #{college.ranking}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {college.name}
            </h3>
            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="truncate">{college.city}, {college.state}</span>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1 rounded-md bg-primary/10 px-2 py-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-foreground">{college.rating}</span>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
          {college.description}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 rounded-md bg-secondary p-2">
            <IndianRupee className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Annual Fees</p>
              <p className="text-sm font-medium text-foreground">{formatCurrency(college.fees.annual)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-secondary p-2">
            <Calendar className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="text-sm font-medium text-foreground">{college.fees.duration}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {college.courses.slice(0, 3).map((course) => (
            <Badge key={course} variant="outline" className="text-xs">
              {course}
            </Badge>
          ))}
          {college.courses.length > 3 && (
            <Badge variant="outline" className="text-xs text-muted-foreground">
              +{college.courses.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-4 w-4" />
          <span>{college.type}</span>
          <span className="text-border">•</span>
          <span>Est. {college.established}</span>
        </div>
        <Button size="sm" onClick={() => onViewDetails(college)}>
          View Details
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
