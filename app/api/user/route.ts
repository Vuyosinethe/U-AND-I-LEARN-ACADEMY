import { type NextRequest, NextResponse } from "next/server"
import { createUserProfile, getUserProfile, updateUserProfile } from "@/lib/user-service"

// GET /api/user/:id
export async function GET(request: NextRequest) {
  try {
    // In a real app, you would validate the JWT token here
    const userId = request.nextUrl.searchParams.get("id")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const result = await getUserProfile(userId)

    if (!result.success) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json(result.user)
  } catch (error) {
    console.error("Error fetching user:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// POST /api/user
export async function POST(request: NextRequest) {
  try {
    const userData = await request.json()

    // Validate required fields
    if (!userData.id || !userData.email || !userData.firstName || !userData.lastName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await createUserProfile(userData)

    if (!result.success) {
      return NextResponse.json({ error: "Failed to create user profile" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error("Error creating user:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// PUT /api/user
export async function PUT(request: NextRequest) {
  try {
    const userData = await request.json()

    if (!userData.id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const result = await updateUserProfile(userData)

    if (!result.success) {
      return NextResponse.json({ error: "Failed to update user profile" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating user:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

