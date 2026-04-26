"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/#menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({
  theme = "dark",
}: {
  theme?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const isLight = theme === "light";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open navigation menu"
          className={`focus:outline-none ${isLight ? "text-foreground" : "text-white"}`}
        >
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full sm:w-80 bg-background border-none p-0 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-10">
          <span className="font-serif text-2xl font-bold text-primary tracking-tight">
            Braga Eats
          </span>
          <SheetClose asChild>
            <button
              aria-label="Close menu"
              className="text-background/60 hover:text-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </SheetClose>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 px-8 mt-4 flex-1">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="text-3xl font-sans font-normal text-primary transition-colors py-2 leading-tight"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        {/* Footer info */}
        <div className="px-8 py-10 border-t border-foreground/10">
          <p className="text-xs text-foreground/40 uppercase tracking-widest">
            Jl. Braga, Bandung, Indonesia
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
