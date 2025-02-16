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
      <div className="flex w-full h-screen max-lg:justify-evenly lg:flex-row-reverse max-lg:px-[10%] pl-[30%] pr-[10%]">
        <div className=" h-fit pt-36 pb-12  flex flex-col gap-y-4">
          <h1 className="text-4xl font-titled pb-4">About</h1>
          <div className="flex h-auto justify-center ">
            <p className="font-regular pt-8 max-h-lg w-auto grow ">
              Emma Sawyer is a visual artist and animator from New Jersey
              working in and between the US/Canadian 2D Animation Industries,
              possessing eligibility to work in both countries.
              <br></br>
              <br></br>
              Graduating from the School of Visual Arts with a Bachelors of Fine
              Arts in Animation, her Thesis Film, Parallels at Hand was ranked
              #1 amongst her graduating class. The film was selected to be
              screened in both Hollywood California and Manhattan New York as a
              part of SVA's Best of 2022 Showcase.
              <br></br>
              <br></br>
              Professionally, Emma has worked with both Augenblick Studios and
              Titmouse as apart of their production teams for Adult Swim's
              Original Series Teenage Euthanasia and Royal Crackers. She has
              also worked with QIE Media as an animator for two Toonami Network
              ID's. More recently Emma is working with Liquid Solid Studios for
              an upcoming project.
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
          >
            <div className="flex justify-center gap-4 ">
              <div className="flex flex-col grow">
                {/* Name Box */}
                <label htmlFor="name" className="text-lg text-purple-500 ">
                  Name *
                </label>
                <input
                  className="box-border p-2 outline-EmmaPurple border-EmmaPurple border-solid border rounded-xl h-10  font-regular"
                  type="text"
                  id="name"
                  name="example"
                ></input>
              </div>
              <div className="flex flex-col grow">
                {/* Email Box */}
                <label htmlFor="mail" className="text-lg text-purple-500 ">
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
              <label htmlFor="name" className="text-lg text-purple-500 ">
                Message *
              </label>
              <textarea
                className="box-border p-2 outline-EmmaPurple border-EmmaPurple border-solid border rounded-xl min-h-40 h-auto  font-regular"
                type="text"
                id="message"
                name="message"
              ></textarea>
              <input
                type="submit"
                value="Submit"
                className="rounded-2xl bg-EmmaPurple hover:bg-purple-300  text-white font-titled mt-10 h-10"
              ></input>
            </div>
          </form>

          <img src="/About-Logos/All_Logos.png" className="" />
        </div>
      </div>
    </>
  );
}
