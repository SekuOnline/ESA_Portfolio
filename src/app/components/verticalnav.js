"use client";
// import {useRouter} from 'next/router'
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import linkedin from "../../../public/SOCIAL_ICONS/Linkedin.png";
import cara from "../../../public/SOCIAL_ICONS/Cara.png";
import youtube from "../../../public/SOCIAL_ICONS/YouTube.png";
import instagram from "../../../public/SOCIAL_ICONS/Instagram.png";

//prod deploy
// export default VerticalNav;

//Arrays containing the sub-sections of the vertical navbar and their respective links/slugs

export function VerticalNav() {
  const [active, setActive] = useState(false);

  // function changeActive() {

  //     console.log("Active = " + active);
  //     if (active == false) {
  //       setActive(true);
  //       return;
  //     }
  //     setActive(false);

  // }

  const disciplines = [
    // { title: "Background Design" },
    // { title: "Prop Design" },
    // { title: "Character Design" },
    { title: "Animation" },
  ];

  const projects = [
    //Professional Projects:
    { title: "Professional", type: "Subheader", padding: "Normal" },
    { title: "Royal Crackers", type: "Professional" },
    { title: "Teenage Euthanasia", type: "Professional" },
    // { title: "Toonami", type: "Professional" },

    //Personal Projects:
    // { title: "Personal", type: "Subheader", padding: "Extra" },
    // { title: "Parallels at Hand", type: "Personal" },
    // { title: "Ascension of Elements", type: "Personal" },
  ];

  return (
    <>
      <input
        type="image"
        src={active ? "/hamburgerButton.png" : "/closeButton.png"}
        onClick={() => {
          console.log("Active = " + active);
          if (active == false) {
            setActive(true);
            return;
          }
          setActive(false);
        }}
        className="text-3xl z-10 text-black left-5 top-5 h-10 w-auto absolute"
      ></input>

      {/* px-10 used on input button and first div to space div text and button evenly. */}
      <div
        className={`bg-white h-screen w-1/5 min-w-fit fixed text-black flex pl-20 shadow-xl space-y-1 z-5
          ${active ? "animate-slideIn" : "animate-slideOut"}`}
      >
        <div className="flex flex-col flex-shrink-1 pt-32 gap-6">
          {/* p-28 comes from: 16 for the button, + an extra 16. */}

          <NavHeader title="DISCIPLINES" contentArray={disciplines} />
          <NavHeader title="PROJECTS" contentArray={projects} />
          <Link
            href="/About"
            className="text-lg text-black pt-4 font-regular hover:text-EmmaHlPurple"
          >
            About
          </Link>
          <SocialButtons />
          <p className="text-base text-gray-500  font-regular">
            © Emma Sawyer 2024
          </p>
        </div>
      </div>
    </>
  );
}

function NavHeader({ title, contentArray }) {
  // console.log(contentArray);
  return (
    <div className="gap-6 flex flex-col">
      <h1 className="text-EmmaPurple hover:text-EmmaLBlue text-4xl font-titled">
        {title}
      </h1>
      <ul className="flex flex-col gap-1">
        {contentArray.map((e) => {
          // console.log(e);
          return <NavElement content={e} key={e.title} />;
        })}
      </ul>
    </div>
  );
}

function NavElement({ content }) {
  function getContentLink(content) {
    return content.title.split(" ").join("_");
  }
  // console.log("NavElement");
  // console.log(content);
  return (
    <>
      {content.type === "Subheader" ? (
        <h2
          className={`text-2xl text-gray-400 font-titled pb-2 ${
            content.padding === "Extra" && "pt-6"
          }`}
        >
          {content.title}
        </h2>
      ) : (
        <li
          key={content.title}
          className="text-lg text-black font-regular hover:text-EmmaHlPurple"
        >
          <Link href={getContentLink(content)}>{content.title}</Link>
        </li>
      )}
    </>
  );
}

export function HorizontalNav() {
  return (
    <>
      <div className="w-screen h-[11%] gap-x-16 bg-white text-black  flex font-titled absolute ">
        {/* <h1 className="pl-[10%] w-fit text-5xl">Emma Sawyer</h1> */}
        <div className="w-full h-full flex justify-center gap-x-20">
          <Link href="/" passHref legacyBehavior>
            <img alt="Emma Sawer Title Text" src="/EmmaNameLogo.svg"></img>
          </Link>

          <SocialButtons />
        </div>
      </div>
    </>
  );
}

function SocialButtons() {
  return (
    <div className="flex gap-x-4 flex-shrink-1 items-center">
      <a href="https://cara.app/emmasawyerart" className="w-8 h-8">
        <Image src={cara} alt="cara" />
      </a>
      <a href="https://www.linkedin.com/in/emma-v-sawyer/" className="w-8 h-8">
        <Image src={linkedin} alt="linkedin" />
      </a>
      <a href="https://www.instagram.com/emmasawyerart/" className="w-8 h-8">
        <Image src={instagram} alt="instagram" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCtlkct7hX-HFnN7j07AVLUw"
        className="w-8 h-8"
      >
        <Image src={youtube} alt="youtube" />
      </a>
    </div>
  );
}
