"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAzureAuth } from "@/lib/azure-auth-provider"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    grade: "",
    school: "",
  })
  const [registerError, setRegisterError] = useState<string | null>(null)

  const router = useRouter()
  const { login, isAuthenticated, isLoading } = useAzureAuth()

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (isAuthenticated && !isLoading) {
      router.push("/dashboard/student")
    }
  }, [isAuthenticated, isLoading, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setRegisterError(null)
    setIsSubmitting(true)

    try {
      // In a real implementation, this would create a user in Azure AD B2C
      // and then store additional user data in your database

      // For now, we'll simulate the registration process
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // After successful registration, redirect to login page
      router.push("/login?registered=true")
    } catch (error) {
      console.error("Registration error:", error)
      setRegisterError("Failed to create account. Please try again later.")
    } finally {
      setIsSubmitting(false)
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

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image
            src="/images/ui-learn-logo-new.png"
            alt="U&I LEARN ACADEMY"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 w-full max-w-4xl">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-3xl font-bold">Create an account</h1>
              <p className="text-muted-foreground">Enter your information to get started</p>
            </div>

            {registerError && (
              <Alert className="bg-red-50 border-red-200">
                <AlertDescription className="text-red-800">{registerError}</AlertDescription>
              </Alert>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">Grade</Label>
                <select
                  id="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select your grade</option>
                  <option value="12">Grade 12</option>
                  <option value="11">Grade 11</option>
                  <option value="10">Grade 10</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="school">School</Label>
                <Input id="school" value={formData.school} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
          <div className="hidden md:block relative rounded-lg overflow-hidden">
            <Image src="/images/classroom.jpg" alt="Classroom setting" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </div>
  )
}

