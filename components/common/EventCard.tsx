import Image from "next/image";
import { ArrowArcRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import logo from "@/public/logo.png";
import FadeInComponent from "../animation/FadeInComponent";

export function EventCard({ data }: any) {
  const { name, platform, date, time, description, img } = data;
  return (
    <FadeInComponent className="h-full">
      <div className=" h-full w-full mx-auto">
        <div className="flex flex-col h-full rounded-2xl transition duration-200 group bg-white hover:shadow shadow-sm border border-zinc-100">
          <div className=" aspect-square bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden">
            <Image
              src={img}
              alt="thumbnail"
              // objectFit="cover"
              width={800}
              height={800}
              className={`group-hover:scale-95 group-hover:rounded-2xl transform transition duration-200 `}
            />
          </div>
          <div className="flex flex-col justify-between gap-10 p-4">
            <h2 className="font-bold text-lg font-inter text-zinc-700">
              {name}
            </h2>
            <div className="flex flex-row  justify-between font-inter h-full items-center ">
              <span className="text-sm text-gray-500">{date}</span>
              <ArrowRight size={24} />
            </div>
          </div>
        </div>
      </div>
    </FadeInComponent>
  );
}
