import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-8 border-t border-border ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} <Link href="/" className="font-semibold text-violet-600 transition-colors hover:text-violet-700">Codisim</Link>. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground transition-colors hover:text-primary">Terms of Service</Link>
            <Link href="/support" className="text-muted-foreground transition-colors hover:text-primary">Support</Link>
            <Link href="/account-deletion" className="text-muted-foreground transition-colors hover:text-primary">Account Deletion</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
