"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Users,
  Calendar,
  TrendingUp,
  Search,
  Plus,
  Download,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  FileText,
  Settings,
  Bell,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <DashboardLayout userType="admin">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              5
            </span>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/admin/settings">
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Students</CardDescription>
            <CardTitle className="text-2xl">1,248</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>12% increase this month</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Upcoming Sessions</CardDescription>
            <CardTitle className="text-2xl">8</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Next session: April 20-21</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Monthly Revenue</CardDescription>
            <CardTitle className="text-2xl">R68,450</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>23% increase from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Locations</CardDescription>
            <CardTitle className="text-2xl">6</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <p>Johannesburg, Cape Town, Durban, Pretoria, Bloemfontein, Port Elizabeth</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="students" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Student Management</CardTitle>
                  <CardDescription>Manage all registered students</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search students..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Grade</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">School</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Thabo Mkhize",
                          email: "thabo.m@example.com",
                          grade: "12",
                          school: "Pretoria High School",
                          status: "Active",
                        },
                        {
                          name: "Lerato Khumalo",
                          email: "lerato.k@example.com",
                          grade: "12",
                          school: "Cape Town Academy",
                          status: "Active",
                        },
                        {
                          name: "Sipho Ndlovu",
                          email: "sipho.n@example.com",
                          grade: "12",
                          school: "Durban College",
                          status: "Active",
                        },
                        {
                          name: "Nomsa Dlamini",
                          email: "nomsa.d@example.com",
                          grade: "12",
                          school: "Johannesburg High",
                          status: "Inactive",
                        },
                        {
                          name: "David Nkosi",
                          email: "david.n@example.com",
                          grade: "12",
                          school: "Bloemfontein Academy",
                          status: "Active",
                        },
                      ].map((student, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-4 align-middle">{student.name}</td>
                          <td className="p-4 align-middle">{student.email}</td>
                          <td className="p-4 align-middle">{student.grade}</td>
                          <td className="p-4 align-middle">{student.school}</td>
                          <td className="p-4 align-middle">
                            <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                              {student.status}
                            </Badge>
                          </td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Showing 5 of 1,248 students</p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="sessions">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Session Management</CardTitle>
                  <CardDescription>Manage upcoming and past sessions</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Session
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Location</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Subjects</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Students</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          date: "April 20-21, 2025",
                          location: "Johannesburg",
                          subjects: ["Mathematics", "Physical Sciences"],
                          students: 28,
                          status: "Upcoming",
                        },
                        {
                          date: "April 20-21, 2025",
                          location: "Cape Town",
                          subjects: ["Mathematics", "Life Sciences"],
                          students: 22,
                          status: "Upcoming",
                        },
                        {
                          date: "April 20-21, 2025",
                          location: "Durban",
                          subjects: ["Mathematics", "Accounting"],
                          students: 18,
                          status: "Upcoming",
                        },
                        {
                          date: "March 16-17, 2025",
                          location: "Johannesburg",
                          subjects: ["Mathematics", "Physical Sciences"],
                          students: 30,
                          status: "Completed",
                        },
                        {
                          date: "March 16-17, 2025",
                          location: "Pretoria",
                          subjects: ["Mathematics", "Geography"],
                          students: 25,
                          status: "Completed",
                        },
                      ].map((session, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-4 align-middle">{session.date}</td>
                          <td className="p-4 align-middle">{session.location}</td>
                          <td className="p-4 align-middle">{session.subjects.join(", ")}</td>
                          <td className="p-4 align-middle">{session.students}</td>
                          <td className="p-4 align-middle">
                            <Badge variant={session.status === "Upcoming" ? "default" : "secondary"}>
                              {session.status}
                            </Badge>
                          </td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Users className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Payment Management</CardTitle>
                  <CardDescription>Track and manage all payments</CardDescription>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Record Payment
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Invoice</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Student</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Package</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          invoice: "INV-2025-042",
                          student: "Thabo Mkhize",
                          date: "April 10, 2025",
                          amount: "R1,430.00",
                          package: "Three Sessions",
                          status: "Paid",
                        },
                        {
                          invoice: "INV-2025-041",
                          student: "Lerato Khumalo",
                          date: "April 9, 2025",
                          amount: "R2,850.00",
                          package: "Full Term",
                          status: "Paid",
                        },
                        {
                          invoice: "INV-2025-040",
                          student: "Sipho Ndlovu",
                          date: "April 8, 2025",
                          amount: "R475.00",
                          package: "Single Session",
                          status: "Pending",
                        },
                        {
                          invoice: "INV-2025-039",
                          student: "Nomsa Dlamini",
                          date: "April 7, 2025",
                          amount: "R1,430.00",
                          package: "Three Sessions",
                          status: "Paid",
                        },
                        {
                          invoice: "INV-2025-038",
                          student: "David Nkosi",
                          date: "April 6, 2025",
                          amount: "R2,850.00",
                          package: "Full Term",
                          status: "Failed",
                        },
                      ].map((payment, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-4 align-middle">{payment.invoice}</td>
                          <td className="p-4 align-middle">{payment.student}</td>
                          <td className="p-4 align-middle">{payment.date}</td>
                          <td className="p-4 align-middle">{payment.amount}</td>
                          <td className="p-4 align-middle">{payment.package}</td>
                          <td className="p-4 align-middle">
                            <Badge
                              variant={
                                payment.status === "Paid"
                                  ? "default"
                                  : payment.status === "Pending"
                                    ? "outline"
                                    : "destructive"
                              }
                            >
                              {payment.status}
                            </Badge>
                          </td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon">
                                <FileText className="h-4 w-4" />
                              </Button>
                              {payment.status === "Pending" && (
                                <>
                                  <Button variant="ghost" size="icon" className="text-green-600">
                                    <CheckCircle className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="text-red-600">
                                    <XCircle className="h-4 w-4" />
                                  </Button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Showing 5 of 142 payments</p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Month</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-end gap-2">
                  {[40, 65, 75, 90, 80, 95, 85, 75, 80, 95, 0, 0].map((height, i) => (
                    <div key={i} className="relative flex-1 flex flex-col items-center">
                      <div className="w-full bg-primary rounded-t-sm" style={{ height: `${height}%` }}></div>
                      <span className="text-xs mt-2">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Students by Location</CardTitle>
                <CardDescription>Distribution of students across locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { location: "Johannesburg", count: 450, percentage: 36 },
                    { location: "Cape Town", count: 320, percentage: 26 },
                    { location: "Durban", count: 180, percentage: 14 },
                    { location: "Pretoria", count: 150, percentage: 12 },
                    { location: "Bloemfontein", count: 80, percentage: 6 },
                    { location: "Port Elizabeth", count: 68, percentage: 5 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{item.location}</span>
                        <span className="text-sm font-medium">
                          {item.count} students ({item.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subject Popularity</CardTitle>
                <CardDescription>Most popular subjects among students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { subject: "Mathematics", count: 980, percentage: 78 },
                    { subject: "Physical Sciences", count: 850, percentage: 68 },
                    { subject: "Life Sciences", count: 620, percentage: 50 },
                    { subject: "Accounting", count: 480, percentage: 38 },
                    { subject: "Geography", count: 320, percentage: 26 },
                    { subject: "Economics", count: 280, percentage: 22 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{item.subject}</span>
                        <span className="text-sm font-medium">
                          {item.count} students ({item.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Package Distribution</CardTitle>
                <CardDescription>Distribution of package types purchased</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="relative h-64 w-64">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-sm font-medium">Total</p>
                        <p className="text-2xl font-bold">1,248</p>
                        <p className="text-sm text-muted-foreground">students</p>
                      </div>
                    </div>
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="20" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="20"
                        strokeDasharray="251.2"
                        strokeDashoffset="0"
                        transform="rotate(-90 50 50)"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#64748b"
                        strokeWidth="20"
                        strokeDasharray="251.2"
                        strokeDashoffset="125.6"
                        transform="rotate(-90 50 50)"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="20"
                        strokeDasharray="251.2"
                        strokeDashoffset="188.4"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-center gap-8 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-sm">Full Term (50%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-slate-500"></div>
                    <span className="text-sm">Three Sessions (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-slate-400"></div>
                    <span className="text-sm">Single Session (25%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
