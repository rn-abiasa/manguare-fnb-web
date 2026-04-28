import { Amphora } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <>
      <section className="relative bg-[url('/gedung_sate_dither_background.png')] bg-cover bg-center h-screen w-full px-8 md:px-16 lg:px-24 py-10 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-normal text-white leading-none tracking-tighter text-center">
            Bandung
            <br />
            Heritage Flavors
            <br />
            Woodfired
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-medium text-white/80 mt-5 max-w-sm leading-relaxed text-center">
            BANDUNG HERITAGE FLAVORS WOODFIRED AND UNFORGETTABLE — BRINGING
            CENTURIES OLD RECIPES TO THE MODERN STREET
          </p>
          <div className="mt-10">
            <Button className="bg-background rounded-full text-black">
              RESERVATION
            </Button>
          </div>
        </div>
        <div
          id="marquee"
          className="absolute bottom-0 left-0 bg-background w-full py-4 overflow-hidden border-y border-primary/10"
        >
          <div className="animate-marquee-loop whitespace-nowrap flex">
            {/* Group 1 */}
            <div className="flex items-center gap-12 px-6">
              <span className="text-base font-semibold text-primary uppercase">
                JL. BRAGA, BANDUNG, INDONESIA
              </span>
              <span className="text-base font-semibold text-primary uppercase">
                JL. BRAGA, BANDUNG, INDONESIA
              </span>
              <span className="text-base font-semibold text-primary uppercase">
                JL. BRAGA, BANDUNG, INDONESIA
              </span>
              <span className="text-base font-semibold text-primary uppercase">
                JL. BRAGA, BANDUNG, INDONESIA
              </span>
            </div>
            {/* Group 2 (Copy for seamless loop) */}
            <div className="flex items-center gap-12 px-6">
              <span className="text-base font-semibold text-primary uppercase">
                JL. BRAGA, BANDUNG, INDONESIA
              </span>
              <span className="text-base font-semibold text-primary uppercase">
                JL. BRAGA, BANDUNG, INDONESIA
              </span>
              <span className="text-base font-semibold text-primary uppercase">
                JL. BRAGA, BANDUNG, INDONESIA
              </span>
              <span className="text-base font-semibold text-primary uppercase">
                JL. BRAGA, BANDUNG, INDONESIA
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
