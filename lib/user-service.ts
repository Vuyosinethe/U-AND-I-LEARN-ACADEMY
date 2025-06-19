import { TableClient } from "@azure/data-tables"

// This would typically be in a server-side file, not exposed to the client
const connectionString = process.env.AZURE_SQL_CONNECTION_STRING

// User interface
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  grade?: string
  school?: string
  createdAt: Date
  updatedAt: Date
}

// Create a user profile in Azure Table Storage
export async function createUserProfile(user: Omit<User, "createdAt" | "updatedAt">) {
  try {
    const tableClient = TableClient.fromConnectionString(connectionString as string, "Users")

    // Create the table if it doesn't exist
    await tableClient.createTable()

    const entity = {
      partitionKey: "Users",
      rowKey: user.id,
      ...user,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    await tableClient.createEntity(entity)
    return { success: true }
  } catch (error) {
    console.error("Error creating user profile:", error)
    return { success: false, error }
  }
}

// Get a user profile from Azure Table Storage
export async function getUserProfile(userId: string) {
  try {
    const tableClient = TableClient.fromConnectionString(connectionString as string, "Users")

    const entity = await tableClient.getEntity("Users", userId)
    return {
      success: true,
      user: {
        id: entity.rowKey,
        email: entity.email,
        firstName: entity.firstName,
        lastName: entity.lastName,
        grade: entity.grade,
        school: entity.school,
        createdAt: new Date(entity.createdAt),
        updatedAt: new Date(entity.updatedAt),
      },
    }
  } catch (error) {
    console.error("Error getting user profile:", error)
    return { success: false, error }
  }
}

// Update a user profile in Azure Table Storage
export async function updateUserProfile(user: Partial<User> & { id: string }) {
  try {
    const tableClient = TableClient.fromConnectionString(connectionString as string, "Users")

    // Get the existing entity
    const existingEntity = await tableClient.getEntity("Users", user.id)

    // Update the entity
    const updatedEntity = {
      ...existingEntity,
      ...user,
      updatedAt: new Date().toISOString(),
    }

    await tableClient.updateEntity(updatedEntity, "Merge")
    return { success: true }
  } catch (error) {
    console.error("Error updating user profile:", error)
    return { success: false, error }
  }
}
