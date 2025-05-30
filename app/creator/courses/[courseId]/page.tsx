'use client'

import { useParams } from 'next/navigation'

export default function EditCoursePage() {
  const params = useParams()
  const courseId = params.courseId

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Course: {courseId}</h1>
      {/* Add form for editing course {courseId} here */}
      <p>Form for editing course {courseId} will be here.</p>
    </div>
  )
}
