"use client";
import { VerticalNav, HorizontalNav } from "./components/verticalnav";
import { SoloWideImg, DuoImg } from "./components/imageformatting";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex w-screen h-screen">
      {/* <VerticalNav /> */}
      <HorizontalNav />
      <div className="w-screen h-fit mt-[9%] pb-12 ml-[15%] mr-[15%] flex items-center flex-col gap-y-6">
        <SoloWideImg
          src="/AOE_BG_ART/Gazebo-Lattice-Ceiling-Final2.jpg"
          alt="Gazebo-Background"
        />
        <DuoImg
          srcOne="/AOE_CHAR_Art/Varsyllus_Shepard_Daughter.png"
          altOne="Varsyllus_Shepard_Daughter"
          srcTwo="/AOE_CHAR_Art/Light_Mage_Spell_CC1.png"
          altTwo="Light_Mage_Spell_CC1"
        />
        <SoloWideImg
          src="\AOE_BG_Art\Divus Lautus Walkway With Figures.jpg"
          alt="Divus Lautus Walkway With Figures"
        />
        <DuoImg
          srcOne="\AOE_CHAR_Art\Dutchess_Outside_CC.png"
          altOne="Dutchess_Outsid"
          srcTwo="\AOE_CHAR_Art\Valkirian Queen.png"
          altTwo="Valkirian Queen"
        />
        <SoloWideImg src="\BG_Art\Bake_Shop.jpg" alt="Bake Shop" />
        <DuoImg
          srcOne="\AOE_CHAR_Art\Alena_Regurgitate.png"
          altOne="Alena_Regurgitate"
          srcTwo="\AOE_CHAR_Art\Darius_Portrait.png"
          altTwo="Darius_Portrait"
        />
        <SoloWideImg src="\AOE_CHAR_Art\Merlina.png" alt="Merlina" />
      </div>
    </div>
  );
}

// function SoloWideImg({ src, alt }) {
//   return (
//     <img
//       src={src}
//       alt={alt}
//       className="w-11/12"
//       onContextMenu={(e) => {
//         e.preventDefault();
//       }}
//     ></img>
//   );
// }

// function DuoImg({ srcOne, altOne, srcTwo, altTwo }) {
//   return (
//     <div className="w-11/12 h-fit flex justify-between">
//       <img
//         src={srcOne}
//         alt={altOne}
//         className="w-1/2 pr-3"
//         onContextMenu={(e) => {
//           e.preventDefault();
//         }}
//       ></img>
//       <img
//         src={srcTwo}
//         alt={altTwo}
//         className="w-1/2 pl-3"
//         onContextMenu={(e) => {
//           e.preventDefault();
//         }}
//       ></img>
//     </div>
//   );
// }
