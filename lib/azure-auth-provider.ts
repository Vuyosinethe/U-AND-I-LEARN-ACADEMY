import {
  PublicClientApplication,
  type Configuration,
  type AuthenticationResult,
  type PopupRequest,
} from "@azure/msal-browser"

/**
 * Lazy-initialised, shared MSAL instance.
 * All callers must go through `getMsal()` so we never hit the
 * "uninitialized_public_client_application" error again.
 */
let msalInstance: PublicClientApplication | null = null
let initialising: Promise<PublicClientApplication> | null = null

const msalConfig: Configuration = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID ?? "",
    authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID ?? "common"}`,
    redirectUri: typeof window !== "undefined" ? window.location.origin : "/",
  },
  cache: { cacheLocation: "localStorage" },
}

async function createAndInit(): Promise<PublicClientApplication> {
  const instance = new PublicClientApplication(msalConfig)
  await instance.initialize()
  return instance
}

export async function getMsal(): Promise<PublicClientApplication> {
  if (msalInstance) return msalInstance
  if (!initialising) initialising = createAndInit()
  msalInstance = await initialising
  return msalInstance
}

/**
 * Helpful wrappers
 */

function isPopupError(code: string) {
  return code === "user_cancelled" || code === "popup_window_error" || code === "popup_window_open_error"
}

export async function login(request: PopupRequest = { scopes: ["user.read"] }): Promise<AuthenticationResult | null> {
  const pca = await getMsal()

  // already signed-in?
  const [cached] = pca.getAllAccounts()
  if (cached) return { ...cached } as unknown as AuthenticationResult

  try {
    return await pca.loginPopup(request)
  } catch (e: any) {
    if (isPopupError(e.errorCode)) {
      // Fallback to full-page redirect
      await pca.loginRedirect(request)
      return null // flow continues after redirect
    }
    throw e
  }
}

export async function logout(): Promise<void> {
  const pca = await getMsal()
  return pca.logout()
}

export async function acquireToken(request: PopupRequest = { scopes: ["user.read"] }): Promise<AuthenticationResult> {
  const pca = await getMsal()
  return pca.acquireTokenSilent(request).catch(() => pca.acquireTokenPopup(request))
}

export async function handleRedirect(): Promise<AuthenticationResult | null> {
  const pca = await getMsal()
  return pca.handleRedirectPromise()
}
