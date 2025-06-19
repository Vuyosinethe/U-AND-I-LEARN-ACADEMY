"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/ui-learn-logo-new.png"
            alt="U&I LEARN ACADEMY Logo"
            width={120}
            height={60}
            className="h-auto"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-blue-600 hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-blue-600 hover:text-primary">
            About Us
          </Link>
          <Link href="/programs" className="text-sm font-medium text-blue-600 hover:text-primary">
            Programs
          </Link>
          <Link href="/contact" className="text-sm font-medium text-blue-600 hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <div className="relative">
            <Button
              variant="outline"
              className="flex items-center gap-1"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Dashboard
              <ChevronDown className="h-4 w-4" />
            </Button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border">
                <Link
                  href="/dashboard/student"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Student Dashboard
                </Link>
                <Link
                  href="/dashboard/admin"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Admin Dashboard
                </Link>
              </div>
            )}
          </div>
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-blue-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-blue-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/programs"
                className="text-sm font-medium text-blue-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-blue-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t">
                <p className="text-sm font-medium mb-2">Dashboards:</p>
                <Link
                  href="/dashboard/student"
                  className="text-sm font-medium text-blue-600 hover:text-primary block mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Student Dashboard
                </Link>
                <Link
                  href="/dashboard/admin"
                  className="text-sm font-medium text-blue-600 hover:text-primary block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
              </div>
            </nav>
            <div className="flex gap-4">
              <Button variant="outline" asChild className="flex-1">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
