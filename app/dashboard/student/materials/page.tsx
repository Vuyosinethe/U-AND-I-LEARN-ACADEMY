"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FileText, Download, Search, Video, FileImage, Play, Eye, Star, Clock } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function StudyMaterials() {
  const [searchTerm, setSearchTerm] = useState("")

  const materials = [
    {
      id: "MAT-2025-001",
      title: "Mathematics: Calculus Fundamentals",
      type: "PDF",
      subject: "Mathematics",
      topic: "Calculus",
      date: "April 15, 2025",
      size: "2.4 MB",
      new: true,
      description:
        "Comprehensive guide to calculus fundamentals including limits, derivatives, and integrals with practice problems.",
      thumbnail: "/images/calculus-thumbnail.jpg",
      session: "SES-2025-042",
      downloads: 28,
      rating: 4.8,
    },
    {
      id: "MAT-2025-002",
      title: "Physical Sciences: Forces and Motion",
      type: "PDF",
      subject: "Physical Sciences",
      topic: "Mechanics",
      date: "April 15, 2025",
      size: "3.1 MB",
      new: true,
      description: "Detailed explanation of Newton's laws, forces, and motion with examples and practice questions.",
      thumbnail: "/images/physics-thumbnail.jpg",
      session: "SES-2025-042",
      downloads: 24,
      rating: 4.6,
    },
    {
      id: "MAT-2025-003",
      title: "Mathematics: Algebra Practice Problems",
      type: "PDF",
      subject: "Mathematics",
      topic: "Algebra",
      date: "April 10, 2025",
      size: "1.8 MB",
      new: true,
      description: "Collection of algebra practice problems with step-by-step solutions to prepare for exams.",
      thumbnail: "/images/algebra-thumbnail.jpg",
      session: "SES-2025-042",
      downloads: 32,
      rating: 4.7,
    },
    {
      id: "MAT-2025-004",
      title: "Physical Sciences: Chemical Reactions",
      type: "PDF",
      subject: "Physical Sciences",
      topic: "Chemistry",
      date: "April 10, 2025",
      size: "2.2 MB",
      new: true,
      description: "Guide to chemical reactions, balancing equations, and stoichiometry with practice problems.",
      thumbnail: "/images/chemistry-thumbnail.jpg",
      session: "SES-2025-042",
      downloads: 22,
      rating: 4.5,
    },
    {
      id: "MAT-2025-005",
      title: "Mathematics: Trigonometry Guide",
      type: "PDF",
      subject: "Mathematics",
      topic: "Trigonometry",
      date: "March 28, 2025",
      size: "1.5 MB",
      new: false,
      description: "Comprehensive guide to trigonometric functions, identities, and applications.",
      thumbnail: "/images/trigonometry-thumbnail.jpg",
      session: "SES-2025-041",
      downloads: 45,
      rating: 4.9,
    },
    {
      id: "MAT-2025-006",
      title: "Physical Sciences: Electricity and Magnetism",
      type: "PDF",
      subject: "Physical Sciences",
      topic: "Electromagnetism",
      date: "March 28, 2025",
      size: "2.7 MB",
      new: false,
      description: "Detailed explanation of electricity, magnetism, and electromagnetic induction with examples.",
      thumbnail: "/images/electricity-thumbnail.jpg",
      session: "SES-2025-041",
      downloads: 38,
      rating: 4.7,
    },
    {
      id: "MAT-2025-007",
      title: "Calculus: Differentiation Techniques",
      type: "Video",
      subject: "Mathematics",
      topic: "Calculus",
      date: "March 25, 2025",
      size: "45 min",
      new: false,
      description: "Video tutorial explaining various differentiation techniques with examples.",
      thumbnail: "/images/calculus-video-thumbnail.jpg",
      session: "SES-2025-041",
      downloads: 56,
      rating: 4.9,
    },
    {
      id: "MAT-2025-008",
      title: "Physics: Mechanics Problem Solving",
      type: "Video",
      subject: "Physical Sciences",
      topic: "Mechanics",
      date: "March 25, 2025",
      size: "38 min",
      new: false,
      description: "Video tutorial demonstrating problem-solving techniques for mechanics questions.",
      thumbnail: "/images/mechanics-video-thumbnail.jpg",
      session: "SES-2025-041",
      downloads: 42,
      rating: 4.8,
    },
    {
      id: "MAT-2025-009",
      title: "Mathematics: Exam Preparation Guide",
      type: "PDF",
      subject: "Mathematics",
      topic: "Exam Prep",
      date: "March 20, 2025",
      size: "3.5 MB",
      new: false,
      description: "Comprehensive guide to preparing for mathematics exams with tips and strategies.",
      thumbnail: "/images/exam-prep-thumbnail.jpg",
      session: "SES-2025-041",
      downloads: 67,
      rating: 4.9,
    },
    {
      id: "MAT-2025-010",
      title: "Physical Sciences: Past Exam Papers",
      type: "PDF",
      subject: "Physical Sciences",
      topic: "Exam Prep",
      date: "March 20, 2025",
      size: "4.2 MB",
      new: false,
      description: "Collection of past exam papers with solutions for physical sciences.",
      thumbnail: "/images/past-papers-thumbnail.jpg",
      session: "SES-2025-041",
      downloads: 72,
      rating: 4.8,
    },
    {
      id: "MAT-2025-011",
      title: "Chemistry: Organic Compounds",
      type: "Interactive",
      subject: "Physical Sciences",
      topic: "Chemistry",
      date: "March 15, 2025",
      size: "Online",
      new: false,
      description: "Interactive module for learning about organic compounds and their properties.",
      thumbnail: "/images/organic-chemistry-thumbnail.jpg",
      session: "SES-2025-040",
      downloads: 34,
      rating: 4.7,
    },
    {
      id: "MAT-2025-012",
      title: "Mathematics: Geometry Formulas",
      type: "PDF",
      subject: "Mathematics",
      topic: "Geometry",
      date: "March 15, 2025",
      size: "1.2 MB",
      new: false,
      description: "Comprehensive list of geometry formulas with diagrams and examples.",
      thumbnail: "/images/geometry-thumbnail.jpg",
      session: "SES-2025-040",
      downloads: 53,
      rating: 4.6,
    },
  ]

  const filteredMaterials = materials.filter(
    (material) =>
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.topic.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <DashboardLayout userType="student">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Study Materials</h1>
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search materials..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="all">All Materials</TabsTrigger>
          <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
          <TabsTrigger value="physics">Physical Sciences</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="interactive">Interactive</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMaterials.map((material) => (
              <Card key={material.id} className="overflow-hidden">
                <div className="relative h-40 bg-muted">
                  {material.thumbnail ? (
                    <Image
                      src={material.thumbnail || "/placeholder.svg"}
                      alt={material.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      {material.type === "PDF" && <FileText className="h-16 w-16 text-muted-foreground/30" />}
                      {material.type === "Video" && <Video className="h-16 w-16 text-muted-foreground/30" />}
                      {material.type === "Interactive" && <FileImage className="h-16 w-16 text-muted-foreground/30" />}
                    </div>
                  )}
                  {material.type === "Video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Badge variant={material.subject === "Mathematics" ? "default" : "secondary"}>
                      {material.subject}
                    </Badge>
                    {material.new && <Badge>New</Badge>}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                  </div>
                  <CardDescription>{material.topic}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      {material.type === "PDF" && <FileText className="h-4 w-4" />}
                      {material.type === "Video" && <Video className="h-4 w-4" />}
                      {material.type === "Interactive" && <FileImage className="h-4 w-4" />}
                      <span>{material.type}</span>
                    </div>
                    <span>{material.size}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="ml-1">{material.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span className="ml-1">{material.downloads}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="ml-1">{material.date}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    {material.type === "PDF" || material.type === "Video" ? (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4 mr-2" />
                        View Online
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mathematics">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMaterials
              .filter((material) => material.subject === "Mathematics")
              .map((material) => (
                <Card key={material.id} className="overflow-hidden">
                  {/* Same card content as above */}
                  <div className="relative h-40 bg-muted">
                    {material.thumbnail ? (
                      <Image
                        src={material.thumbnail || "/placeholder.svg"}
                        alt={material.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        {material.type === "PDF" && <FileText className="h-16 w-16 text-muted-foreground/30" />}
                        {material.type === "Video" && <Video className="h-16 w-16 text-muted-foreground/30" />}
                        {material.type === "Interactive" && (
                          <FileImage className="h-16 w-16 text-muted-foreground/30" />
                        )}
                      </div>
                    )}
                    {material.type === "Video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-black/50 p-3">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Badge variant="default">Mathematics</Badge>
                      {material.new && <Badge>New</Badge>}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    <CardDescription>{material.topic}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        {material.type === "PDF" && <FileText className="h-4 w-4" />}
                        {material.type === "Video" && <Video className="h-4 w-4" />}
                        {material.type === "Interactive" && <FileImage className="h-4 w-4" />}
                        <span>{material.type}</span>
                      </div>
                      <span>{material.size}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="ml-1">{material.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          <span className="ml-1">{material.downloads}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="ml-1">{material.date}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      {material.type === "PDF" || material.type === "Video" ? (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4 mr-2" />
                          View Online
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="physics">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMaterials
              .filter((material) => material.subject === "Physical Sciences")
              .map((material) => (
                <Card key={material.id} className="overflow-hidden">
                  {/* Similar card content as above */}
                  <div className="relative h-40 bg-muted">
                    {material.thumbnail ? (
                      <Image
                        src={material.thumbnail || "/placeholder.svg"}
                        alt={material.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        {material.type === "PDF" && <FileText className="h-16 w-16 text-muted-foreground/30" />}
                        {material.type === "Video" && <Video className="h-16 w-16 text-muted-foreground/30" />}
                        {material.type === "Interactive" && (
                          <FileImage className="h-16 w-16 text-muted-foreground/30" />
                        )}
                      </div>
                    )}
                    {material.type === "Video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-black/50 p-3">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Badge variant="secondary">Physical Sciences</Badge>
                      {material.new && <Badge>New</Badge>}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    <CardDescription>{material.topic}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        {material.type === "PDF" && <FileText className="h-4 w-4" />}
                        {material.type === "Video" && <Video className="h-4 w-4" />}
                        {material.type === "Interactive" && <FileImage className="h-4 w-4" />}
                        <span>{material.type}</span>
                      </div>
                      <span>{material.size}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="ml-1">{material.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          <span className="ml-1">{material.downloads}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="ml-1">{material.date}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      {material.type === "PDF" || material.type === "Video" ? (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4 mr-2" />
                          View Online
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMaterials
              .filter((material) => material.type === "Video")
              .map((material) => (
                <Card key={material.id} className="overflow-hidden">
                  {/* Video-specific card content */}
                  <div className="relative h-40 bg-muted">
                    {material.thumbnail ? (
                      <Image
                        src={material.thumbnail || "/placeholder.svg"}
                        alt={material.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Video className="h-16 w-16 text-muted-foreground/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Badge variant={material.subject === "Mathematics" ? "default" : "secondary"}>
                        {material.subject}
                      </Badge>
                      {material.new && <Badge>New</Badge>}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    <CardDescription>{material.topic}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Video className="h-4 w-4" />
                        <span>{material.type}</span>
                      </div>
                      <span>{material.size}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="ml-1">{material.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          <span className="ml-1">{material.downloads}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="ml-1">{material.date}</span>
                      </div>
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

        <TabsContent value="interactive">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMaterials
              .filter((material) => material.type === "Interactive")
              .map((material) => (
                <Card key={material.id} className="overflow-hidden">
                  {/* Interactive-specific card content */}
                  <div className="relative h-40 bg-muted">
                    {material.thumbnail ? (
                      <Image
                        src={material.thumbnail || "/placeholder.svg"}
                        alt={material.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <FileImage className="h-16 w-16 text-muted-foreground/30" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Badge variant={material.subject === "Mathematics" ? "default" : "secondary"}>
                        {material.subject}
                      </Badge>
                      {material.new && <Badge>New</Badge>}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    <CardDescription>{material.topic}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <FileImage className="h-4 w-4" />
                        <span>{material.type}</span>
                      </div>
                      <span>{material.size}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="ml-1">{material.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          <span className="ml-1">{material.downloads}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="ml-1">{material.date}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View Online
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
