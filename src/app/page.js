"use client";
import { ImageGallery } from "react-image-grid-gallery";
import { VerticalNav, HorizontalNav, NavBars } from "./components/verticalnav";

const custStyle = {
  opacity: 0,
  fontSize: "0.85rem",
  transition: "opacity 0.25s ease-in-out",
  position: "absolute",
  bottom: "0px",
  zIndex: 1,
  width: "100%",
  background: "linear-gradient(rgba(25, 27, 38, 0), rgb(25, 27, 38))",
  padding: "16px",
  textAlign: "center",
  color: "rgb(255, 255, 255)",
  fontFamily: "Avenir",
  paddingTop: "60px",
};

const SoloColumn = [
  {
    id: "Gazebo-Background",
    alt: "Gazebo-Background",
    caption: "Gazebo Background",
    src: "/AOE_BG_Art/Gazebo-Lattice.jpg",
  },
  {
    id: "Sapyre-Smoking",
    alt: "Sapyre-Smoking",
    caption: "Sapyre Smoking",
    src: "/AOE_CHAR_Art/Sapyre_Smoking.png",
  },
  {
    id: "Oacian Palace",
    alt: "Oacian Palace",
    caption: "Oacian Palace",
    src: "/AOE_BG_Art/Oacian_Palace.png",
  },
  {
    id: "Kellyn",
    alt: "Kellyn",
    caption: "Kellyn",
    src: "/AOE_CHAR_Art/Kellyn.png",
  },
  {
    id: "Kellyn at Night",
    alt: "Kellyn at Night",
    caption: "Kellyn at Night",
    src: "/AOE_CHAR_Art/Kellyn_at_Night.png",
  },
  {
    id: "Valkirian City",
    alt: "Valkirian City",
    caption: "Valkirian City",
    src: "/AOE_BG_Art/Valkirian_City.jpg",
  },
];

const PairAOne = [
  {
    id: "Varsyllus Shepherd Father and Daughter",
    alt: "Varsyllus Shepherd Father and Daughter",
    caption: "Varsyllus Shepherd Father and Daughter",
    src: "/AOE_CHAR_Art/Varsyllus_Shepard_Daughter.png",
  },
];

const PairATwo = [
  {
    id: "Light Mage",
    alt: "Light Mage",
    caption: "Dexian Light Mage",
    src: "/AOE_CHAR_Art/Light_Mage_Spell_CC1.png",
  },
];

const PairBOne = [
  {
    id: "Dexian Dutchess",
    alt: "Dexian Dutchess",
    caption: "Dexian Dutchess",
    src: "/AOE_CHAR_Art/Dutchess_Outside.png",
  },
];

const PairBTwo = [
  {
    id: "Valkirian Queen",
    alt: "Valkirian Queen",
    caption: "Valkirian Queen",
    src: "/AOE_CHAR_Art/Valkirian_Queen.png",
  },
];

const PairCOne = [
  {
    id: "Alena",
    alt: "Alena",
    caption: "Alena on the Surface",
    src: "/AOE_CHAR_Art/Alena_Regurgitate.png",
  },
];

const PairCTwo = [
  {
    id: "Darius Portrait",
    alt: "Darius Portrait",
    caption: "Darius Portrait",
    src: "/AOE_CHAR_Art/Darius_Portrait.png",
  },
];

const SoloOne = [
  {
    id: "Divus Lautus Walkway With Figures",
    alt: "Divus Lautus Walkway With Figures",
    caption: "Divus Lautus Walkway With Figures",
    src: "/AOE_BG_Art/DL_Figures.jpg",
  },
];

const SoloTwo = [
  {
    id: "Bake Shop",
    alt: "Bake Shop",
    caption: "Bake Shop",
    src: "/BG_Art/Bake_Shop.jpg",
  },
];

const SoloThree = [
  {
    id: "Oacian Queen",
    alt: "Oacian Queen",
    caption: "Oacian Queen",
    src: "/AOE_CHAR_Art/Merlina.png",
  },
];

export default function Home() {
  return (
    <>
      {/* <HorizontalNav />
      <VerticalNav /> */}
      <NavBars />
      <div className=" flex w-full h-full justify-center">
        <div className="h-fit max-w-[75%] pt-36 pb-12 flex flex-col ">
          <ImageGallery
            imagesInfoArray={SoloColumn}
            columnCount={1}
            columnWidth={150}
            gapSize={8}
            customStyles={{ imageCaptionStyle: custStyle }}
          />
          <div className="flex w-full gap-4">
            <ImageGallery
              imagesInfoArray={PairAOne}
              columnCount={1}
              columnWidth={150}
              gapSize={0}
              customStyles={{
                imageCaptionStyle: custStyle,
                galleryContainerStyle: {
                  lineHeight: 2,
                  columns: 1,
                  columnWidth: 230,
                  textAlign: "center",
                  columnGap: 16,
                },
              }}
            />
            <ImageGallery
              imagesInfoArray={PairATwo}
              columnCount={1}
              columnWidth={150}
              gapSize={8}
              customStyles={{ imageCaptionStyle: custStyle }}
            />
          </div>
          <ImageGallery
            imagesInfoArray={SoloOne}
            columnCount={1}
            columnWidth={150}
            gapSize={8}
            customStyles={{ imageCaptionStyle: custStyle }}
          />
          <div className="flex w-full gap-4">
            <ImageGallery
              imagesInfoArray={PairBOne}
              columnCount={1}
              columnWidth={150}
              gapSize={0}
              customStyles={{
                imageCaptionStyle: custStyle,
                galleryContainerStyle: {
                  lineHeight: 2,
                  columns: 1,
                  columnWidth: 230,
                  textAlign: "center",
                  columnGap: 16,
                },
              }}
            />
            <ImageGallery
              imagesInfoArray={PairBTwo}
              columnCount={1}
              columnWidth={150}
              gapSize={8}
              customStyles={{ imageCaptionStyle: custStyle }}
            />
          </div>

          <ImageGallery
            imagesInfoArray={SoloTwo}
            columnCount={1}
            columnWidth={150}
            gapSize={8}
            customStyles={{ imageCaptionStyle: custStyle }}
          />

          <div className="flex w-full gap-4">
            <ImageGallery
              imagesInfoArray={PairCOne}
              columnCount={1}
              columnWidth={150}
              gapSize={0}
              customStyles={{
                imageCaptionStyle: custStyle,
                galleryContainerStyle: {
                  lineHeight: 2,
                  columns: 1,
                  columnWidth: 230,
                  textAlign: "center",
                  columnGap: 16,
                },
              }}
            />
            <ImageGallery
              imagesInfoArray={PairCTwo}
              columnCount={1}
              columnWidth={150}
              gapSize={8}
              customStyles={{ imageCaptionStyle: custStyle }}
            />
          </div>

          <ImageGallery
            imagesInfoArray={SoloThree}
            columnCount={1}
            columnWidth={150}
            gapSize={8}
            customStyles={{ imageCaptionStyle: custStyle }}
          />
        </div>
      </div>
    </>
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
