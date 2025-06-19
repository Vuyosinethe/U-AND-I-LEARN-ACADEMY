import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
                <p className="text-muted-foreground md:text-xl">
                  We're here to answer your questions and provide more information about our programs.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image src="/images/contact-us.jpg" alt="Contact U&I LEARN ACADEMY" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="text-muted-foreground">
                  For more information about our programs, registration details, or general inquiries, please feel free
                  to contact us using the information below.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">uandilearnacademy.co.za</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">068 766 8015/061 270 7020</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Locations</h3>
                      <p className="text-muted-foreground">We operate in multiple provinces across South Africa</p>
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
                <div className="pt-6">
                  <h3 className="font-bold mb-2">Operating Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00am - 5:00pm</p>
                  <p className="text-muted-foreground">Weekend Sessions: Saturday 10:00am - Sunday 2:00pm</p>
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
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="registration">Registration Information</option>
                      <option value="programs">Program Details</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
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
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Locations</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We operate in multiple provinces across South Africa. Contact us to find the nearest location to you.
                </p>
              </div>
            </div>
            <div className="mt-12 rounded-xl overflow-hidden border">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="https://media.istockphoto.com/id/539125428/photo/republic-of-south-africas-national-flag.jpg?s=612x612&w=0&k=20&c=YofdbgVLv36hMUG5YbHQ9aOsfkBb-fLA0LBNJeSkYgw="
                  alt="South African flag representing our locations across the country"
                  fill
                  className="object-cover"
                />
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
                  Find answers to common questions about contacting and registering with us.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  question: "How can I register for a weekend session?",
                  answer:
                    "You can register online through our website, by calling our office, or by sending us an email. We'll guide you through the registration process and provide payment instructions.",
                },
                {
                  question: "What is the best way to contact you for urgent inquiries?",
                  answer:
                    "For urgent inquiries, please call us directly at 061 270 7020. Our team is available Monday through Friday from 9:00am to 5:00pm.",
                },
                {
                  question: "Do you offer virtual consultations?",
                  answer:
                    "Yes, we offer virtual consultations for students and parents who cannot visit us in person. Please contact us to schedule a virtual meeting.",
                },
                {
                  question: "How quickly do you respond to email inquiries?",
                  answer:
                    "We aim to respond to all email inquiries within 24-48 hours during business days. For faster responses, please call us directly.",
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

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Stay Updated</h2>
                <p className="md:text-xl">
                  Subscribe to our newsletter to receive updates about upcoming sessions, educational tips, and special
                  offers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="shrink-0 bg-red-600 hover:bg-red-700 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
