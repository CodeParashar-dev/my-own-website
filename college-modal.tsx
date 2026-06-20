"use client"

import Image from "next/image"
import {
  MapPin,
  Star,
  Award,
  IndianRupee,
  Calendar,
  Building2,
  CheckCircle2,
  GraduationCap,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { type College } from "@/lib/colleges-data"

interface CollegeModalProps {
  college: College | null
  open: boolean
  onClose: () => void
}

export function CollegeModal({ college, open, onClose }: CollegeModalProps) {
  if (!college) return null

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
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-border bg-card p-0">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={college.imageUrl}
            alt={college.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-card/80 p-2 backdrop-blur transition-colors hover:bg-card"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap gap-2">
              <Badge className={streamColors[college.stream]}>{college.stream}</Badge>
              <Badge variant="secondary" className="bg-card/80 text-foreground backdrop-blur">
                <Award className="mr-1 h-3 w-3" />
                Rank #{college.ranking}
              </Badge>
              <Badge variant="secondary" className="bg-card/80 text-foreground backdrop-blur">
                {college.accreditation}
              </Badge>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <DialogHeader className="text-left">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {college.name}
            </DialogTitle>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{college.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium text-foreground">{college.rating}/5</span>
              </div>
            </div>
          </DialogHeader>

          <p className="mt-4 text-muted-foreground">{college.description}</p>

          <Separator className="my-6" />

          {/* Fee Structure */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <IndianRupee className="h-5 w-5 text-primary" />
              Fee Structure
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-secondary p-4">
                <p className="text-sm text-muted-foreground">Annual Fees</p>
                <p className="mt-1 text-xl font-bold text-foreground">
                  {formatCurrency(college.fees.annual)}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-secondary p-4">
                <p className="text-sm text-muted-foreground">Total Fees</p>
                <p className="mt-1 text-xl font-bold text-foreground">
                  {formatCurrency(college.fees.total)}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-secondary p-4">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="mt-1 text-xl font-bold text-foreground">
                  {college.fees.duration}
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Courses Offered */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <GraduationCap className="h-5 w-5 text-primary" />
              Courses Offered
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {college.courses.map((course) => (
                <Badge key={course} variant="outline" className="px-3 py-1">
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Facilities */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Building2 className="h-5 w-5 text-primary" />
              Facilities
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {college.facilities.map((facility) => (
                <div
                  key={facility}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{facility}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* College Info */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Established {college.established}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>{college.type} Institution</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Save College</Button>
              <Button>Apply Now</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
