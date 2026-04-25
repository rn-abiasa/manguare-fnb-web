import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Menu from "@/components/sections/menu";
import Footer from "@/components/sections/footer";
import SplashScreen from "@/components/ui/splash-screen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Menu />
      </main>
      <Footer />
    </>
  );
}
