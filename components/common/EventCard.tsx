import Image from "next/image";
import { ArrowArcRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import logo from "@/public/logo.png";

export function EventCard({ data }: any) {
  const { name, platform, date, time, description } = data;
  return (
    <div className="h-full cursor-pointer w-full mx-auto">
      <div className="h-full flex flex-col overflow-hidden rounded-2xl transition duration-200 group bg-white hover:shadow shadow-sm border border-zinc-100">
        <div className="w-full h-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 ">
          <Image
            src={logo}
            alt="thumbnail"
            // objectFit="cover"
            width={100}
            height={100}
            className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
          />
        </div>
        <div className="flex flex-col justify-between gap-10 p-4">
          <h2 className="font-bold text-lg font-inter text-zinc-700">{name}</h2>
          <div className="flex flex-row  justify-between font-inter h-full items-center ">
            <span className="text-sm text-gray-500">{date}</span>
            <ArrowRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
