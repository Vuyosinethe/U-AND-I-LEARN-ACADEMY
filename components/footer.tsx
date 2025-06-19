import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/images/ui-learn-logo-new.png"
            alt="U&I LEARN ACADEMY Logo"
            width={100}
            height={50}
            className="h-auto"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} U&I LEARN ACADEMY. All rights reserved. Founded by Vuyo Sinethe.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

