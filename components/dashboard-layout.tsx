"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, BookOpen, Calendar, CreditCard, User, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAzureAuth } from "@/lib/azure-auth-provider"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { logout, isAuthenticated, isLoading } = useAzureAuth()

  // Check if user is authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router])

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  // If still checking authentication status, show loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  // If not authenticated, don't render anything (redirect will happen in useEffect)
  if (!isAuthenticated && !isLoading) {
    return null
  }

  const isStudent = pathname?.includes("/dashboard/student")
  const isAdmin = pathname?.includes("/dashboard/admin")

  const studentNavItems = [
    {
      name: "Dashboard",
      href: "/dashboard/student",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "My Sessions",
      href: "/dashboard/student/sessions",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      name: "Study Materials",
      href: "/dashboard/student/materials",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Payments",
      href: "/dashboard/student/payments",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      name: "Profile",
      href: "/dashboard/student/profile",
      icon: <User className="h-5 w-5" />,
    },
  ]

  const adminNavItems = [
    {
      name: "Dashboard",
      href: "/dashboard/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Students",
      href: "/dashboard/admin/students",
      icon: <User className="h-5 w-5" />,
    },
    {
      name: "Sessions",
      href: "/dashboard/admin/sessions",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      name: "Materials",
      href: "/dashboard/admin/materials",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Payments",
      href: "/dashboard/admin/payments",
      icon: <CreditCard className="h-5 w-5" />,
    },
  ]

  const navItems = isStudent ? studentNavItems : adminNavItems

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 border-b">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/ui-learn-logo-new.png"
                alt="U&I LEARN ACADEMY"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  pathname === item.href ? "bg-orange-50 text-orange-600" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
