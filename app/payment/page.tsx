"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Lock, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("payfast")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [processingPayment, setProcessingPayment] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate payment gateway redirect
    setProcessingPayment(true)

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      setProcessingPayment(false)
      setSuccess(true)

      // Redirect to dashboard after successful payment
      setTimeout(() => {
        window.location.href = "/dashboard/student"
      }, 2000)
    }, 3000)
  }

  if (processingPayment) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="relative h-16 w-48">
                  <Image src="/images/payfast-logo.png" alt="PayFast Payment Gateway" fill className="object-contain" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">Processing Payment</CardTitle>
              <CardDescription className="text-center">
                Please wait while we process your payment through our secure payment gateway...
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            </CardContent>
            <CardFooter className="text-center text-sm text-muted-foreground">
              <p>
                Do not refresh or close this page. You will be automatically redirected once the payment is complete.
              </p>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  if (success) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">Payment Successful!</CardTitle>
              <CardDescription className="text-center">
                Your payment has been processed successfully through our secure payment gateway. You will be redirected
                to your dashboard shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-4">
              <p className="font-medium">Transaction Reference: PAY-2025-04872</p>
              <p className="text-sm text-muted-foreground mt-1">A receipt has been sent to your email address</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/dashboard/student">Go to Dashboard</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-6">Checkout</h1>

              <Tabs defaultValue="payment" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="payment">Payment Details</TabsTrigger>
                  <TabsTrigger value="review">Review Order</TabsTrigger>
                </TabsList>

                <TabsContent value="payment">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                        <RadioGroup
                          defaultValue="payfast"
                          value={paymentMethod}
                          onValueChange={setPaymentMethod}
                          className="space-y-4"
                        >
                          <div className="flex items-center space-x-2 border p-4 rounded-md">
                            <RadioGroupItem value="payfast" id="payfast" />
                            <Label htmlFor="payfast" className="flex items-center gap-2 cursor-pointer">
                              <div className="relative h-8 w-24">
                                <Image src="/images/payfast-logo.png" alt="PayFast" fill className="object-contain" />
                              </div>
                              <span className="ml-2">PayFast (Credit Card, Instant EFT, SnapScan)</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border p-4 rounded-md">
                            <RadioGroupItem value="ozow" id="ozow" />
                            <Label htmlFor="ozow" className="flex items-center gap-2 cursor-pointer">
                              <div className="relative h-8 w-24">
                                <Image src="/images/ozow-logo.png" alt="Ozow" fill className="object-contain" />
                              </div>
                              <span className="ml-2">Ozow (Instant EFT)</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border p-4 rounded-md">
                            <RadioGroupItem value="manual" id="manual" />
                            <Label htmlFor="manual" className="cursor-pointer">
                              Manual EFT (Bank Transfer)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {paymentMethod === "manual" && (
                        <div className="space-y-4 border p-4 rounded-md bg-gray-50">
                          <h3 className="font-medium">Bank Details</h3>
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium">Bank:</span> First National Bank
                            </p>
                            <p>
                              <span className="font-medium">Account Name:</span> U&I LEARN ACADEMY
                            </p>
                            <p>
                              <span className="font-medium">Account Number:</span> 123456789
                            </p>
                            <p>
                              <span className="font-medium">Branch Code:</span> 250655
                            </p>
                            <p>
                              <span className="font-medium">Reference:</span> Your Full Name
                            </p>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Please use your full name as the payment reference and upload proof of payment below.
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="proof">Upload Proof of Payment</Label>
                            <Input id="proof" type="file" className="cursor-pointer" required />
                          </div>
                        </div>
                      )}

                      {(paymentMethod === "payfast" || paymentMethod === "ozow") && (
                        <div className="space-y-4 border p-4 rounded-md bg-blue-50">
                          <div className="flex items-center gap-2">
                            <Lock className="h-5 w-5 text-blue-600" />
                            <h3 className="font-medium text-blue-800">Secure Payment Gateway</h3>
                          </div>
                          <p className="text-sm text-blue-700">
                            You will be redirected to our secure payment gateway to complete your payment. Your payment
                            information is protected with industry-standard encryption.
                          </p>
                          <div className="flex flex-wrap gap-4 mt-4">
                            <div className="relative h-8 w-12">
                              <Image src="/images/visa-logo.png" alt="Visa" fill className="object-contain" />
                            </div>
                            <div className="relative h-8 w-12">
                              <Image
                                src="/images/mastercard-logo.png"
                                alt="Mastercard"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="relative h-8 w-12">
                              <Image src="/images/snapscan-logo.png" alt="SnapScan" fill className="object-contain" />
                            </div>
                            <div className="relative h-8 w-12">
                              <Image src="/images/eft-logo.png" alt="EFT" fill className="object-contain" />
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="billing-email">Email Address</Label>
                        <Input id="billing-email" type="email" placeholder="john@example.com" required />
                        <p className="text-sm text-muted-foreground">Your receipt will be sent to this email address</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Lock className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Your payment information is secure and encrypted
                        </p>
                      </div>

                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? (
                          "Processing..."
                        ) : (
                          <span className="flex items-center">
                            {paymentMethod === "manual" ? "Complete Payment" : "Proceed to Payment Gateway"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="review">
                  <div className="space-y-6">
                    <div className="border rounded-md p-4">
                      <h3 className="font-semibold mb-2">Weekend Session - Three Sessions Package</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Dates:</span>
                          <span>April 20-21, May 4-5, May 18-19, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <span>Johannesburg</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Subjects:</span>
                          <span>Mathematics, Physical Sciences</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>R1,430.00</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Discount</span>
                        <span>-R0.00</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>R1,430.00</span>
                      </div>
                    </div>

                    <Button onClick={() => document.getElementById("payment-tab")?.click()} className="w-full">
                      Proceed to Payment
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="border rounded-md p-6 sticky top-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Three Sessions Package</span>
                    <span>R1,430.00</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>R1,430.00</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Three intensive weekend sessions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>All meals included</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Comprehensive study materials</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Lock className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">Secure Checkout</span>
                    </div>
                    <div className="flex justify-center gap-2">
                      <div className="relative h-6 w-10">
                        <Image src="/images/visa-logo.png" alt="Visa" fill className="object-contain" />
                      </div>
                      <div className="relative h-6 w-10">
                        <Image src="/images/mastercard-logo.png" alt="Mastercard" fill className="object-contain" />
                      </div>
                      <div className="relative h-6 w-10">
                        <Image src="/images/payfast-logo.png" alt="PayFast" fill className="object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

