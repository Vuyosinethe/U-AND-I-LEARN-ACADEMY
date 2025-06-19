"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getMsal, logout } from "@/lib/azure-auth-provider"
import { LogOut, BookOpen, Users, Calendar } from "lucide-react"

interface UserAccount {
  name?: string
  username?: string
  homeAccountId?: string
}

export default function HomePage() {
  const router = useRouter()
  const [user, setUser] = useState<UserAccount | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const pca = await getMsal()
      const accounts = pca.getAllAccounts()

      if (accounts.length > 0) {
        setUser(accounts[0])
      } else {
        router.push("/login")
      }
    } catch (error) {
      console.error("Auth check failed:", error)
      router.push("/login")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">U&I Learn Academy</h1>
            </div>

            <div className="flex items-center space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>
                  {user.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("") || "U"}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-700">{user.name || user.username || "User"}</span>
              <Button variant="outline" size="sm" onClick={handleLogout} className="flex items-center space-x-1">
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name?.split(" ")[0] || "Student"}!
          </h2>
          <p className="text-gray-600">Ready to continue your learning journey?</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <CardTitle className="ml-2 text-lg">My Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Access your enrolled courses and track progress</CardDescription>
              <div className="mt-4">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <p className="text-sm text-gray-500">Active Courses</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Calendar className="h-6 w-6 text-green-600" />
              <CardTitle className="ml-2 text-lg">Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>View upcoming classes and assignments</CardDescription>
              <div className="mt-4">
                <div className="text-2xl font-bold text-green-600">2</div>
                <p className="text-sm text-gray-500">Today's Classes</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Users className="h-6 w-6 text-purple-600" />
              <CardTitle className="ml-2 text-lg">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Connect with fellow students and instructors</CardDescription>
              <div className="mt-4">
                <div className="text-2xl font-bold text-purple-600">12</div>
                <p className="text-sm text-gray-500">New Messages</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest learning activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Completed "Introduction to React" lesson</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Submitted assignment for "Web Development Basics"</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Joined study group "JavaScript Fundamentals"</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
