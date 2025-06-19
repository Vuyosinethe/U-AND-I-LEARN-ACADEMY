import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: April 4, 2025</p>
          </div>

          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to U&I LEARN ACADEMY. These Terms of Service govern your use of our website and services. By
              accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2>2. Definitions</h2>
            <p>
              <strong>"Service"</strong> refers to the U&I LEARN ACADEMY website, mobile applications, and educational
              programs.
              <br />
              <strong>"User"</strong> refers to students, parents, guardians, or any individual accessing our Service.
              <br />
              <strong>"Content"</strong> refers to all materials, information, and resources provided through our
              Service.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate and complete information. You are
              responsible for safeguarding your account credentials and for all activities that occur under your
              account.
            </p>

            <h2>4. Payment Terms</h2>
            <p>
              Payment for our educational programs must be made in advance. We accept various payment methods as
              indicated on our payment page. Refunds are subject to our refund policy.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content, materials, and resources provided through our Service are the property of U&I LEARN ACADEMY
              and are protected by copyright and other intellectual property laws. Users may not reproduce, distribute,
              or create derivative works without our express permission.
            </p>

            <h2>6. User Conduct</h2>
            <p>
              Users agree to use our Service in a manner consistent with all applicable laws and regulations. Prohibited
              conduct includes but is not limited to: harassment, impersonation, unauthorized access, and distribution
              of harmful content.
            </p>

            <h2>7. Privacy</h2>
            <p>
              Our Privacy Policy, available at{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , describes how we collect, use, and share information about you when you use our Service.
            </p>

            <h2>8. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our Service immediately, without prior notice or
              liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              U&I LEARN ACADEMY shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of or inability to use the Service.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by
              posting the new Terms on our website and updating the "Last updated" date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:info@uilearnacademy.co.za" className="text-primary hover:underline">
                info@uilearnacademy.co.za
              </a>
              .
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

