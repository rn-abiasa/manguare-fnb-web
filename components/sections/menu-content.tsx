"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────── */

type MenuItem = {
  no: string;
  name: string;
  ingredients: string;
};

type Category = {
  id: string;
  label: string;
  items: MenuItem[];
};

type MenuTab = {
  id: string;
  label: string;
  categories: Category[];
};

const menuData: MenuTab[] = [
  {
    id: "food",
    label: "Food",
    categories: [
      {
        id: "small",
        label: "Small Bites",
        items: [
          { no: "F01", name: "Cilok Pasundan", ingredients: "Tapioka, bumbu kacang, kecap manis" },
          { no: "F02", name: "Batagor Braga", ingredients: "Ikan tenggiri, tahu, saus kacang pedas" },
          { no: "F03", name: "Siomay Bandung", ingredients: "Udang, sayuran, saus kacang" },
          { no: "F04", name: "Tahu Gejrot", ingredients: "Tahu goreng, cuka, bawang, cabai rawit" },
          { no: "F05", name: "Seblak Mini", ingredients: "Kerupuk basah, telur, kencur, cabai" },
        ],
      },
      {
        id: "big",
        label: "Big Plates",
        items: [
          { no: "F06", name: "Mie Braga", ingredients: "Mie telur, ayam suwir, kaldu sapi, caisim" },
          { no: "F07", name: "Baso Firepot", ingredients: "Bakso daging sapi, soun, tahu, sumsum" },
          { no: "F08", name: "Sate Woodfired", ingredients: "Daging sapi pilihan, sambal kacang, lontong" },
          { no: "F09", name: "Nasi Liwet Sundanese", ingredients: "Nasi santan, ikan asin, sambal, lalapan" },
          { no: "F10", name: "Grilled Peuyeum", ingredients: "Peuyeum bakar, kelapa parut, gula merah" },
        ],
      },
      {
        id: "family",
        label: "Family Sets",
        items: [
          { no: "F11", name: "Paket Nasi Tradisional", ingredients: "Nasi putih, 3 lauk pilihan, sambal, kerupuk — untuk 4 orang" },
          { no: "F12", name: "Paket Woodfired", ingredients: "Sate sapi, mie braga, baso, minuman — untuk 4 orang" },
          { no: "F13", name: "Paket Heritage", ingredients: "Nasi liwet, ayam bakar, lalapan, sambal terasi — untuk 6 orang" },
        ],
      },
    ],
  },
  {
    id: "drink",
    label: "Drink",
    categories: [
      {
        id: "cold",
        label: "Cold Drinks",
        items: [
          { no: "D01", name: "Es Jeruk Peras", ingredients: "Jeruk Garut segar, gula aren, es batu" },
          { no: "D02", name: "Es Teh Braga", ingredients: "Teh hijau, sirop gula, lemon, es batu" },
          { no: "D03", name: "Es Cincau Hitam", ingredients: "Cincau hitam, santan, gula merah, es batu" },
          { no: "D04", name: "Es Kelapa Muda", ingredients: "Kelapa segar, sirop pandan, nata de coco" },
        ],
      },
      {
        id: "hot",
        label: "Hot Drinks",
        items: [
          { no: "D05", name: "Teh Panas Wangi", ingredients: "Teh wangi pilihan, gula batu" },
          { no: "D06", name: "Jahe Susu", ingredients: "Jahe merah, susu segar, gula aren" },
          { no: "D07", name: "Kopi Bandung", ingredients: "Kopi robusta lokal, susu, gula merah" },
        ],
      },
      {
        id: "special",
        label: "Specials",
        items: [
          { no: "D08", name: "Bandrek Tradisional", ingredients: "Jahe, kayu manis, cengkeh, serai, gula aren" },
          { no: "D09", name: "Bajigur Braga", ingredients: "Santan, gula aren, jahe, kopi hitam" },
          { no: "D10", name: "Wedang Uwuh", ingredients: "Rempah kayu secang, cengkeh, jahe, gula batu" },
        ],
      },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    categories: [
      {
        id: "sweet",
        label: "Sweet Bites",
        items: [
          { no: "S01", name: "Cendol Braga", ingredients: "Tepung beras hijau, santan, gula merah cair, es batu" },
          { no: "S02", name: "Klepon Pandan", ingredients: "Tepung ketan, gula merah, kelapa parut, daun pandan" },
          { no: "S03", name: "Bubur Sumsum", ingredients: "Tepung beras, santan kental, gula merah" },
        ],
      },
      {
        id: "traditional",
        label: "Traditional",
        items: [
          { no: "S04", name: "Surabi Oncom", ingredients: "Tepung beras, oncom, santan, daun pandan" },
          { no: "S05", name: "Kue Putu Bambu", ingredients: "Tepung beras, gula merah, kelapa parut, daun pandan" },
          { no: "S06", name: "Awug Sunda", ingredients: "Tepung beras, gula merah, kelapa, pandan" },
          { no: "S07", name: "Wajit Cililin", ingredients: "Ketan, gula merah, santan, daun pandan" },
        ],
      },
    ],
  },
];

/* ─── Sub-components ────────────────────────────────────────── */

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-border last:border-b-0">
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <p className="text-sm md:text-base font-semibold text-foreground leading-snug">
          {item.name}
        </p>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {item.ingredients}
        </p>
      </div>
      <span className="text-xs text-muted-foreground/60 font-mono shrink-0 pt-0.5 tracking-widest">
        {item.no}
      </span>
    </div>
  );
}

function CategoryBlock({ category }: { category: Category }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
        {category.label}
      </p>
      <div>
        {category.items.map((item) => (
          <ItemRow key={item.no} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ─── Mobile Accordion ──────────────────────────────────────── */

function MobileAccordion({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState<string | null>(categories[0]?.id ?? null);

  return (
    <div className="divide-y divide-border border-y border-border">
      {categories.map((cat) => {
        const isOpen = open === cat.id;
        return (
          <div key={cat.id}>
            <button
              onClick={() => setOpen(isOpen ? null : cat.id)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-foreground">
                {cat.label}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[1000px] pb-4" : "max-h-0"
              }`}
            >
              {cat.items.map((item) => (
                <ItemRow key={item.no} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Desktop Side-tabs ─────────────────────────────────────── */

function DesktopCategoryLayout({ categories }: { categories: Category[] }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");

  const current = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <div className="grid grid-cols-[200px_1fr] gap-12 xl:gap-20 items-start">
      {/* Left: category list */}
      <nav className="flex flex-col gap-1 sticky top-32">
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-left py-3 pr-4 border-r-2 transition-all duration-200 text-sm uppercase tracking-widest ${
                isActive
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </nav>

      {/* Right: items */}
      {current && (
        <div key={current.id}>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
            {current.label}
          </p>
          <div>
            {current.items.map((item) => (
              <ItemRow key={item.no} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */

export default function MenuContent() {
  const [activeTab, setActiveTab] = useState<string>(menuData[0].id);

  const currentTab = menuData.find((t) => t.id === activeTab) ?? menuData[0];

  return (
    <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      {/* Section label */}
      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
        Our Menu
      </p>

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal text-primary leading-tight tracking-tight mb-16">
        What we serve,
        <br />
        with fire &amp; soul.
      </h1>

      {/* Main tabs: Food / Drink / Dessert */}
      <div className="flex gap-0 border-b border-border mb-12 md:mb-16">
        {menuData.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-4 pr-8 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-8 h-[2px] bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile: Accordion */}
      <div className="md:hidden">
        <MobileAccordion key={activeTab} categories={currentTab.categories} />
      </div>

      {/* Desktop: Side-tabs */}
      <div className="hidden md:block">
        <DesktopCategoryLayout
          key={activeTab}
          categories={currentTab.categories}
        />
      </div>
    </section>
  );
}
