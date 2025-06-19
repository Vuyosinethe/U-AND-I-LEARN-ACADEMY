"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, BookOpen, Download, FileText } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function StudentSessions() {
  return (
    <DashboardLayout userType="student">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Sessions</h1>
        <Button asChild>
          <Link href="/programs">Register for More Sessions</Link>
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="past">Past Sessions</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                id: "SES-2025-042",
                date: "April 20-21, 2025",
                location: "Johannesburg",
                venue: "Sandton Conference Center, Room 204",
                subjects: ["Mathematics", "Physical Sciences"],
                status: "Confirmed",
                image: "/images/johannesburg.jpg",
                teachers: ["Dr. Thabo Molefe", "Ms. Nomsa Dlamini"],
                timeSlots: [
                  "Saturday: 10:00am - 1:00pm (Mathematics)",
                  "Saturday: 2:00pm - 5:00pm (Physical Sciences)",
                  "Sunday: 9:00am - 12:00pm (Mathematics)",
                  "Sunday: 1:00pm - 2:00pm (Physical Sciences)",
                ],
              },
              {
                id: "SES-2025-043",
                date: "May 4-5, 2025",
                location: "Johannesburg",
                venue: "Sandton Conference Center, Room 204",
                subjects: ["Mathematics", "Physical Sciences"],
                status: "Upcoming",
                image: "/images/johannesburg.jpg",
                teachers: ["Dr. Thabo Molefe", "Ms. Nomsa Dlamini"],
                timeSlots: [
                  "Saturday: 10:00am - 1:00pm (Mathematics)",
                  "Saturday: 2:00pm - 5:00pm (Physical Sciences)",
                  "Sunday: 9:00am - 12:00pm (Mathematics)",
                  "Sunday: 1:00pm - 2:00pm (Physical Sciences)",
                ],
              },
              {
                id: "SES-2025-044",
                date: "May 18-19, 2025",
                location: "Johannesburg",
                venue: "Sandton Conference Center, Room 204",
                subjects: ["Mathematics", "Physical Sciences"],
                status: "Upcoming",
                image: "/images/johannesburg.jpg",
                teachers: ["Dr. Thabo Molefe", "Ms. Nomsa Dlamini"],
                timeSlots: [
                  "Saturday: 10:00am - 1:00pm (Mathematics)",
                  "Saturday: 2:00pm - 5:00pm (Physical Sciences)",
                  "Sunday: 9:00am - 12:00pm (Mathematics)",
                  "Sunday: 1:00pm - 2:00pm (Physical Sciences)",
                ],
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
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{session.date}</CardTitle>
                      <CardDescription>{session.id}</CardDescription>
                    </div>
                    {session.status === "Confirmed" && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/student/sessions/${session.id}`}>View Details</Link>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{session.location}</p>
                        <p className="text-sm text-muted-foreground">{session.venue}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <BookOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Subjects</p>
                        <p className="text-sm">{session.subjects.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Teachers</p>
                        <p className="text-sm">{session.teachers.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Schedule</p>
                        <ul className="text-sm space-y-1">
                          {session.timeSlots.map((slot, j) => (
                            <li key={j}>{slot}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href={`/dashboard/student/materials?session=${session.id}`}>
                      <FileText className="h-4 w-4 mr-2" />
                      Study Materials
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <Download className="h-4 w-4 mr-2" />
                      Calendar
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                id: "SES-2025-041",
                date: "March 16-17, 2025",
                location: "Johannesburg",
                venue: "Sandton Conference Center, Room 204",
                subjects: ["Mathematics", "Physical Sciences"],
                status: "Completed",
                image: "/images/johannesburg.jpg",
                attendance: "Attended",
                performance: "Good",
                feedback: "Excellent participation in class discussions. Completed all practice problems.",
                materials: 4,
              },
              {
                id: "SES-2025-040",
                date: "February 23-24, 2025",
                location: "Johannesburg",
                venue: "Sandton Conference Center, Room 204",
                subjects: ["Mathematics", "Physical Sciences"],
                status: "Completed",
                image: "/images/johannesburg.jpg",
                attendance: "Attended",
                performance: "Excellent",
                feedback:
                  "Outstanding performance on all assessments. Demonstrated strong understanding of complex concepts.",
                materials: 5,
              },
              {
                id: "SES-2025-039",
                date: "January 19-20, 2025",
                location: "Johannesburg",
                venue: "Sandton Conference Center, Room 204",
                subjects: ["Mathematics", "Physical Sciences"],
                status: "Completed",
                image: "/images/johannesburg.jpg",
                attendance: "Absent",
                performance: "N/A",
                feedback: "Absent from session. Make-up materials have been provided.",
                materials: 3,
              },
            ].map((session, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={session.image || "/placeholder.svg"}
                    alt={`Session in ${session.location}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{session.status}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{session.date}</CardTitle>
                      <CardDescription>{session.id}</CardDescription>
                    </div>
                    <Badge variant={session.attendance === "Attended" ? "default" : "outline"}>
                      {session.attendance}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p>{session.location}</p>
                        <p className="text-sm text-muted-foreground">{session.venue}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <BookOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p>{session.subjects.join(", ")}</p>
                    </div>
                    {session.attendance === "Attended" && (
                      <div className="border-t pt-2 mt-2">
                        <p className="font-medium">Performance: {session.performance}</p>
                        <p className="text-sm text-muted-foreground mt-1">{session.feedback}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href={`/dashboard/student/materials?session=${session.id}`}>
                      <FileText className="h-4 w-4 mr-2" />
                      Materials ({session.materials})
                    </Link>
                  </Button>
                  {session.attendance === "Attended" && (
                    <Button variant="outline" asChild>
                      <Link href={`/dashboard/student/sessions/${session.id}`}>View Details</Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Session Calendar</CardTitle>
              <CardDescription>View your sessions in calendar format</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md p-4">
                <div className="grid grid-cols-7 gap-px bg-muted">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="bg-background p-2 text-center text-sm font-medium">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }).map((_, i) => {
                    const day = i - 5 // Offset to start month on correct day
                    const isCurrentMonth = day > 0 && day <= 30
                    const isToday = day === 15
                    const hasSession = [20, 21].includes(day) || [4, 5].includes(day) || [18, 19].includes(day)

                    return (
                      <div
                        key={i}
                        className={`bg-background p-2 min-h-[80px] ${
                          isCurrentMonth ? "" : "text-muted-foreground"
                        } ${isToday ? "bg-blue-50" : ""}`}
                      >
                        <div className="flex justify-between items-start">
                          <span className={`text-sm ${isToday ? "font-bold" : ""}`}>
                            {isCurrentMonth ? day : day <= 0 ? 31 + day : day - 30}
                          </span>
                          {hasSession && (
                            <Badge variant="outline" className="bg-primary/10 text-primary text-xs">
                              Session
                            </Badge>
                          )}
                        </div>
                        {hasSession && (
                          <div className="mt-1 text-xs">
                            <p className="font-medium text-primary">Weekend Session</p>
                            <p>10:00 - 17:00</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  Previous Month
                </Button>
                <p className="font-medium">April 2025</p>
                <Button variant="outline" size="sm">
                  Next Month
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

