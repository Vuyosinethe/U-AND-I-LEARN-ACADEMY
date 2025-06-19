import { type Configuration, LogLevel } from "@azure/msal-browser"

export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_AD_B2C_CLIENT_ID as string,
    authority: `${process.env.NEXT_PUBLIC_AZURE_AD_B2C_AUTHORITY}${process.env.NEXT_PUBLIC_AZURE_AD_B2C_PRIMARY_USER_FLOW}`,
    knownAuthorities: [process.env.NEXT_PUBLIC_AZURE_AD_B2C_KNOWNAUTHORITIES as string],
    redirectUri: typeof window !== "undefined" ? window.location.origin : "",
    postLogoutRedirectUri: typeof window !== "undefined" ? window.location.origin : "",
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message)
            break
          case LogLevel.Info:
            console.info(message)
            break
          case LogLevel.Verbose:
            console.debug(message)
            break
          case LogLevel.Warning:
            console.warn(message)
            break
          default:
            break
        }
      },
      piiLoggingEnabled: false,
    },
  },
}
