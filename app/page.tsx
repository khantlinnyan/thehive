import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import MissionSection from "@/components/Home/MissionSection";
import VisionSectaion from "@/components/Home/VisionSection";
import EventSection from "@/components/Home/EventSection";
import { Testmonials } from "@/components/Home/Testminoals";
import Achieved from "@/components/Home/Achieved";
import { EventCard } from "@/components/common/EventCard";
import { ClassSection } from "@/components/Home/ClassSection";

const P = ({ text }: { text: string }) => (
  <p className="text-4xl ml-10 text-primary-bee-black font-monos leading-snug tracking-tight font-medium w-5/6 mb-12">
    {text}
  </p>
);

export default function Home() {
  return (
    <main>
      <HeroSection />
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

{
  /* <div className="px-3 container mx-auto grid grid-cols-12 h-4/6">
          <div className="flex flex-col justify-end col-span-8 ">
            <P text="The Hive supports youth with learning resources, webinar programs, and a welcoming community."></P>
            <Link
              href="/"
              className=" font-medium ml-8 text-lg border border-secondary-dark-blue w-fit px-6 py-3 rounded-full text-secondary-dark-blue"
            >
              Join our community
            </Link>
          </div>
          <div className="w-full col-span-4 flex flex-col pr-32 justify-end items-center">
            <Image
              src={logo}
              alt="TheHiveLogo"
              width={300}
              height={300}
              className=""
            />
          </div>
        </div> */
}
