"use client";
import { VerticalNav, HorizontalNav } from "./components/verticalnav";
import { SoloWideImage, DuoImage } from "./components/imageformatting";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex w-screen h-screen">
      {/* <VerticalNav /> */}
      <HorizontalNav />
      <div className="w-screen h-fit mt-[9%] pb-12 ml-[15%] mr-[15%] flex items-center flex-col gap-y-6">
        <SoloWideImage
          src="/AOE_BG_ART/Gazebo-Lattice.jpg"
          alt="Gazebo-Background"
        />
        <DuoImage
          srcOne="/AOE_CHAR_Art/Varsyllus_Shepard_Daughter.png"
          altOne="Varsyllus_Shepard_Daughter"
          srcTwo="/AOE_CHAR_Art/Light_Mage_Spell_CC1.png"
          altTwo="Light_Mage_Spell_CC1"
        />
        <SoloWideImage
          src="\AOE_BG_Art\Divus Lautus Walkway With Figures.jpg"
          alt="Divus Lautus Walkway With Figures"
        />
        <DuoImage
          srcOne="\AOE_CHAR_Art\Dutchess_Outside_CC.png"
          altOne="Dutchess_Outsid"
          srcTwo="\AOE_CHAR_Art\Valkirian Queen.png"
          altTwo="Valkirian Queen"
        />
        <SoloWideImage src="\BG_Art\Bake_Shop.jpg" alt="Bake Shop" />
        <DuoImage
          srcOne="\AOE_CHAR_Art\Alena_Regurgitate.png"
          altOne="Alena_Regurgitate"
          srcTwo="\AOE_CHAR_Art\Darius_Portrait.png"
          altTwo="Darius_Portrait"
        />
        <SoloWideImage src="\AOE_CHAR_Art\Merlina.png" alt="Merlina" />
      </div>
    </div>
  );
}

// function SoloWideImage({ src, alt }) {
//   return (
//     <Image
//       src={src}
//       alt={alt}
//       className="w-11/12"
//       onContextMenu={(e) => {
//         e.preventDefault();
//       }}
//     ></Image>
//   );
// }

// function DuoImage({ srcOne, altOne, srcTwo, altTwo }) {
//   return (
//     <div className="w-11/12 h-fit flex justify-between">
//       <Image
//         src={srcOne}
//         alt={altOne}
//         className="w-1/2 pr-3"
//         onContextMenu={(e) => {
//           e.preventDefault();
//         }}
//       ></Image>
//       <Image
//         src={srcTwo}
//         alt={altTwo}
//         className="w-1/2 pl-3"
//         onContextMenu={(e) => {
//           e.preventDefault();
//         }}
//       ></Image>
//     </div>
//   );
// }
