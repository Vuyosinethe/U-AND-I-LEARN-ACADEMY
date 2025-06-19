import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Clock, MapPin, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Weekend Programs</h1>
                <p className="text-muted-foreground md:text-xl">
                  Intensive weekend sessions designed to help Grade 12 students excel in their final exams.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/intensive-learning.jpg"
                  alt="Students in an intensive learning session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Program Overview</h2>
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
                <Image src="https://trevornoahfoundation.org/wp-content/uploads/2021/12/1ede47f5-12f9-4b19-b511-46fe17e89430-768x576.jpeg" alt="Weekend learning session" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Subjects Covered</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our comprehensive program covers all major subjects in the Grade 12 curriculum.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold mb-4">Core Subjects</h3>
                <ul className="space-y-3">
                  {["Mathematics", "Physical Sciences", "Life Sciences", "Geography"].map((subject, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold mb-4">Commerce & Career Guidance</h3>
                <ul className="space-y-3">
                  {["Accounting", "Economics", "Road to Varsity"].map((subject, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Speakers</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Learn from inspiring speakers who will share their knowledge and experiences before and after each
                  session.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-48 w-48 rounded-full overflow-hidden">
                  <Image
                    src="https://yt3.googleusercontent.com/TlRJTGFLmgcinpt8pEEbopJv12q7uj7QKTPO0h6aHIhngM52wnVfBvSoM9KsKAu4KinTuUCmLC4=s160-c-k-c0x00ffffff-no-rj"
                    alt="Gift Bozekana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Gift Bozekana</h3>
                  <p className="text-primary font-medium">Varsity expert</p>
                  <p className="text-muted-foreground mt-2">
                    Gift guides students on university applications, career choices,NSFAS and scholarship opportunities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-48 w-48 rounded-full overflow-hidden">
                  <Image
                    src="https://i.ytimg.com/vi/XBpMyOGSc1k/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgWyhgMA8=&rs=AOn4CLC0SGnIDKogx_Mkl3g5XFS4CYtcAA"
                    alt="Siyabonga Mpungose"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Sicelo Mncube</h3>
                  <p className="text-primary font-medium">Motivational Speaker</p>
                  <p className="text-muted-foreground mt-2">
                    Sicelo inspires students with his journey from humble beginnings and shares insights about life
                    after varsity.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-48 w-48 rounded-full overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/DlfXoYdwFyfGETyGIaB_VC3lFq5-OSJTTxJc8bj--MMYuCKWrKo8ZeaMW6Nlu4uIqcujInVsdPzTxmZ9EqXcv5wQ6669T2C0vj_6x74cnEDTAPL_=s750"
                    alt="Nomfundo Mkhize"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Nomfundo Mkhize</h3>
                  <p className="text-primary font-medium">Top Achiever</p>
                  <p className="text-muted-foreground mt-2">
                    Nomfundo inspires students and shares his journey to 7 distinctions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Upcoming Sessions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Join one of our upcoming weekend sessions in a location near you.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  date: "August 20-21, 2025",
                  locations: ["Johannesburg", "Cape Town", "Durban"],
                  image: "/images/johannesburg.jpg",
                },
                {
                  date: "August 4-5, 2025",
                  locations: ["Pretoria", "Port Elizabeth", "Bloemfontein"],
                  image: "/images/pretoria.jpg",
                },
                {
                  date: "August 18-19, 2025",
                  locations: ["Johannesburg", "Cape Town", "Polokwane"],
                  image: "/images/cape-town.jpg",
                },
              ].map((session, i) => (
                <div key={i} className="border rounded-lg overflow-hidden bg-background">
                  <div className="relative h-48">
                    <Image
                      src={session.image || "/placeholder.svg"}
                      alt={`Session in ${session.locations[0]}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-bold">{session.date}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Locations:</span>
                        <ul className="mt-1 space-y-1">
                          {session.locations.map((location, j) => (
                            <li key={j}>{location}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Saturday 10:00am - Sunday 2:00pm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Limited number of students per location</span>
                    </div>
                    <Button className="w-full mt-4" asChild>
                      <Link href="/register">Register Now</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Program Fees</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Invest in your academic success with our affordable weekend sessions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold">Single Session</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">R475</span>
                  <span className="text-muted-foreground"> per weekend</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "One intensive weekend session",
                    "All meals included",
                    "Study materials provided",
                    "Access to expert teachers",
                    "Certificate of attendance",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/register">Register Now</Link>
                </Button>
              </div>
              <div className="border rounded-lg p-6 bg-primary text-primary-foreground relative">
                <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold">Three Sessions</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">R1,430</span>
                  <span className="text-primary-foreground/80"> for three weekends</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Three intensive weekend sessions",
                    "All meals included",
                    "Comprehensive study materials",
                    "Access to expert teachers",
                    "Certificate of completion",
                    "Priority registration for future sessions",
                    "10% discount on future sessions",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/register">Register Now</Link>
                </Button>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold">Full Term</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">R2,850</span>
                  <span className="text-muted-foreground"> for six weekends</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Six intensive weekend sessions",
                    "All meals included",
                    "Comprehensive study materials",
                    "Access to expert teachers",
                    "Certificate of completion",
                    "One-on-one consultation session",
                    "Access to online resources",
                    "15% discount on future sessions",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/register">Register Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about our weekend sessions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  question: "What should students bring to the weekend sessions?",
                  answer:
                    "Students should bring their textbooks, notebooks, stationery, and any specific materials related to the subjects they're studying. We provide meals and additional study materials.",
                },
                {
                  question: "Are accommodations provided for students?",
                  answer:
                    "No, our weekend sessions do not include overnight accommodations. Students should arrange their own transportation and accommodation if needed.",
                },
                {
                  question: "How are students grouped during the sessions?",
                  answer:
                    "Students are grouped according to their subjects and proficiency levels to ensure they receive appropriate instruction and support.",
                },
                {
                  question: "Can parents observe the sessions?",
                  answer:
                    "We have designated times when parents can visit and observe the sessions. Please contact us in advance to arrange a visit.",
                },
                {
                  question: "What is your refund policy?",
                  answer:
                    "We offer full refunds for cancellations made at least 7 days before the session. For cancellations made less than 7 days before, we offer a credit for a future session.",
                },
                {
                  question: "Do you offer financial assistance or scholarships?",
                  answer:
                    "We have a limited number of scholarships available for students who demonstrate financial need and academic potential. Please contact us for more information.",
                },
              ].map((faq, i) => (
                <div key={i} className="border rounded-lg p-6 bg-background">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Excel in Your Grade 12 Exams?
                </h2>
                <p className="max-w-[700px] md:text-xl">
                  Join our intensive weekend sessions and take your academic performance to the next level.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/register">Register Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
