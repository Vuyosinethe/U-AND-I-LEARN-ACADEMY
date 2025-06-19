"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Download, FileText, CheckCircle, XCircle, Search, Plus, Settings } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function AdminPayments() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <DashboardLayout userType="admin">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Payment Management</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard/admin/payments/settings">
              <Settings className="h-5 w-5 mr-2" />
              Payment Settings
            </Link>
          </Button>
          <Button>
            <Plus className="h-5 w-5 mr-2" />
            Record Payment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All Payments</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="failed">Failed</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Payment Transactions</CardTitle>
                  <CardDescription>View and manage all payment transactions</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search payments..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
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
                        <th className="h-12 px-4 text-left align-middle font-medium">Transaction ID</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Student</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Payment Method</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: "PAY-2025-04872",
                          student: "Thabo Mkhize",
                          date: "April 10, 2025",
                          amount: "R1,430.00",
                          method: "PayFast",
                          methodLogo: "/images/payfast-logo.png",
                          status: "Paid",
                        },
                        {
                          id: "PAY-2025-04871",
                          student: "Lerato Khumalo",
                          date: "April 9, 2025",
                          amount: "R2,850.00",
                          method: "Ozow",
                          methodLogo: "/images/ozow-logo.png",
                          status: "Paid",
                        },
                        {
                          id: "PAY-2025-04870",
                          student: "Sipho Ndlovu",
                          date: "April 8, 2025",
                          amount: "R475.00",
                          method: "Manual EFT",
                          methodLogo: "",
                          status: "Pending",
                        },
                        {
                          id: "PAY-2025-04869",
                          student: "Nomsa Dlamini",
                          date: "April 7, 2025",
                          amount: "R1,430.00",
                          method: "PayFast",
                          methodLogo: "/images/payfast-logo.png",
                          status: "Paid",
                        },
                        {
                          id: "PAY-2025-04868",
                          student: "David Nkosi",
                          date: "April 6, 2025",
                          amount: "R2,850.00",
                          method: "Credit Card",
                          methodLogo: "/images/visa-logo.png",
                          status: "Failed",
                        },
                      ].map((payment, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-4 align-middle">{payment.id}</td>
                          <td className="p-4 align-middle">{payment.student}</td>
                          <td className="p-4 align-middle">{payment.date}</td>
                          <td className="p-4 align-middle">{payment.amount}</td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-2">
                              {payment.methodLogo && (
                                <div className="relative h-5 w-12">
                                  <Image
                                    src={payment.methodLogo || "/placeholder.svg"}
                                    alt={payment.method}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              )}
                              <span>{payment.method}</span>
                            </div>
                          </td>
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

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Payments</CardTitle>
              <CardDescription>Review and approve pending payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "PAY-2025-04870",
                    student: "Sipho Ndlovu",
                    date: "April 8, 2025",
                    amount: "R475.00",
                    description: "Single Session",
                    method: "Manual EFT",
                    proofUrl: "/images/proof-of-payment.jpg",
                  },
                  {
                    id: "PAY-2025-04865",
                    student: "Zanele Mbeki",
                    date: "April 5, 2025",
                    amount: "R1,430.00",
                    description: "Three Sessions Package",
                    method: "Manual EFT",
                    proofUrl: "/images/proof-of-payment.jpg",
                  },
                ].map((payment, i) => (
                  <div key={i} className="border rounded-md p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{payment.student}</h3>
                          <Badge variant="outline">Pending</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {payment.id} • {payment.date}
                        </p>
                        <div className="mt-2">
                          <p className="text-sm">
                            <span className="font-medium">Amount:</span> {payment.amount}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Package:</span> {payment.description}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Method:</span> {payment.method}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="outline">
                          View Proof of Payment
                        </Button>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Payments</CardTitle>
              <CardDescription>View all successful payments</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Similar content to "all" tab but filtered for completed payments */}
              <p className="text-muted-foreground">Showing only completed payments</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="failed">
          <Card>
            <CardHeader>
              <CardTitle>Failed Payments</CardTitle>
              <CardDescription>Review failed payment attempts</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Similar content to "all" tab but filtered for failed payments */}
              <p className="text-muted-foreground">Showing only failed payments</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Payment Gateway Analytics</CardTitle>
            <CardDescription>Overview of payment methods and success rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium mb-4">Payment Methods Distribution</h3>
                <div className="space-y-4">
                  {[
                    { method: "PayFast", count: 87, percentage: 61, logo: "/images/payfast-logo.png" },
                    { method: "Ozow", count: 32, percentage: 23, logo: "/images/ozow-logo.png" },
                    { method: "Manual EFT", count: 18, percentage: 13, logo: "" },
                    { method: "Credit Card (Direct)", count: 5, percentage: 3, logo: "/images/visa-logo.png" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          {item.logo && (
                            <div className="relative h-5 w-12">
                              <Image
                                src={item.logo || "/placeholder.svg"}
                                alt={item.method}
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                          <span className="text-sm font-medium">{item.method}</span>
                        </div>
                        <span className="text-sm font-medium">
                          {item.count} payments ({item.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Payment Success Rate</h3>
                <div className="h-64 flex items-center justify-center">
                  <div className="relative h-56 w-56">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-sm font-medium">Success Rate</p>
                        <p className="text-3xl font-bold">96.5%</p>
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
                        strokeDashoffset="8.8"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-sm">
                    <span>Successful Payments</span>
                    <span className="font-medium">137</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Failed Payments</span>
                    <span className="font-medium">5</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
