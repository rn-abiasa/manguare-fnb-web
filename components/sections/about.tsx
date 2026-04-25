import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      {/* Label */}
      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-10">
        About Us
      </p>

      {/* Editorial layout: large headline + body text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-normal leading-tight tracking-tight">
            Centuries of Sundanese tradition, reborn on the streets of Bandung.
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:pt-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            Kembang brings the fire and soul of Bandung's heritage flavors to the heart of Braga. Our recipes are passed down through generations — grilled over open wood flames, served fresh, and made with nothing but honest ingredients.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We believe food is memory. Every bite is a journey through the historic alleys of Bandung — unforgettable, warm, and alive.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground underline underline-offset-4 hover:text-primary transition-colors mt-2"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
