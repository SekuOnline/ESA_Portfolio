"use client";
import {
  VerticalNav,
  HorizontalNav,
  //   SoloWideImage,
} from "../components/verticalnav";

import { ImageGallery } from "react-image-grid-gallery";

const backgroundDesignArrayOne = [
  {
    id: "BG1",
    alt: "Background Design - Radioactive Forest",
    caption: "Radioactive Forest",
    src: "/BG_Art/Radioactive Forest.webp",
  },
  // {
  //   id: "BG2",
  //   alt: "Background Design - Radioactive Forest Spiral",
  //   caption: "Radioactive Forest Spiral",
  //   src: "/BG_Art/Radioactive Forest Spiral.webp",
  // },
  {
    id: "BG3",
    alt: "Background Design - Acorn Boy Bedroom",
    caption: "Acorn Boy Bedroom",
    src: "/BG_Art/Acorn Boy Bedroom.webp",
  },
  {
    id: "BG4",
    alt: "Background Design - Bee Family Living Room",
    caption: "Bee Family Living Room",
    src: "/BG_Art/Bee Family Living Room.webp",
  },
];

const backgroundDesignArrayTwo = [
  {
    id: "BG5",
    alt: "Background Design - Stairwell 1",
    caption: "Stairwell 1",
    src: "/BG_Art/Stairwell 1.webp",
  },
];

const backgroundDesignArrayThree = [
  {
    id: "BG6",
    alt: "Background Design - Stairwell 2",
    caption: "Stairwell 2",
    src: "/BG_Art/Stairwell 2.webp",
  },
];

const backgroundDesignArrayFour = [
  {
    id: "BG7",
    alt: "Valkirian City",
    caption: "Valkirian City",
    src: "/BG_Art/Valkirian_City.png",
  },
  {
    id: "BG8",
    alt: "Background Design - Divis Lautus Walkway",
    caption: "Divis Lautus Walkway",
    src: "/BG_Art/Divis Lautus Walkway.webp",
  },
  {
    id: "BG9",
    alt: "Background Design - Royal Chambers",
    caption: "Royal Chambers",
    src: "/BG_Art/Royal Chambers.webp",
  },
  {
    id: "BG10",
    alt: "Background Design - Kellyn's Desk",
    caption: "Kellyn's Desk",
    src: "/BG_Art/Kellyn's Desk.webp",
  },
  {
    id: "BG11",
    alt: "Background Design - Kyrie's Dark Palace",
    caption: "Kyrie's Dark Palace",
    src: "/BG_Art/Kyrie_Palace.png",
  },
  {
    id: "BG12",
    alt: "Background Design - Dark Palace Throne Room",
    caption: "Dark Palace Throne Room",
    src: "/BG_Art/Dark Palace Throne Room.webp",
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
  paddingTop: "60px",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden flex w-screen h-screen">
      <VerticalNav />
      <HorizontalNav />

      <div className="w-screen h-fit pt-[9%] pb-12 ml-[30%] mr-[10%] flex  flex-col ">
        <h1 className="text-4xl font-titled pb-4">Background Design</h1>
        <ImageGallery
          imagesInfoArray={backgroundDesignArrayOne}
          columnCount={1}
          columnWidth={150}
          gapSize={8}
          customStyles={{ imageCaptionStyle: custStyle }}
        />

        <div className="flex w-full gap-4">
          <ImageGallery
            imagesInfoArray={backgroundDesignArrayTwo}
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
            imagesInfoArray={backgroundDesignArrayThree}
            columnCount={1}
            columnWidth={150}
            gapSize={8}
            customStyles={{ imageCaptionStyle: custStyle }}
          />
        </div>
        <ImageGallery
          imagesInfoArray={backgroundDesignArrayFour}
          columnCount={1}
          columnWidth={150}
          gapSize={8}
          customStyles={{ imageCaptionStyle: custStyle }}
        />
        {/* <ImageGallery
          imagesInfoArray={proBGesignArrayTwo}
          columnCount={1}
          columnWidth={230}
          gapSize={8}
          customStyles={{ imageCaptionStyle: custStyle }}
        /> */}
      </div>
    </div>
  );
}
