import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { WhyUs } from "@/components/home/why-us"
import { Cta } from "@/components/home/cta"

export default function Page() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhyUs />
      <Cta />
    </main>
  )
}
