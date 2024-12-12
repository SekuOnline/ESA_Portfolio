"use client";
// import {useRouter} from 'next/router'
import Link from "next/link";
import React from "react";

// export default VerticalNav;

//Arrays containing the sub-sections of the vertical navbar and their respective links/slugs

export function VerticalNav() {
  const [active, setActive] = React.useState();

  function changeActive() {
    console.log("Active = " + active);
    if (active != true) {
      setActive(true);
      return;
    }
    setActive(false);
  }

  const disciplines = [
    { title: "Background Design" },
    { title: "Prop Design" },
    { title: "Character Design" },
    { title: "Animation" },
  ];

  const projects = [
    //Professional Projects:
    { title: "Professional", type: "Subheader" },
    { title: "Royal Crackers", type: "Professional" },
    { title: "Teenage Euthanasia", type: "Professional" },
    { title: "Toonami", type: "Professional" },

    //Personal Projects:
    { title: "Personal", type: "Subheader" },
    { title: "Ascension of Elements", type: "Personal" },
    { title: "Parallels at Hand", type: "Personal" },
  ];

  return (
    <>
      <input
        type="image"
        src={"/pbutton.png"}
        onClick={changeActive}
        className="text-3xl fixed z-10 text-black left-10 top-5 h-10 w-auto"
      ></input>

      <div
        className={`bg-white h-screen w-1/4 min-w-fit fixed text-black flex px-10 shadow-xl space-y-1 z-5
          ${active ? "animate-slideIn" : "animate-slideOut"}`}
      >
        <div className="flex flex-col flex-shrink-1 pt-12">
          <div className="h-16"></div>
          <NavHeader title="DISCIPLINES" contentArray={disciplines} />
          <NavHeader title="PROJECTS" contentArray={projects} />
          <Link
            href="/About"
            className="text-xl text-black my-4 font-regular hover:text-EmmaHlPurple"
          >
            About
          </Link>
          <SocialButtons />
          <p className="text-base text-gray-400 my-4 font-regular">
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
    <ul className="gap-5 mt-5">
      <h1 className="text-EmmaPurple hover:text-EmmaLBlue mb-6 text-3xl font-titled">
        {title}
      </h1>
      {contentArray.map((e) => {
        // console.log(e);
        return <NavElement content={e} key={e.title} />;
      })}
    </ul>
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
        <h2 className="text-2xl text-gray-400 my-3 font-titled">
          {content.title}
        </h2>
      ) : (
        <li
          key={content.title}
          className="text-lg text-black pb-1.5 font-regular hover:text-EmmaHlPurple"
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
      <div className="w-4/5 h-[11%] gap-x-16 bg-white text-black ml-[20%] flex font-titled absolute ">
        {/* <h1 className="pl-[10%] w-fit text-5xl">Emma Sawyer</h1> */}
        <div className="w-full h-full flex justify-around">
          <img
            alt="Emma Sawer Title Text"
            src="/EmmaNameLogo.svg"
            className={""}
          ></img>
          <SocialButtons />
        </div>
      </div>
    </>
  );
}

function SocialButtons() {
  return (
    <div className="flex gap-x-4 flex-shrink-1 items-center">
      <input
        type="image"
        src="/SOCIAL_ICONS/Cara_Icon.png"
        alt="Cara"
        className="w-8 h-8"
      ></input>
      <input
        type="image"
        src="/SOCIAL_ICONS/LinkedIn_Icon.png"
        alt="LinkedIn"
        className="w-8 h-8"
      ></input>
      <input
        type="image"
        src="/SOCIAL_ICONS/Instagram_Icon.png"
        alt="Instagram"
        className="w-8 h-8"
      ></input>
      <input
        type="image"
        src="/SOCIAL_ICONS/Youtube_Icon.png"
        alt="Youtube"
        className="w-8 h-8"
      ></input>
    </div>
  );
}
