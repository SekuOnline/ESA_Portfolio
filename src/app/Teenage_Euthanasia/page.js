"use client";
import { VerticalNav, HorizontalNav } from "../components/verticalnav";
import { ImageGallery } from "react-image-grid-gallery";

const backgroundDesignArray = [
  {
    id: "TEBG1",
    alt: "Teenage Euthanasia - Bathroom Interior",
    caption: "Teenage Euthanasia - Bathroom Interior",
    src: "/Teenage_Euthanasia/TE101-BG-Int-Cuddlefish-Bathroom-CLEAN-021821-JJ-DB-ES2_copy.png",
  },
  {
    id: "TEBG2",
    alt: "Teenage Euthanasia - Main Mall Area Interior",
    caption: "Teenage Euthanasia - Main Mall Area Interior",
    src: "/Teenage_Euthanasia/TE102-BG-Int-Fort-Gator-Mall-CLEAN-033121-SS-JJ2-ES_copy.png",
  },
  {
    id: "TEBG3",
    alt: "Teenage Euthanasia - Mall T-Shirt Shop Interior",
    caption: "Teenage Euthanasia - Mall T-Shirt Shop Interior",
    src: "/Teenage_Euthanasia/TE102-BG-Int-Lids-For-Shirts-Store-CLEAN-031921-SS-JJ-FT-ES2_copy.png",
  },
  {
    id: "TEBG4",
    alt: "Teenage Euthanasia - Shack Exterior",
    caption: "Teenage Euthanasia - Shack Exterior",
    src: "/Teenage_Euthanasia/TE-Exterior-Shack.png",
  },
  {
    id: "TEBG5",
    alt: "Teenage Euthanasia - Shack Interior",
    caption: "Teenage Euthanasia - Shack Interior",
    src: "/Teenage_Euthanasia/TE-Interior-Shack.png",
  },
  {
    id: "TEBG6",
    alt: "Teenage Euthanasia - Wax Museum",
    caption: "Teenage Euthanasia - Wax Museum",
    src: "/Teenage_Euthanasia/TE104-BG-Ext-Gator-Wax-Museum-CLEAN-040921-JJ-CM10-JJ-ES2_copy.png",
  },
  {
    id: "TEBG7",
    alt: "Teenage Euthanasia - Football Field",
    caption: "Teenage Euthanasia - Football Field",
    src: "/Teenage_Euthanasia/TE107-BG-Ext-George-Bush-School-Night-CLEAN-042221-DB2-ES7_copy.png",
  },
  {
    id: "TEBG8",
    alt: "Teenage Euthanasia - Whiskey Dice Bar",
    caption: "Teenage Euthanasia - Whiskey Dice Bar",
    src: "/Teenage_Euthanasia/TE107-BG-Ext-Whiskey-Bar-CLEAN-042321-SS-FT-ES_copy.png",
  },
  {
    id: "TEBG9",
    alt: "Teenage Euthanasia - Skate Park",
    caption: "Teenage Euthanasia - Skate Park",
    src: "/Teenage_Euthanasia/TE107-BG-Ext-Fort-Gator-Skatepark-CLEAN-050621-SS-FT-JJ-FT-ES_copy.png",
  },
];

const propDesignArray = [
  {
    id: "TEPR1",
    alt: "Teenage Euthanasia - Fort Gator Wax Museum Drink",
    caption: "Teenage Euthanasia - Fort Gator Wax Museum Drink",
    src: "/Teenage_Euthanasia/TE104-BG-Prop-Sweet-Cream-In-Novelty-Cup-CLEAN-041521-FT-JJ-ES.png",
  },
  {
    id: "TEPR2",
    alt: "Teenage Euthanasia - Bone Drink",
    caption: "Teenage Euthanasia - Bone Drink",
    src: "/Teenage_Euthanasia/TE103-BG-Prop-Femur-Yard-Long-Cup-CLEAN-030521-FT-JJ-ES.png",
  },
  {
    id: "TEPR3",
    alt: "Teenage Euthanasia - Birthday Cake",
    caption: "Teenage Euthanasia - Birthday Cake",
    src: "/Teenage_Euthanasia/TE103-BG-Prop-Giant-Cake-CLEAN-3421-JJ.png",
  },
  {
    id: "TEPR4",
    alt: "Teenage Euthanasia - Trophy",
    caption: "Teenage Euthanasia - Trophy",
    src: "/Teenage_Euthanasia/TE103-BG-Prop-Huge-Trophy-CLEAN-030521-DB1-FT-PL-JJ-ES.png",
  },
  {
    id: "TEPR5",
    alt: "Teenage Euthanasia - Trash Log",
    caption: "Teenage Euthanasia - Trash Log",
    src: "/Teenage_Euthanasia/TE104-BG-Prop-Trash-Log-CLEAN-041621-AJ-JJ-ES.png",
  },
  {
    id: "TEPR6",
    alt: "Teenage Euthanasia - Crown",
    caption: "Teenage Euthanasia - Crown",
    src: "/Teenage_Euthanasia/TE103-BG-Prop-Crown-CLEAN-3421-PL-JJ-ES.png",
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
      <div className="w-screen h-fit mt-[9%] pb-12 ml-[25%] mr-[5%] flex  flex-col gap-y-4">
        <h1 className="text-4xl font-titled text-gray-800">
          Teenage Euthanasia
        </h1>
        <h3 className="text-lg font-titled text-gray-400">
          Augenblick Studios
        </h3>
        <p className="font-regular">
          Set in a mildly apocalyptic near-future, "Teenage Euthanasia" centers
          around the Fantasy family and their inland Florida funeral home,
          Tender Endings. The cast of characters includes recently reanimated
          Trophy Fantasy, her teenage daughter, Euthanasia "Annie" Fantasy,
          Annie's Uncle Pete and Annie's "old country" immigrant grandmother,
          Baba.
        </p>
        <h2 className="pt-4 text-2xl font-titled text-gray-800">
          Background Design
        </h2>
        <ImageGallery
          imagesInfoArray={backgroundDesignArray}
          columnCount={3}
          columnWidth={230}
          gapSize={8}
          customStyles={{ imageCaptionStyle: custStyle }}
        />
        <h2 className="pt-4 text-2xl font-titled text-gray-800">Prop Design</h2>
        <ImageGallery
          imagesInfoArray={propDesignArray}
          columnCount={3}
          columnWidth={230}
          gapSize={8}
          customStyles={{ imageCaptionStyle: custStyle }}
        />
      </div>
    </div>
  );
}
