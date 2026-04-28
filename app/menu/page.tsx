import type { Metadata } from "next";
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
      <main className="min-h-screen pt-12">
        <MenuContent />
      </main>
      <Footer />
    </>
  );
}
