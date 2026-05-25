import HeroSection from '@/components/HeroSection'
import FloatingParticles from '@/components/FloatingParticles'
import GapSection from '@/components/sections/GapSection'
import TransformSection from '@/components/sections/TransformSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import CommandsSection from '@/components/sections/CommandsSection'
import QuickStartSection from '@/components/sections/QuickStartSection'
import FeatureStatusSection from '@/components/sections/FeatureStatusSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="relative overflow-hidden">
        <FloatingParticles />
        <GapSection />
        <TransformSection />
        <BenefitsSection />
        <CommandsSection />
        <QuickStartSection />
        <FeatureStatusSection />
        <CTASection />
      </div>
    </>
  )
}
