import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { Features } from "@/components/features";
import { Market } from "@/components/market";
import { Pricing } from "@/components/pricing";
import { Advantages } from "@/components/advantages";
import { HowItWorks } from "@/components/how-it-works";
import { CurrentStatus } from "@/components/current-status";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Market />
      <CurrentStatus />
      <Pricing />
      <Advantages />
      <Footer />
    </>
  );
}
