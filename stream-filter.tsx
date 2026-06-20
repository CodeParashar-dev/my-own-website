"use client"

import { Atom, Binary, Calculator, Cog, Layers } from "lucide-react"
import { cn } from "@/lib/utils"
import { type StreamFilter as StreamFilterType } from "@/lib/colleges-data"

interface StreamFilterProps {
  selectedStream: StreamFilterType
  setSelectedStream: (stream: StreamFilterType) => void
}

const streamData = [
  { name: "All" as const, icon: Layers, description: "All STEM Colleges" },
  { name: "Science" as const, icon: Atom, description: "Physics, Chemistry, Biology" },
  { name: "Technology" as const, icon: Binary, description: "IT, Data Science, AI" },
  { name: "Engineering" as const, icon: Cog, description: "Civil, Mechanical, Electrical" },
  { name: "Mathematics" as const, icon: Calculator, description: "Pure & Applied Math" },
]

export function StreamFilter({ selectedStream, setSelectedStream }: StreamFilterProps) {
  return (
    <section id="streams" className="px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-bold text-foreground">Filter by Stream</h2>
        <p className="mt-2 text-center text-muted-foreground">
          Choose a STEM discipline to explore relevant colleges
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {streamData.map((stream) => {
            const Icon = stream.icon
            const isSelected = selectedStream === stream.name
            return (
              <button
                key={stream.name}
                onClick={() => setSelectedStream(stream.name)}
                className={cn(
                  "group flex items-center gap-3 rounded-lg border px-6 py-4 transition-all",
                  isSelected
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:bg-primary/5"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isSelected ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  )}
                />
                <div className="text-left">
                  <p className={cn("font-medium", isSelected && "text-foreground")}>
                    {stream.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{stream.description}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
