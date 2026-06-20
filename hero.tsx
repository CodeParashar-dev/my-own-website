"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-20 lg:px-8 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Find Your Perfect{" "}
          <span className="text-primary">STEM College</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          Discover top colleges across Science, Technology, Engineering, and Mathematics. 
          Compare fees, locations, courses, and find your ideal academic destination.
        </p>

        {/* Search Bar */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search colleges by name, location, or course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 w-full rounded-lg border border-border bg-card pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button size="lg" className="h-14 px-8">
              Search Colleges
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="mt-1 text-sm text-muted-foreground">Colleges Listed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">4</p>
            <p className="mt-1 text-sm text-muted-foreground">STEM Streams</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">50K+</p>
            <p className="mt-1 text-sm text-muted-foreground">Students Helped</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">200+</p>
            <p className="mt-1 text-sm text-muted-foreground">Cities Covered</p>
          </div>
        </div>
      </div>
    </section>
  )
}
