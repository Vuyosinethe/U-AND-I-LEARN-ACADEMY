"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Mail, Phone, Clock, MapPin, CheckCircle, Award, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { subscribeToNewsletter } from "./actions/subscribe"

export default function Home() {
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubscribe(formData: FormData) {
    setIsSubmitting(true)
    const result = await subscribeToNewsletter(formData)
    setSubscriptionStatus(result)
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Unlock Your Potential with <span className="text-orange-500">U&I LEARN ACADEMY</span>
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Intensive weekend classes designed to help Grade 12 students excel in their final exams across South
                  Africa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/register">Register for Classes</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/images/hero-students.jpg"
                  alt="Students learning in a classroom"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Empowering Grade 12 Students Across South Africa
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  At U&I LEARN ACADEMY, we understand the challenges that Grade 12 students face as they prepare for
                  their crucial exams. With years of experience in education and a passion for empowering young minds,
                  our team of dedicated educators and professionals are here to provide comprehensive support and
                  guidance every step of the way.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <BookOpen className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Expert Teachers</h3>
                <p className="text-center text-muted-foreground">
                  Learn from experienced teachers recruited from top schools across South Africa.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Weekend Sessions</h3>
                <p className="text-center text-muted-foreground">
                  Intensive learning from Saturday 10:00am to Sunday 2:00pm in a camp-like environment.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Proven Results</h3>
                <p className="text-center text-muted-foreground">
                  Our structured approach helps students achieve distinctions in their final exams.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://www.sabcnews.com/sabcnews/wp-content/uploads/2022/10/Matric-Tate-750x375-2.png"
                  alt="South African matric students in classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Creating a Supportive Learning Environment
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Our mission at U&I LEARN ACADEMY is to create a supportive and enriching learning environment where
                  students can thrive academically, intellectually, and personally. Through intensive weekend sessions,
                  personalized instruction, and innovative teaching methodologies, we aim to equip students with the
                  knowledge, skills, and confidence they need to succeed in their exams and beyond.
                </p>
                <ul className="space-y-2">
                  {[
                    "Clarify challenging topics with personalized attention",
                    "Provide comprehensive exam preparation strategies",
                    "Offer prizes for top-performing students",
                    "Award certifications upon program completion",
                    "Create a holistic learning experience",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Programs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Intensive Weekend Sessions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our weekend sessions are designed to provide Grade 12 students with the support and guidance they need
                  to excel in their final exams.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold mb-4">Program Features</h3>
                <ul className="space-y-3">
                  {[
                    "Expert teachers from various schools across South Africa",
                    "Intensive weekend sessions (Saturday 10:00am - Sunday 2:00pm)",
                    "Comprehensive coverage of Grade 12 curriculum",
                    "Focus on challenging topics and exam preparation",
                    "Meals provided throughout the weekend",
                    "Secure and conducive learning environment",
                    "Certificates of completion",
                    "Prizes for top-performing students",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/intensive-session.jpg"
                  alt="Intensive learning session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/programs">View All Programs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Students Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from students who have experienced our intensive weekend sessions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  quote:
                    "The weekend sessions helped me understand complex topics that I struggled with in school. I achieved distinctions in Mathematics and Physical Sciences!",
                  name: "Thabo M.",
                  school: "Pretoria High School",
                  image: "/images/student-1.jpg",
                },
                {
                  quote:
                    "The teachers were exceptional and the focused environment really helped me prepare for my final exams. I'm now studying Engineering at university.",
                  name: "Lerato K.",
                  school: "Cape Town Academy",
                  image: "/images/student-2.jpg",
                },
                {
                  quote:
                    "U&I LEARN ACADEMY gave me the confidence and skills I needed to excel in my Grade 12 exams. The weekend format was intense but extremely effective.",
                  name: "Sipho N.",
                  school: "Durban College",
                  image: "/images/student-3.jpg",
                },
              ].map((testimonial, i) => (
                <div key={i} className="flex flex-col space-y-4 border rounded-lg p-6 bg-background">
                  <div className="relative h-16 w-16 mx-auto rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Register Now
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Next Weekend Session</h2>
                <p className="text-muted-foreground md:text-lg">
                  Secure your spot in our upcoming intensive weekend sessions. Limited seats available in each province.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Sessions run from Saturday 10:00am to Sunday 2:00pm</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Available in multiple provinces across South Africa</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Limited number of students per session</span>
                  </p>
                </div>
                <div className="pt-4">
                  <Button size="lg" asChild>
                    <Link href="/register">Register for Next Session</Link>
                  </Button>
                </div>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold mb-4">Upcoming Sessions</h3>
                <div className="space-y-4">
                  {[
                    {
                      date: "August 10-11, 2025",
                      locations: ["Johannesburg", "Cape Town", "Durban", "Eastern Cape"],
                    },
                    {
                      date: "August 17-18, 2025",
                      locations: ["Pretoria", "Port Elizabeth", "Bloemfontein", "Eastern Cape"],
                    },
                    {
                      date: "August 24-25, 2025",
                      locations: ["Johannesburg", "Cape Town", "Polokwane", "Eastern Cape"],
                    },
                  ].map((session, i) => (
                    <div key={i} className="border-b pb-4 last:border-0">
                      <p className="font-bold">{session.date}</p>
                      <p className="text-muted-foreground">Locations: {session.locations.join(", ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  For more information about our programs, registration details, or general inquiries, please feel free
                  to contact us.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">sinethevuyo060@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">061 270 7020</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Social Media</h3>
                    <div className="flex gap-4 mt-2">
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        <div className="relative h-6 w-6">
                          <Image src="/images/whatsapp-logo.png" alt="WhatsApp" fill className="object-contain" />
                        </div>
                        <span className="sr-only">WhatsApp</span>
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        <div className="relative h-6 w-6">
                          <Image src="/images/tiktok-logo.png" alt="TikTok" fill className="object-contain" />
                        </div>
                        <span className="sr-only">TikTok</span>
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        <div className="relative h-6 w-6">
                          <Image src="/images/facebook-logo.png" alt="Facebook" fill className="object-contain" />
                        </div>
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        <div className="relative h-6 w-6">
                          <Image src="/images/youtube-logo.png" alt="YouTube" fill className="object-contain" />
                        </div>
                        <span className="sr-only">YouTube</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="py-12 md:py-16 lg:py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Subscribe to our newsletter for the latest updates on classes, events, and educational resources.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                {subscriptionStatus?.success ? (
                  <div className="bg-green-50 p-4 rounded-md text-green-800">
                    <p className="font-medium">{subscriptionStatus.message}</p>
                  </div>
                ) : (
                  <form action={handleSubscribe} className="flex space-x-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      required
                    />
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </form>
                )}
                {subscriptionStatus?.success === false && (
                  <p className="text-sm text-red-500">{subscriptionStatus.message}</p>
                )}
                <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
