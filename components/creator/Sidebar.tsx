'use client'
import Link from 'next/link'
import { useAuth } from '@/app/context/AuthContext'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileEdit,
  Settings,
  LogOut,
} from 'lucide-react'

export function Sidebar() {
  const { logout } = useAuth()

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Course Creator</h2>
      </div>
      <nav className="space-y-1 p-4">
        <Link
          href="/creator/dashboard"
          className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-100"
        >
          <LayoutDashboard className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/creator/courses"
          className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-100"
        >
          <BookOpen className="h-5 w-5" />
          <span>Courses</span>
        </Link>
        <Link
          href="/creator/students"
          className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-100"
        >
          <Users className="h-5 w-5" />
          <span>Students</span>
        </Link>
        <Link
          href="/creator/landing-pages"
          className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-100"
        >
          <FileEdit className="h-5 w-5" />
          <span>Landing Pages</span>
        </Link>
        <Link
          href="/creator/settings"
          className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-100"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </nav>
    </div>
  )
}