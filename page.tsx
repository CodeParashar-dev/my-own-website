"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StreamFilter } from "@/components/stream-filter"
import { CollegeGrid } from "@/components/college-grid"
import { Footer } from "@/components/footer"
import { colleges, type StreamFilter as StreamFilterType } from "@/lib/colleges-data"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStream, setSelectedStream] = useState<StreamFilterType>("All")

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      // Filter by stream
      const matchesStream = selectedStream === "All" || college.stream === selectedStream

      // Filter by search query
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        searchQuery === "" ||
        college.name.toLowerCase().includes(query) ||
        college.city.toLowerCase().includes(query) ||
        college.state.toLowerCase().includes(query) ||
        college.courses.some((course) => course.toLowerCase().includes(query))

      return matchesStream && matchesSearch
    })
  }, [searchQuery, selectedStream])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <StreamFilter selectedStream={selectedStream} setSelectedStream={setSelectedStream} />
        
        <section id="colleges" className="px-4 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedStream === "All" ? "All Colleges" : `${selectedStream} Colleges`}
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Showing {filteredColleges.length} {filteredColleges.length === 1 ? "college" : "colleges"}
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>
            </div>

            <CollegeGrid colleges={filteredColleges} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
