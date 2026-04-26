import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/sections/footer";
import MenuContent from "@/components/sections/menu-content";

export const metadata: Metadata = {
  title: "Menu — Kembang",
  description:
    "Browse the full Kembang menu — woodfired food, heritage drinks, and traditional desserts from the heart of Bandung.",
};

export default function MenuPage() {
  return (
    <>
      <header>
        <Navbar theme="light" />
      </header>
      <main className="min-h-screen">
        {/* Back link */}
        <div className="pt-36 px-8 md:px-16 lg:px-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>
        </div>

        <MenuContent />
      </main>
      <Footer />
    </>
  );
}
