import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "About — Kembang",
  description: "The story behind Kembang — Bandung Heritage Flavors Woodfired in Braga, Bandung.",
};

export default function AboutPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        {/* Hero area */}
        <section className="pt-36 pb-20 px-8 max-w-screen-lg mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>

          {/* Large editorial headline */}
          <div className="mb-20">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
              Our Story
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-normal leading-tight tracking-tight">
              Born in Braga.<br />Made in Bandung.
            </h1>
          </div>

          {/* Two-column body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-6 text-base text-muted-foreground leading-relaxed">
              <p>
                Kembang started with a single recipe — a hidden family treasure of Sundanese flavors, grilled over charcoal in a small kitchen in Bandung. That one smoky aroma never left us.
              </p>
              <p>
                Years later, we carried that fire to the historic street of Braga. We set up our woodfired grill, and we've been feeding hungry souls ever since.
              </p>
              <p>
                Every item on our menu is a memory — grilled over open flames, seasoned by hand, and served the way it was meant to be: hot, honest, and straight from the fire.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-base text-muted-foreground leading-relaxed">
              <p>
                We source our ingredients with intention. Our spices are local, our methods are traditional, and our passion is to preserve the heritage of Pasundan.
              </p>
              <p>
                Kembang means "flower" in Sundanese — but for us, it means the blossoming of flavors. It means to slow down, to gather, and to experience heritage as it was meant to be.
              </p>
              <p>
                Come hungry. Leave happy.
              </p>
            </div>
          </div>
        </section>

        {/* Values strip */}
        <section className="border-t border-border px-8 py-16 max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Woodfired", desc: "Every dish cooked over open hardwood flame — no gas, no shortcuts." },
              { title: "Heritage Spices", desc: "Local sourcing, traditional blends, and recipes unchanged for generations." },
              { title: "Pasundan Soul", desc: "Warm, authentic, and served with the legendary hospitality of Bandung." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-display font-normal mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
