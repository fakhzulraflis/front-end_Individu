import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FAQ_ITEMS } from "@/data/faq";
import { MENU_ITEMS } from "@/data/menu";

export default function Beranda() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuSection menu={MENU_ITEMS} />
        <AboutSection />
        <FaqSection faq={FAQ_ITEMS} />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
