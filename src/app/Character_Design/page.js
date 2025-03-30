"use client";
import { NavBars } from "../components/verticalnav";

import { ImageGallery } from "react-image-grid-gallery";

const charDesignArrayOne = [
  {
    id: "Kellyn",
    alt: "Character Design - Kellyn",
    caption: "Kellyn Portrait",
    src: "/AOE_CHAR_Art/Kellyn.png",
  },
  {
    id: "Darius",
    alt: "Character Design - Darius",
    caption: "Darius Portrait",
    src: "/AOE_CHAR_Art/Darius_Portrait.png",
  },
  {
    id: "Kyrie",
    alt: "Character Design - Kyrie",
    caption: "Kyrie Portrait",
    src: "/AOE_CHAR_Art/Kyrie CC.png",
  },
  {
    id: "Charloette",
    alt: "Character Design - Charloette",
    caption: "Charloette Portrait",
    src: "/AOE_CHAR_Art/Charloette.jpg",
  },
  {
    id: "Valkirian Queen",
    alt: "Character Design - Valkirian Queen",
    caption: "Valkirian Queen Portrait",
    src: "/AOE_CHAR_Art/Valkirian_Queen.png",
  },
  {
    id: "Valkirian Male",
    alt: "Character Design - Valkirian Male",
    caption: "Valkirian Male",
    src: "/AOE_CHAR_Art/CHARART1/Valkirian Male.png",
  },
  {
    id: "Valkirian Shepard Boy",
    alt: "Character Design - Valkirian Shepard Boy",
    caption: "Valkirian Shepard Boy",
    src: "/AOE_CHAR_Art/CHARART1/Valkirian Shepard Boy.png",
  },

  // {
  //   id: "Merlina",
  //   alt: "Character Design - Merlina",
  //   caption: "Queen Mira Sanoja Samudra: Queen of the Oacians",
  //   src: "/AOE_CHAR_Art/Merlina.png",
  // },
  {
    id: "Oacian Portrait",
    alt: "Character Design - Oacian Portrait",
    caption: "Oacian Portrait",
    src: "/AOE_CHAR_Art/CHARART1/Oacian Portrait.jpg",
  },
  // {
  //   id: "Alena",
  //   alt: "Character Design - Alena Beached",
  //   caption: "Alena, Beached",
  //   src: "/AOE_CHAR_Art/Alena_Regurgitate.png",
  // },
  {
    id: "Oacian Under Water",
    alt: "Character Design - Oacian Under Water",
    caption: "Oacian Under Water",
    src: "/AOE_CHAR_Art/CHARART1/Oacian Under Water.jpg",
  },

  // {
  //   id: "Sapyre_Smoking",
  //   alt: "Character Design - Sapyre Smoking",
  //   caption: "Sapyre Smoking",
  //   src: "/AOE_CHAR_Art/Sapyre_Smoking.png",
  // },
  {
    id: "Varsyllus_Shepherd_Daughter",
    alt: "Character Design - Varsyllus_Shepherd_Daughter",
    caption: "Varsyllus Shepherds Portrait",
    src: "/AOE_CHAR_Art/Varsyllus_Shepard_Daughter.png",
  },
  // {
  //   id: "Varsyllus Shepherd",
  //   alt: "Character Design - Varsyllus Shepherd",
  //   caption: "Varsyllus Shepherd",
  //   src: "/AOE_CHAR_Art/Varsyllus Shepherd.jpg",
  // },
  {
    id: "Varsyllus Portrait",
    alt: "Character Design - Varsyllus Portrait",
    caption: "Varsyllus Portrait",
    src: "/AOE_CHAR_Art/CHARART1/Varsyllus Portrait.png",
  },
  // {
  //   id: "Light_Mage_Spell_CC1",
  //   alt: "Character Design - Dex Light Mage",
  //   caption: "Dexian Light Mage",
  //   src: "/AOE_CHAR_Art/Light_Mage_Spell_CC1.png",
  // },
  {
    id: "Sapyre Woman",
    alt: "Character Design - Sapyre Woman",
    caption: "Sapyre Portrait",
    src: "/AOE_CHAR_Art/CHARART1/Sapyre Woman.jpg",
  },
];

const charDesignArrayTwo = [
  {
    id: "Diemation",
    alt: "Character Design - Diemation",
    caption: "Diemation",
    src: "/Character Art/Diemation.png",
  },
  {
    id: "Acorn Boy",
    alt: "Character Design - Acorn Boy",
    caption: "Acorn Boy",
    src: "/Character Art/Acorn Boy.png",
  },
  {
    id: "Egg Timer",
    alt: "Character Design - Egg Timer",
    caption: "Egg Timer",
    src: "/Character Art/Egg Timer.png",
  },
  {
    id: "Lighter Guy",
    alt: "Character Design - Lighter Guy",
    caption: "Lighter Guy",
    src: "/Character Art/Lighter Guy.png",
  },
  {
    id: "Preston",
    alt: "Character Design - Preston",
    caption: "Preston",
    src: "/Character Art/Preston.png",
  },
  {
    id: "Slimey",
    alt: "Character Design - Slimey",
    caption: "Slimey",
    src: "/Character Art/Slimey.png",
  },
];
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
  // paddingTop: "60px",
};

export default function Home() {
  return (
    <>
      <NavBars />
      <div className="flex w-full h-screen max-lg:justify-evenly lg:flex-row-reverse max-lg:px-[10%] pl-[30%] pr-[10%]">
        <div className="h-fit pt-36 pb-12 flex flex-col ">
          <h1 className="text-4xl font-titled">Character Design</h1>
          <ImageGallery
            imagesInfoArray={charDesignArrayTwo}
            columnCount={2}
            columnWidth={230}
            gapSize={0}
            customStyles={{
              imageCaptionStyle: custStyle,
              galleryContainerStyle: {
                lineHeight: 2.5,
                columns: 2,
                columnWidth: 230,
                textAlign: "center",
                columnGap: 16,
              },
            }}
          />
          <div className="h-fit w-full flex flex-wrap justify-evenly">
            <img
              src="/AOE_CHAR_Art/CHARART2/Willa-Design.jpg"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Navir.png"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Light-Mages.jpg"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Alena-Combat.jpg"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Alena-front.png"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Alena-Back.jpg"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Alena-Expressions.jpg"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Ingrid.png"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Sitron.png"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Heathcliff-Design.png"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Heathcliff-Expressions.jpg"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Mags.jpeg"
              className="mason-item"
            />
            <img
              src="/AOE_CHAR_Art/CHARART2/Opal-Turnaround.png"
              className="mason-item"
            />
          </div>
          <div className="pt-16">
            <ImageGallery
              imagesInfoArray={charDesignArrayOne}
              columnCount={4}
              columnWidth={230}
              gapSize={8}
              customStyles={{
                imageCaptionStyle: custStyle,
                galleryContainerStyle: {
                  lineHeight: 2,
                  columns: 4,
                  columnWidth: 230,
                  textAlign: "center",
                  columnGap: 16,
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
