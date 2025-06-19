"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon, CheckCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAzureAuth } from "@/lib/azure-auth-provider"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")
  const [forgotPasswordSubmitted, setForgotPasswordSubmitted] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)

  const router = useRouter()
  const searchParams = useSearchParams()
  const justRegistered = searchParams?.get("registered") === "true"

  const { login, isAuthenticated, isLoading } = useAzureAuth()

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (isAuthenticated && !isLoading) {
      router.push("/dashboard/student")
    }
  }, [isAuthenticated, isLoading, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError(null)
    setIsSubmitting(true)

    try {
      // Use Azure AD B2C for authentication
      await login()
      // The redirect will happen in the useEffect above when isAuthenticated changes
    } catch (error) {
      console.error("Login error:", error)
      setLoginError("Failed to sign in. Please check your credentials and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // In a real implementation, this would trigger a password reset flow in Azure AD B2C
      // For now, we'll just simulate it
      setForgotPasswordSubmitted(true)

      // Close dialog after a delay
      setTimeout(() => {
        setShowForgotPassword(false)
        setForgotPasswordSubmitted(false)
        setForgotPasswordEmail("")
      }, 3000)
    } catch (error) {
      console.error("Password reset error:", error)
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
              <h1 className="text-3xl font-bold">Welcome back</h1>
              <p className="text-muted-foreground">Enter your credentials to access your account</p>
            </div>

            {justRegistered && (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  Your account has been created successfully. Please log in with your credentials.
                </AlertDescription>
              </Alert>
            )}

            {loginError && (
              <Alert className="bg-red-50 border-red-200">
                <AlertDescription className="text-red-800">{loginError}</AlertDescription>
              </Alert>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} required />
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
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
              <div className="text-center text-sm">
                <button
                  type="button"
                  className="underline underline-offset-4 hover:text-primary"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot your password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full" onClick={login}>
                  Google
                </Button>
                <Button variant="outline" className="w-full" onClick={login}>
                  Microsoft
                </Button>
              </div>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="/register" className="underline underline-offset-4 hover:text-primary">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
          <div className="hidden md:block relative rounded-lg overflow-hidden">
            <Image
              src="/images/students-studying.jpg"
              alt="Students studying together"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Forgot Password Dialog */}
      <Dialog open={showForgotPassword} onOpenChange={setShowForgotPassword}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Reset your password</DialogTitle>
            <DialogDescription>
              Enter your email address and we'll send you a link to reset your password.
            </DialogDescription>
          </DialogHeader>
          {forgotPasswordSubmitted ? (
            <div className="flex flex-col items-center py-4">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-center">
                If an account exists with this email, we've sent password reset instructions to {forgotPasswordEmail}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleForgotPasswordSubmit}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="reset-email">Email</Label>
                  <Input
                    id="reset-email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setShowForgotPassword(false)}>
                  Cancel
                </Button>
                <Button type="submit">Send Reset Link</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
