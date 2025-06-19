"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { login, handleRedirect } from "@/lib/azure-auth-provider"

export default function LoginPage() {
  const router = useRouter()
  const [pending, setPending] = useState(false)

  // Handle the redirect response (runs once on mount)
  useEffect(() => {
    handleRedirect().then((res) => {
      if (res) router.replace("/")
    })
  }, [router])

  const handleLogin = useCallback(async () => {
    setPending(true)
    try {
      const result = await login()
      if (result) router.replace("/")
      // when loginRedirect starts, code below won’t run (page reloads)
    } catch (err: any) {
      if (err.errorCode !== "user_cancelled") {
        console.error("Unexpected login error:", err)
        alert("Login failed – see console for details.")
      }
    } finally {
      setPending(false)
    }
  }, [router])

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Button disabled={pending} onClick={handleLogin} size="lg">
        {pending ? "Signing in…" : "Sign in with Microsoft"}
      </Button>
    </main>
  )
}
