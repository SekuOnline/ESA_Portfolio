"use client";

import {
  NavBars,
  //   SoloWideImage,
} from "../components/verticalnav";

import { ImageGallery } from "react-image-grid-gallery";

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

const studioGallery = [
  {
    id: "AGB",
    alt: "AGB",
    src: "/About-Logos/AGB.png",
  },
  {
    id: "LS",
    alt: "LS",
    src: "/About-Logos/LS.jpeg",
  },
  {
    id: "studio",
    alt: "studio",
    src: "/About-Logos/studio.png",
  },
];

const studioGallery2 = [
  {
    id: "Titmouse",
    alt: "Titmouse",
    src: "/About-Logos/titmouse.png",
  },
  {
    id: "AS",
    alt: "AS",
    src: "/About-Logos/AS.jpg",
  },
];

export default function Home() {
  return (
    <>
      <NavBars />
      <div className="flex w-full h-full max-lg:justify-evenly lg:flex-row-reverse max-sm:px-8 max-lg:px-[10%] pl-[30%] pr-[10%] ">
        <div className=" h-fit w-fit pt-36 pb-12  shrink flex flex-col gap-y-8 ">
          <h1 className="text-4xl font-titled ">About</h1>
          <div className="flex h-auto justify-center ">
            <p className="font-regular pt-8 max-h-lg w-auto grow ">
              Emma Sawyer is a visual artist and animator from New Jersey
              working in and between both the United States and Canadian 2D
              Animation Industries.
              <br></br>
              <br></br>
              Emma graduated from the School of Visual Arts with a Bachelors of
              Fine Arts in Animation, at the conclusion of her degree her thesis
              film: Parallels at Hand was ranked #1 amongst the then graduating
              class and was selected to be screened in both Hollywood California
              and Manhattan New York as a part of SVA’s Best of 2022 Showcase.
              <br></br>
              <br></br>
              In her professional career, Emma has worked with both Augenblick
              Studios and Titmouse as apart of their art departments for Adult
              Swim's Original Series Teenage Euthanasia and Royal Crackers.
              Afterwards Emma went on to work with QIE Media as an animator for
              two of Toonami’s Network Idents. More recently, she has been
              utilizing her skills with Liquid Solid Studios on an upcoming
              project. In conjunction, Emma serves at the Marketing Lead for the
              Montreal Chapter of Women in Animation, a non-profit organization
              with the mission to support women/trans/nonbinary professionals
              within the field of Animation, VFX and Gaming.
              <br></br>
              <br></br>
              In her off time, Emma continues to upkeep her personal project,
              Ascension of Elements. Creating original writing, illustrations
              and animation tied to its world and narrative.
              <br></br>
              <br></br>
              For any business related inquiries feel free to fill out the form
              below or reach out to: evsawyer@comcast.net
            </p>
            <img
              src="/MISC_ART/Postcard Mug-With BG.png"
              alt="2D art of hot cocoa in a mug, topped with marshmellows and a dipped-in candy-cane."
              className="max-w-lg object-contain max-xl:hidden"
            />
          </div>
          <form
            action="mailto:evsawyer@comcast.net"
            method="post"
            encType="plain"
            className="w-full"
          >
            <div className="flex justify-center gap-4 ">
              <div className="flex flex-col grow">
                {/* Name Box */}
                <label
                  htmlFor="name"
                  className="text-lg text-purple-500 font-regular"
                >
                  Name *
                </label>
                <input
                  className="box-border p-2 outline-EmmaPurple border-EmmaPurple border-solid border rounded-xl h-10 fpnt-regular "
                  type="text"
                  id="name"
                  name="example"
                ></input>
              </div>
              <div className="flex flex-col grow">
                {/* Email Box */}
                <label
                  htmlFor="mail"
                  className="text-lg text-purple-500 font-regular"
                >
                  Email *
                </label>
                <input
                  className="box-border p-2 outline-EmmaPurple border-EmmaPurple border-solid border rounded-xl h-10 font-regular"
                  type="email"
                  id="mail"
                  name="example"
                ></input>
              </div>
            </div>
            {/* Message Begins Here */}
            <div className="flex flex-col  mt-6 ">
              <label
                htmlFor="name"
                className="text-lg text-purple-500 font-regular"
              >
                Message *
              </label>
              <textarea
                className="box-border p-2 outline-EmmaPurple border-EmmaPurple border-solid border rounded-xl min-h-40 h-auto font-regular"
                type="text"
                id="message"
                name="message"
              ></textarea>
              <input
                type="submit"
                value="Submit"
                className="rounded-2xl bg-EmmaPurple hover:bg-purple-300  text-white font-titled mt-10 h-10 text-xl"
              ></input>
            </div>
          </form>

          <img src="/About-Logos/All_Logos.jpg" className="" />
        </div>
      </div>
    </>
  );
}
