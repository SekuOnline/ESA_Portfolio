"use client";
import {
  VerticalNav,
  HorizontalNav,
  //   SoloWideImage,
} from "../components/verticalnav";

import { ImageGallery } from "react-image-grid-gallery";

const propDesignArrayOne = [
  {
    id: "PD1",
    alt: "Prop Design - Hook and Line Magazine",
    caption: "Hook and Line Magazine",
    src: "/Prop_Design/Hook and Line Magazine.png",
  },
  {
    id: "PD2",
    alt: "Prop Design - Bee Bag Toss",
    caption: "Bee Bag Toss",
    src: "/Prop_Design/Bee Bag Toss.png",
  },
  {
    id: "PD3",
    alt: "Prop Design - Double Munch Granola and Oats",
    caption: "Double Munch Granola and Oats",
    src: "/Prop_Design/Double Munch Granola and Oats.png",
  },
  {
    id: "PD4",
    alt: "Prop Design - Double Munch Granola and Oats",
    caption: "Double Munch Granola and Oats",
    src: "/Prop_Design/Parallels at Hand Props - Every Day Items.webp",
  },
  {
    id: "PD5",
    alt: "Prop Design - Valkirian Items",
    caption: "Valkirian Items",
    src: "/Prop_Design/Valkirian Items.webp",
  },
  {
    id: "PD6",
    alt: "Prop Design - Perfume Bottle Design Expanded",
    caption: "Perfume Bottle Design Expanded",
    src: "/Prop_Design/Perfume Bottle Design Expanded.webp",
  },
  {
    id: "PD7",
    alt: "Prop Design - Binoculars",
    caption: "Binoculars",
    src: "/Prop_Design/Binoculars.png",
  },
  {
    id: "PD8",
    alt: "Prop Design - Sun-Fun Sidewalk Chalk",
    caption: "Sun-Fun Sidewalk Chalk",
    src: "/Prop_Design/Sun-Fun Sidewalk Chalk.png",
  },
  {
    id: "PD9",
    alt: "Prop Design - Keychain",
    caption: "Keychain",
    src: "/Prop_Design/Keychain.png",
  },
  {
    id: "PD10",
    alt: "Prop Design - Parallels at Hand Props - Food Items",
    caption: "Parallels at Hand Props - Food Items",
    src: "/Prop_Design/Parallels at Hand Props - Food Items.webp",
  },
  {
    id: "PD11",
    alt: "Prop Design - Oacian Items",
    caption: "Oacian Items",
    src: "/Prop_Design/Oacian Items.webp",
  },
  {
    id: "PD12",
    alt: "Prop Design - Perfume Bottle Exploration",
    caption: "Perfume Bottle Exploration",
    src: "/Prop_Design/Perfume Bottle Exploration.webp",
  },
];

const propDesignArrayTwo = [
  {
    id: "PD13",
    alt: "Prop Design - Valkirian Dessert",
    caption: "Valkirian Dessert",
    src: "/Prop_Design/Valkirian Dessert.png",
  },
  {
    id: "PD14",
    alt: "Prop Design - Sapyre Items",
    caption: "Sapyre Items",
    src: "/Prop_Design/Sapyre Items.webp",
  },
  {
    id: "PD15",
    alt: "Prop Design - Varsyllian Items",
    caption: "Varsyllian Items",
    src: "/Prop_Design/Varsyllian Items.webp",
  },
  {
    id: "PD16",
    alt: "Prop Design - Dexian items",
    caption: "Dexian items",
    src: "/Prop_Design/Dexian items.webp",
  },
  {
    id: "PD17",
    alt: "Prop Design - Kyrie's Scroll Prop Sheet",
    caption: "Kyrie's Scroll Prop Sheet",
    src: "/Prop_Design/Kyrie's Scroll Prop Sheet.webp",
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

      <div className="w-screen h-fit mt-[12.5%] pb-12 ml-[25%] mr-[5%] flex items-center flex-col gap-y-4">
        <h1 className="text-2xl font-titled">Prop Design</h1>
        <ImageGallery
          imagesInfoArray={propDesignArrayOne}
          columnCount={2}
          columnWidth={230}
          gapSize={8}
          customStyles={{ imageCaptionStyle: custStyle }}
        />
        <ImageGallery
          imagesInfoArray={propDesignArrayTwo}
          columnCount={1}
          columnWidth={230}
          gapSize={8}
          customStyles={{ imageCaptionStyle: custStyle }}
        />
      </div>
    </div>
  );
}
