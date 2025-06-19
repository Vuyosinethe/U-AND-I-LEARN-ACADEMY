"use client"

import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { login } from "@/lib/azure-auth-provider"

export default function LoginPage() {
  const router = useRouter()
  const [pending, setPending] = useState(false)

  const handleLogin = useCallback(async () => {
    try {
      setPending(true)
      await login() // waits for initialise() inside
      router.replace("/") // or wherever you want
    } catch (err) {
      console.error("Login error:", err)
      alert("Login failed – check the console for details.")
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
