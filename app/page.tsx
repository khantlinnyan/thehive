import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import MissionSection from "@/components/Home/MissionSection";
import VisionSectaion from "@/components/Home/VisionSection";
import EventSection from "@/components/Home/EventSection";
import { Testmonials } from "@/components/Home/Testminoals";
import Achieved from "@/components/Home/Achieved";
import { ClassSection } from "@/components/Home/ClassSection";
import ClassRegister from "@/components/Home/ClassRegister";
import ScrollVelocity from "@/components/ui/scroll-velocity";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="my-20 lg:my-40">
        <ScrollVelocity
          texts={["The Hive", "IGCSE", "revision classes"]}
          className="text-accent-bright-orange"
          damping={90}
          numCopies={8}
        />
      </div>
      <ClassRegister />

      <ClassSection />
      <Achieved />
      <AboutSection />
      <MissionSection />
      <VisionSectaion />
      <EventSection />
      <Testmonials />
    </main>
  );
}
