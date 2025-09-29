import ExpertiseSection from "@/components/sections/ExpertiseSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import WhoWeServeSection from "@/components/sections/WhoWeServeSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustedBySection />
      <WhoWeServeSection />
      <ExpertiseSection />
      <ProjectSection />
    </div>
  )
}
