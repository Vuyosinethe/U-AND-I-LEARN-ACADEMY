import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
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
                  About <span className="text-orange-500">U&I LEARN ACADEMY</span>
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Founded by Vuyo Sinethe with a vision to provide exceptional academic support and guidance to students
                  across South Africa.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/473324356_609203601591430_5675037563289947779_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=xlOTnKYk6tAQ7kNvwGk2_zT&_nc_oc=AdkhzJ_Yan32GSbg_pC6lPuvfx6b2T4_Gwdm8ee_asWle2T_NvKp2nINr3I_PzyrjZE&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=7Tq6K87At5mRNFDWOsdQuw&oh=00_AYHj8YG3CLc2Fu3Dzq8VaWNg5ed4_vD3suL7XdFFL-JOjg&oe=67F4D4EB"
                  alt="Vuyo Sinethe, Founder of U&I LEARN ACADEMY"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden order-last lg:order-first">
                <Image
                  src="/images/students-group.jpg"
                  alt="Group of students learning together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground">
                  U&I LEARN ACADEMY was born from a passion for education and a deep understanding of the challenges
                  that Grade 12 students face as they prepare for their crucial final exams.
                </p>
                <p className="text-muted-foreground">
                  Our founder, Vuyo Sinethe, recognized that many students needed additional support beyond what was
                  available in their regular school environment. With years of experience in education and a commitment
                  to student success, Vuyo established U&I LEARN ACADEMY to provide intensive weekend sessions that
                  focus on clarifying challenging topics and preparing students for their exams.
                </p>
                <p className="text-muted-foreground">
                  Since our founding, we have helped hundreds of students across South Africa achieve academic
                  excellence and gain admission to their preferred universities and colleges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Team of Educators</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We recruit the best teachers from schools across South Africa to provide exceptional instruction
                  during our weekend sessions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  name: "Disnormal Boy",
                  role: "Mathematics Specialist",
                  image: "https://pbs.twimg.com/media/FtOcs01XwAAmlrL?format=jpg&name=large",
                  bio: "With over 15 years of teaching experience, Disnormal has helped hundreds of students achieve distinctions in Mathematics.",
                },
                {
                  name: "Ms Guqaza",
                  role: "Physical Sciences Educator",
                  image: "/images/teacher-2.jpg",
                  bio: "Guqaza holds a Master's degree in Physics and is known for her ability to explain complex concepts in simple terms.",
                },
                {
                  name: "Gift Bozekana",
                  role: "Road to Varsity specialist",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fwVTrPmmNRMcE23dqZDjf2XVBXem5lT2Zg&s",
                  bio: "Gift teaches and guides students on university applications, career choices,NSFAS and about scholarship opportunities",
                },
                {
                  name: "David Nkosi",
                  role: "Life Sciences Expert",
                  image: "/images/teacher-3.jpg",
                  bio: "David's interactive teaching style and deep knowledge of biology have made him a favorite among students.",
                },
              ].map((teacher, i) => (
                <div key={i} className="flex flex-col items-center space-y-4">
                  <div className="relative h-48 w-48 rounded-full overflow-hidden">
                    <Image src={teacher.image || "/placeholder.svg"} alt={teacher.name} fill className="object-cover" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{teacher.name}</h3>
                    <p className="text-primary font-medium">{teacher.role}</p>
                    <p className="text-muted-foreground mt-2">{teacher.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Values</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  These core principles guide everything we do at U&I LEARN ACADEMY.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in all aspects of our educational programs and services.",
                },
                {
                  title: "Integrity",
                  description:
                    "We conduct ourselves with honesty, transparency, and ethical behavior in all interactions.",
                },
                {
                  title: "Innovation",
                  description:
                    "We continuously seek new and effective ways to enhance the learning experience for our students.",
                },
                {
                  title: "Inclusivity",
                  description: "We create a welcoming environment where all students feel valued and supported.",
                },
              ].map((value, i) => (
                <div key={i} className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-center text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Next Weekend Session</h2>
                <p className="md:text-xl">
                  Experience the U&I LEARN ACADEMY difference and take your academic performance to the next level.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/programs">View Programs</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241011.jpg"
                  alt="Students celebrating academic success"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
