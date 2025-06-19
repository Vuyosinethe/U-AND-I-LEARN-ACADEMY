"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import {
  PublicClientApplication,
  EventType,
  type EventMessage,
  type AuthenticationResult,
  type AccountInfo,
} from "@azure/msal-browser"
import { msalConfig } from "./azure-auth-config"

interface AzureAuthContextType {
  instance: PublicClientApplication
  accounts: AccountInfo[]
  currentAccount: AccountInfo | null
  isAuthenticated: boolean
  isLoading: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
  getToken: () => Promise<string | null>
}

const AzureAuthContext = createContext<AzureAuthContextType | null>(null)

export const AzureAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [instance] = useState<PublicClientApplication>(() => new PublicClientApplication(msalConfig))
  const [accounts, setAccounts] = useState<AccountInfo[]>([])
  const [currentAccount, setCurrentAccount] = useState<AccountInfo | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const callbackId = instance.addEventCallback((event: EventMessage) => {
      if (event.eventType === EventType.LOGIN_SUCCESS) {
        const result = event.payload as AuthenticationResult
        if (result.account) {
          setCurrentAccount(result.account)
          setIsAuthenticated(true)
        }
      }
      if (event.eventType === EventType.LOGOUT_SUCCESS) {
        setCurrentAccount(null)
        setIsAuthenticated(false)
      }
    })

    // Initialize
    const initializeAuth = async () => {
      try {
        setIsLoading(true)
        const currentAccounts = instance.getAllAccounts()
        setAccounts(currentAccounts)

        if (currentAccounts.length > 0) {
          setCurrentAccount(currentAccounts[0])
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error("Authentication initialization error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    initializeAuth()

    return () => {
      if (callbackId) {
        instance.removeEventCallback(callbackId)
      }
    }
  }, [instance])

  const login = async () => {
    try {
      setIsLoading(true)
      await instance.loginPopup({
        scopes: [process.env.NEXT_PUBLIC_AZURE_AD_B2C_SCOPE as string],
        prompt: "select_account",
      })
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      setIsLoading(true)
      await instance.logoutPopup({
        postLogoutRedirectUri: window.location.origin,
      })
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getToken = async (): Promise<string | null> => {
    if (!currentAccount) return null

    try {
      const response = await instance.acquireTokenSilent({
        scopes: [process.env.NEXT_PUBLIC_AZURE_AD_B2C_SCOPE as string],
        account: currentAccount,
      })
      return response.accessToken
    } catch (error) {
      console.error("Token acquisition error:", error)
      return null
    }
  }

  const contextValue: AzureAuthContextType = {
    instance,
    accounts,
    currentAccount,
    isAuthenticated,
    isLoading,
    login,
    logout,
    getToken,
  }

  return <AzureAuthContext.Provider value={contextValue}>{children}</AzureAuthContext.Provider>
}

export const useAzureAuth = () => {
  const context = useContext(AzureAuthContext)
  if (!context) {
    throw new Error("useAzureAuth must be used within an AzureAuthProvider")
  }
  return context
}
