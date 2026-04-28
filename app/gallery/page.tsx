import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Gallery — Kembang",
  description:
    "A visual journey through Kembang — Bandung Heritage Flavors Woodfired in Braga, Bandung.",
};

const galleryItems = [
  { id: 1, label: "The Grill", image: "/sate.jpg" },
  { id: 2, label: "Batagor Sizzle", image: "/mie.jpg" },
  { id: 3, label: "Open Fire", image: "/baso.jpg" },
  { id: 4, label: "Pasundan Spices", image: "/cilok.jpg" },
  { id: 5, label: "Braga Vibes", image: "/street.jpg" },
  { id: 6, label: "Bandung Night", image: "/street.jpg" },
  { id: 7, label: "The Chef", image: "/chef.jpg" },
  { id: 8, label: "Siomay Steam", image: "/cilok.jpg" },
  { id: 9, label: "The Street", image: "/street.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      <header>
        <Navbar theme="light" />
      </header>
      <main className="min-h-screen">
        <section className="pt-36 pb-20 px-8 md:px-16 lg:px-24">
          <div className="mb-16">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
              Gallery
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-normal text-primary leading-tight tracking-tight">
              Fire, food,
              <br />
              and people.
            </h1>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
