"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { login, handleRedirect, getMsal } from "@/lib/azure-auth-provider"
import { BookOpen, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Check if user is already logged in
  useEffect(() => {
    checkExistingAuth()
  }, [])

  // Handle redirect response
  useEffect(() => {
    handleRedirect().then((res) => {
      if (res) router.replace("/")
    })
  }, [router])

  const checkExistingAuth = async () => {
    try {
      const pca = await getMsal()
      const accounts = pca.getAllAccounts()
      if (accounts.length > 0) {
        router.replace("/")
      }
    } catch (error) {
      console.error("Auth check failed:", error)
    }
  }

  const handleLogin = useCallback(async () => {
    setPending(true)
    setError(null)

    try {
      const result = await login()
      if (result) {
        router.replace("/")
      }
    } catch (err: any) {
      const code = err?.errorCode || err?.code

      if (code === "user_cancelled") {
        setError("Sign-in was cancelled. Please try again.")
      } else if (code === "popup_window_error" || code === "popup_window_open_error") {
        setError("The sign-in popup was blocked. Please allow pop-ups for this site and try again.")
      } else {
        console.error("Unexpected login error:", err)
        setError("Sign-in failed. Please check your connection and try again.")
      }
    } finally {
      setPending(false)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">U&I Learn Academy</CardTitle>
          <CardDescription>Sign in with your Microsoft account to access your courses</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button onClick={handleLogin} disabled={pending} className="w-full h-12 text-base" size="lg">
            {pending ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              "Sign in with Microsoft"
            )}
          </Button>

          <div className="text-center text-sm text-gray-500">
            <p>By signing in, you agree to our terms of service and privacy policy.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
