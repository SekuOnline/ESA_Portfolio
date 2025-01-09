"use client";
import {
  VerticalNav,
  HorizontalNav,
  //   SoloWideImage,
} from "../components/verticalnav";
import { SoloWideImage } from "../components/imageformatting";

export default function Home() {
  const backgroundImages = [
    { title: "Acorn_Boy_Bedroom.png", alt: "Acorn Boy Bedroom" },
    { title: "Bake_Shop.jpg", alt: "Bake Shop" },
    { title: "Bee_Living_Room.png", alt: "Bee Living Room" },
    { title: "forest_3.png", alt: "Forest" },
    { title: "Stairs_Looking_Down_BG.png", alt: "Stairs Looking Downward" },
    { title: "Stairwell2.png", alt: "Stairwell 2" },
  ];

  return (
    <div className="overflow-x-hidden flex w-screen h-screen">
      <VerticalNav />
      <HorizontalNav />

      <div className="w-screen h-fit mt-[12.5%] pb-12 ml-[25%] mr-[5%] flex items-center flex-col gap-y-4">
        <h1 className="text-2xl font-titled">Prop Design</h1>
        {/* {backgroundImages.map((e) => {
          return (
            <SoloWideImage src={`/BG_Art/${e.title}`} alt={e.src} key={e.title} />
          );
        })} */}
      </div>
    </div>
  );
}
