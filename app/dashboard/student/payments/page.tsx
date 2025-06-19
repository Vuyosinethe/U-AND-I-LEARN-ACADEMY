"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, CreditCard, Plus } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function StudentPayments() {
  return (
    <DashboardLayout userType="student">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Payments</h1>
        <Button asChild>
          <Link href="/payment">
            <Plus className="h-5 w-5 mr-2" />
            Make Payment
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View your payment history and receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "PAY-2025-04872",
                    date: "April 10, 2025",
                    amount: "R1,430.00",
                    description: "Three Sessions Package",
                    status: "Paid",
                    method: "PayFast",
                    methodLogo: "/images/payfast-logo.png",
                  },
                  {
                    id: "PAY-2024-08932",
                    date: "November 15, 2024",
                    amount: "R475.00",
                    description: "Single Session",
                    status: "Paid",
                    method: "Ozow",
                    methodLogo: "/images/ozow-logo.png",
                  },
                ].map((payment, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <p className="font-medium">{payment.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{payment.id}</span>
                        <span>•</span>
                        <span>{payment.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="relative h-5 w-12">
                          <Image
                            src={payment.methodLogo || "/placeholder.svg"}
                            alt={payment.method}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">Paid via {payment.method}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">{payment.amount}</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                        {payment.status}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your saved payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 04/2027</p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>

                <div className="p-6 border rounded-md border-dashed text-center">
                  <p className="text-muted-foreground mb-4">Add a new payment method</p>
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </div>

                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800 mb-2">Secure Payments</h3>
                  <p className="text-sm text-blue-700 mb-4">
                    All payments are processed securely through our payment gateway partners. Your payment information
                    is protected with industry-standard encryption.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="relative h-8 w-16">
                      <Image src="/images/payfast-logo.png" alt="PayFast" fill className="object-contain" />
                    </div>
                    <div className="relative h-8 w-16">
                      <Image src="/images/ozow-logo.png" alt="Ozow" fill className="object-contain" />
                    </div>
                    <div className="relative h-8 w-12">
                      <Image src="/images/visa-logo.png" alt="Visa" fill className="object-contain" />
                    </div>
                    <div className="relative h-8 w-12">
                      <Image src="/images/mastercard-logo.png" alt="Mastercard" fill className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices">
          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>View and download your invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "INV-2025-001",
                    date: "April 10, 2025",
                    amount: "R1,430.00",
                    description: "Three Sessions Package",
                    status: "Paid",
                  },
                  {
                    id: "INV-2024-089",
                    date: "November 15, 2024",
                    amount: "R475.00",
                    description: "Single Session",
                    status: "Paid",
                  },
                ].map((invoice, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <p className="font-medium">{invoice.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{invoice.id}</span>
                        <span>•</span>
                        <span>{invoice.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">{invoice.amount}</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                        {invoice.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

