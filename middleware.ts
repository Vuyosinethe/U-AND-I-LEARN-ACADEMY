import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // This is a simplified middleware
  // In a real application, you would verify the JWT token here

  const isLoggedIn = request.cookies.has("authSession")
  const isAuthPage = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/register")

  if (isAuthPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/dashboard/student", request.url))
    }
    return NextResponse.next()
  }

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
}
