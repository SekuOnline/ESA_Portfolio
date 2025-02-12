"use client";
import { VerticalNav, HorizontalNav } from "./components/verticalnav";
import { SoloWideImage, DuoImage } from "./components/imageformatting";
import gazebo from "../../public/AOE_BG_Art/Gazebo-Lattice.jpg";
import varsyllus from "../../public/AOE_CHAR_Art/Varsyllus_Shepard_Daughter.png";
import lightmage from "../../public/AOE_CHAR_Art/Light_Mage_Spell_CC1.png";
import dl from "../../public/AOE_BG_Art/DL_Figures.jpg";
import dutchess from "../../public/AOE_CHAR_Art/Dutchess_Outside.png";
import queen from "../../public/AOE_CHAR_Art/Valkirian_Queen.png";
import bakeshop from "../../public/BG_Art/Bake_Shop.jpg";
import alina from "../../public/AOE_CHAR_Art/Alena_Regurgitate.png";
import darius from "../../public/AOE_CHAR_Art/Darius_Portrait.png";
import merlina from "../../public/AOE_CHAR_Art/Merlina.png";
import kellyn from "../../public/AOE_CHAR_Art/Kellyn.png";
import sapyre from "../../public/AOE_CHAR_Art/Sapyre_Smoking.png";
import kellyn_night from "../../public/AOE_CHAR_Art/Kellyn_at_Night.png";
import valk_bg from "../../public/AOE_BG_Art/Valkirian_City.jpg";
import oacian_palace from "../../public/AOE_BG_Art/Oacian_Palace.png";

export default function Home() {
  return (
    <div className=" flex w-full h-full">
      <VerticalNav />
      <HorizontalNav />
      <div className="w-screen h-fit mt-[9%] pb-12 ml-[25%] mr-[5%] flex items-center flex-col gap-y-6">
        <SoloWideImage src={gazebo} alt="Gazebo-Background" />
        <SoloWideImage src={sapyre} alt="Sapyre Smoking in Lava Pit" />
        <SoloWideImage src={oacian_palace} alt="Oacian Palace" />
        <SoloWideImage src={kellyn} alt="Kellyn" />
        <SoloWideImage src={kellyn_night} alt="Kellyn at Night" />
        <SoloWideImage src={valk_bg} alt="Valkirian City" />
        <DuoImage
          srcOne={varsyllus}
          altOne="Varsyllus_Shepard_Daughter"
          srcTwo={lightmage}
          altTwo="Light_Mage_Spell_CC1"
        />
        <SoloWideImage src={dl} alt="Divus Lautus Walkway With Figures" />
        <DuoImage
          srcOne={dutchess}
          altOne="Dutchess_Outside"
          srcTwo={queen}
          altTwo="Valkirian Queen"
        />
        <SoloWideImage src={bakeshop} alt="Bake Shop" />
        <DuoImage
          srcOne={alina}
          altOne="Alena_Regurgitate"
          srcTwo={darius}
          altTwo="Darius_Portrait"
        />
        <SoloWideImage src={merlina} alt="Merlina" />
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
