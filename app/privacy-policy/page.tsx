import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: April 4, 2025</p>
          </div>

          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At U&I LEARN ACADEMY, we respect your privacy and are committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our services, including:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, postal address, and payment
                information.
              </li>
              <li>
                <strong>Educational Information:</strong> Academic records, assessment results, and learning progress.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website and services.
              </li>
              <li>
                <strong>Device Information:</strong> Information about the device you use to access our services.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process payments and send administrative information</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Communicate with you about our services, updates, and promotions</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, prevent, and address technical issues and fraudulent activities</li>
            </ul>

            <h2>4. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers who perform services on our behalf</li>
              <li>Educational institutions and partners with your consent</li>
              <li>Legal authorities when required by law or to protect our rights</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>7. Children's Privacy</h2>
            <p>
              Our services are intended for users who are 18 years of age or older, or for minors with parental consent.
              We do not knowingly collect personal information from children under 13 without parental consent.
            </p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@uilearnacademy.co.za" className="text-primary hover:underline">
                privacy@uilearnacademy.co.za
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

