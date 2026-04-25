import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/#menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-background px-8 pt-20 pb-12">
      <div className="max-w-screen-lg mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 pb-16 border-b border-background/10">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-normal tracking-tight leading-none">
              Braga Eats
            </h2>
            <p className="text-background/60 text-sm mt-4 max-w-xs">
              Bandung Heritage Flavors Woodfired — Paris van Java.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-background/60 hover:text-background text-sm uppercase tracking-widest transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
          <p className="text-background/60 text-xs uppercase tracking-widest">
            Jl. Braga, Bandung 40111, Indonesia
          </p>
          <p className="text-background/60 text-xs">
            © {new Date().getFullYear()} Kembang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
