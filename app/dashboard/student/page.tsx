"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, FileText, Download, BookOpen, User, Bell } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function StudentDashboard() {
  const [progress, setProgress] = useState(65)

  return (
    <DashboardLayout userType="student">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/student/profile">
              <User className="h-5 w-5 mr-2" />
              Profile
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Upcoming Session</CardDescription>
            <CardTitle className="text-2xl">April 20-21</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-1 mb-1">
                <MapPin className="h-4 w-4" />
                <span>Johannesburg</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>2 days remaining</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Sessions Completed</CardDescription>
            <CardTitle className="text-2xl">1 of 3</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={33} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">33% of your package completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Study Materials</CardDescription>
            <CardTitle className="text-2xl">12</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <p>4 new materials available</p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="#materials">View Materials</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Overall Progress</CardDescription>
            <CardTitle className="text-2xl">{progress}%</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">Based on assessments and attendance</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="materials">Study Materials</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="progress">My Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                date: "April 20-21, 2025",
                location: "Johannesburg",
                subjects: ["Mathematics", "Physical Sciences"],
                status: "Confirmed",
                image: "/images/johannesburg.jpg",
              },
              {
                date: "May 4-5, 2025",
                location: "Johannesburg",
                subjects: ["Mathematics", "Physical Sciences"],
                status: "Upcoming",
                image: "/images/johannesburg.jpg",
              },
              {
                date: "May 18-19, 2025",
                location: "Johannesburg",
                subjects: ["Mathematics", "Physical Sciences"],
                status: "Upcoming",
                image: "/images/johannesburg.jpg",
              },
            ].map((session, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={session.image || "/placeholder.svg"}
                    alt={`Session in ${session.location}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={session.status === "Confirmed" ? "default" : "secondary"}>{session.status}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{session.date}</CardTitle>
                  <CardDescription>{session.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Subjects: {session.subjects.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Saturday 10:00am - Sunday 2:00pm</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="materials" id="materials">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mathematics: Calculus Fundamentals",
                type: "PDF",
                date: "April 15, 2025",
                size: "2.4 MB",
                new: true,
              },
              {
                title: "Physical Sciences: Forces and Motion",
                type: "PDF",
                date: "April 15, 2025",
                size: "3.1 MB",
                new: true,
              },
              {
                title: "Mathematics: Algebra Practice Problems",
                type: "PDF",
                date: "April 10, 2025",
                size: "1.8 MB",
                new: true,
              },
              {
                title: "Physical Sciences: Chemical Reactions",
                type: "PDF",
                date: "April 10, 2025",
                size: "2.2 MB",
                new: true,
              },
              {
                title: "Mathematics: Trigonometry Guide",
                type: "PDF",
                date: "March 28, 2025",
                size: "1.5 MB",
                new: false,
              },
              {
                title: "Physical Sciences: Electricity and Magnetism",
                type: "PDF",
                date: "March 28, 2025",
                size: "2.7 MB",
                new: false,
              },
            ].map((material, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    {material.new && <Badge>New</Badge>}
                  </div>
                  <CardDescription>{material.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>{material.type}</span>
                    </div>
                    <span>{material.size}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View your payment history and receipts</CardDescription>
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
                ].map((payment, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <p className="font-medium">{payment.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{payment.id}</span>
                        <span>•</span>
                        <span>{payment.date}</span>
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

        <TabsContent value="progress">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Subject Progress</CardTitle>
                <CardDescription>Your progress in each subject</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Mathematics</span>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Last assessment: March 17, 2025</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Physical Sciences</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Last assessment: March 17, 2025</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Life Sciences</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Last assessment: February 24, 2025</p>
                </div>
                <Button variant="outline" className="w-full mt-2">
                  View Detailed Analytics
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance</CardTitle>
                <CardDescription>Your attendance record</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">March 16-17, 2025</p>
                      <p className="text-sm text-muted-foreground">Johannesburg</p>
                    </div>
                    <Badge>Attended</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">February 23-24, 2025</p>
                      <p className="text-sm text-muted-foreground">Johannesburg</p>
                    </div>
                    <Badge>Attended</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">January 19-20, 2025</p>
                      <p className="text-sm text-muted-foreground">Johannesburg</p>
                    </div>
                    <Badge variant="outline">Absent</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    View All Sessions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Assessment Results</CardTitle>
                <CardDescription>Your performance in assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Mathematics Mid-Term Assessment",
                      date: "March 17, 2025",
                      score: "78%",
                      grade: "B+",
                      improvement: "+13%",
                    },
                    {
                      title: "Physical Sciences Practice Test",
                      date: "March 17, 2025",
                      score: "72%",
                      grade: "B",
                      improvement: "+7%",
                    },
                    {
                      title: "Mathematics Practice Test",
                      date: "February 24, 2025",
                      score: "65%",
                      grade: "C+",
                      improvement: "+5%",
                    },
                    {
                      title: "Physical Sciences Mid-Term Assessment",
                      date: "February 24, 2025",
                      score: "70%",
                      grade: "B",
                      improvement: "+10%",
                    },
                  ].map((assessment, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-md">
                      <div>
                        <p className="font-medium">{assessment.title}</p>
                        <p className="text-sm text-muted-foreground">{assessment.date}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <p className="font-bold">{assessment.score}</p>
                            <span className="text-xs text-green-600">{assessment.improvement}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Grade: {assessment.grade}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    View All Assessments
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Learning Goals</CardTitle>
                <CardDescription>Track your progress towards your learning goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Overall Grade Improvement</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Goal: Improve overall grades by 15%</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Mathematics Mastery</span>
                      <span className="text-sm font-medium">70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Goal: Achieve 80% or higher in Mathematics</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Physical Sciences Improvement</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Goal: Improve Physical Sciences grade from C to B+
                    </p>
                  </div>
                  <Button className="w-full mt-2">Update Learning Goals</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
