'use client'
import { Sidebar } from '@/components/creator/Sidebar'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || user.role !== 'creator')) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading || !user || user.role !== 'creator') {
    return <div>Loading or unauthorized...</div> // Or a proper loading/unauthorized component
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  )
} 