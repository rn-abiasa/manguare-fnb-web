import Link from "next/link";
import MobileMenu from "@/components/ui/mobile-menu";
import { Button } from "@/components/ui/button";

const links = [
  {
    label: "HOME",
    url: "/",
  },
  {
    label: "ABOUT",
    url: "/about",
  },
  {
    label: "GALLERY",
    url: "/gallery",
  },
  {
    label: "CONTACT",
    url: "/contact",
  },
];

interface NavbarProps {
  theme?: "light" | "dark";
}

function Navbar({ theme = "dark" }: NavbarProps) {
  const isLight = theme === "light";

  return (
    <>
      <div className="absolute z-10 top-0 w-full grid grid-cols-2 md:grid-cols-3 items-center px-8 md:px-16 lg:px-24 py-10">
        {/* Left: Navigation */}
        <div className="flex justify-start">
          <div className="md:hidden">
            <MobileMenu theme={theme} />
          </div>
          <div className="hidden md:flex">
            <nav className="flex gap-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className={`text-base font-medium hover:opacity-70 transition-opacity ${
                    isLight ? "text-primary" : "text-background"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Center: Brand */}
        <div className="flex justify-center">
          <Link
            href="/"
            className={`text-2xl md:text-2xl font-serif font-bold tracking-tight ${
              isLight ? "text-primary" : "text-white"
            }`}
          >
            Braga Eats
          </Link>
        </div>

        {/* Right: Action */}
        <div className="flex justify-end items-center gap-5">
          <a
            href="/menu"
            className={`hidden md:flex text-base font-medium hover:opacity-70 transition-opacity ${
              isLight ? "text-primary" : "text-background"
            }`}
          >
            MENU
          </a>

          <Button
            variant="outline"
            className={`rounded-full hidden md:flex transition-colors ${
              isLight
                ? "border-primary text-primary hover:bg-primary hover:text-background"
                : "border-white text-black hover:bg-black hover:text-white"
            }`}
          >
            ORDER ONLINE
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
