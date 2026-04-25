import Image from "next/image";

const menuItems = [
  { label: "Mie Braga", image: "/mie.jpg" },
  { label: "Cilok Pasundan", image: "/cilok.jpg" },
  { label: "Baso Firepot", image: "/baso.jpg" },
  { label: "Grilled Peuyeum", image: "/sate.jpg" },
  { label: "Sate Woodfired", image: "/sate.jpg" },
  { label: "Mie Freshness", image: "/mie.jpg" },
];

export default function Menu() {
  return (
    <section id="menu" className="px-8 py-24 md:py-32 bg-muted/30">
      {/* Header */}
      <div className="max-w-screen-lg mx-auto mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Our Menu
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-normal leading-tight tracking-tight">
            From the fire,
            <br />
            to your hands.
          </h2>
        </div>
        <p className="text-base text-muted-foreground max-w-xs">
          Woodfired heritage food made fresh. Simple, honest, unforgettable.
        </p>
      </div>

      {/* Photo grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {menuItems.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-foreground">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
