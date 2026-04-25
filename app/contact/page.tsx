"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: implementasi pengiriman form bisa ditambahkan di sini
    setStatus("sent");
  }

  return (
    <>
      <header>
        <Navbar theme="light" />
      </header>
      <main className="min-h-screen">
        <section className="pt-36 pb-20 px-8 md:px-16 lg:px-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left: info */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
                Contact
              </p>
              <h1 className="text-5xl md:text-6xl font-display font-normal leading-tight tracking-tight mb-10">
                Come find<br />us.
              </h1>

              <div className="flex flex-col gap-8 text-sm text-muted-foreground">
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground mb-2">Address</p>
                  <p>Jl. Braga, Bandung,<br />West Java 40111, Indonesia</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground mb-2">Hours</p>
                  <p>Monday – Sunday<br />11:00 AM – 10:00 PM</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground mb-2">Reservations</p>
                  <a
                    href="tel:+62221234567"
                    className="hover:text-foreground transition-colors"
                  >
                    +62 22 1234 567
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {status === "sent" ? (
                <div className="py-12">
                  <p className="text-2xl font-display font-normal">Thank you.</p>
                  <p className="text-muted-foreground mt-2 text-sm">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="What's on your mind?"
                      className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                    />
                  </div>
                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/80"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
