"use client";
import { VerticalNav, HorizontalNav } from "../components/verticalnav";
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
  {
    id: "One",
    alt: "RC1",
    caption: "Royal Crackers - Photo Box and Photo Stack",
    src: "/Royal_Crackers/1.png",
  },
  {
    id: "Two",
    alt: "RC2",
    caption: "Royal Crackers - Fajita and Broken Plate Iterations",
    src: "/Royal_Crackers/2.png",
  },
  {
    id: "Three",
    alt: "RC3",
    caption: "Royal Crackers - Sleep Number Envelope",
    src: "/Royal_Crackers/3.png",
  },
  {
    id: "Four",
    alt: "RC4",
    caption: "Royal Crackers - Platter of Fancy Food",
    src: "/Royal_Crackers/4.png",
  },
  {
    id: "Five",
    alt: "RC5",
    caption: "Royal Crackers - Stebe Towel Actions (1)",
    src: "/Royal_Crackers/5.png",
  },
  {
    id: "Six",
    alt: "RC6",
    caption: "Royal Crackers - Stebe Towel Actions (2)",
    src: "/Royal_Crackers/6.png",
  },
  {
    id: "Seven",
    alt: "RC7",
    caption: "Royal Crackers - Pillow Poses",
    src: "/Royal_Crackers/7.png",
  },
  {
    id: "Eight",
    alt: "RC2",
    caption: "Royal Crackers - Stebe Bib",
    src: "/Royal_Crackers/8.png",
  },
  {
    id: "Nine",
    alt: "RC9",
    caption: "Royal Crackers - Fast Food Baskets",
    src: "/Royal_Crackers/9.png",
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
        <h1 className="text-4xl font-titled text-gray-800">Royal Crackers</h1>
        <h3 className="text-lg font-titled text-gray-400">Titmouse</h3>
        <p className="font-regular">
          The dysfunctional Hornsby family run Royal Crackers Incorporated, a
          once-popular snack food company which manufactures saltine crackers in
          Bakersfield, California. When senile patriarch and CEO Theodore
          Hornsby Sr.'s mind starts to slip, his two sons Stebe and Theodore
          "Theo" Jr. are left to run the failing company while living in their
          father's mansion with Stebe's wife Deb and their son Matt as they deal
          with competition from Dennison Snacks and experience different
          misadventures along the way.
        </p>
        <h2 className="pt-4 text-2xl font-titled text-gray-800">Prop Design</h2>
        <ImageGallery
          imagesInfoArray={imagesArray}
          columnCount={3}
          columnWidth={230}
          gapSize={8}
          customStyles={{ imageCaptionStyle: custStyle }}
        />
      </div>
    </div>
  );
}
