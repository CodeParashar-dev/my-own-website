"use client"

import { useState } from "react"
import { CollegeCard } from "./college-card"
import { CollegeModal } from "./college-modal"
import { type College } from "@/lib/colleges-data"
import { Empty } from "@/components/ui/empty"
import { GraduationCap } from "lucide-react"

interface CollegeGridProps {
  colleges: College[]
}

export function CollegeGrid({ colleges }: CollegeGridProps) {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleViewDetails = (college: College) => {
    setSelectedCollege(college)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedCollege(null)
  }

  if (colleges.length === 0) {
    return (
      <div className="py-20">
        <Empty
          icon={GraduationCap}
          title="No colleges found"
          description="Try adjusting your search or filter criteria to find colleges."
        />
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college) => (
          <CollegeCard
            key={college.id}
            college={college}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      <CollegeModal
        college={selectedCollege}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
