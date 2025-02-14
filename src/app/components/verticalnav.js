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

export function NavBars() {
  const [activeNav, setActiveNav] = useState(true);

  return (
    <>
      <VerticalNav isActive={activeNav} />
      <HorizontalNav
        isActive={activeNav}
        toggle={() => {
          setActiveNav((isActive) => !isActive);
          console.log("toggle clicked!");
        }}
      />
    </>
  );
}

function VerticalNav({ isActive }) {
  // const [active, setActive] = useState(false);

  // function changeActive() {
  //   console.log("Active = " + active);
  //   if (active == false) {
  //     setActive(true);
  //     return;
  //   }
  //   setActive(false);
  // }

  const disciplines = [
    { title: "Background Design" },
    { title: "Prop Design" },
    { title: "Character Design" },
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
      {/* <input
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
        className="text-3xl z-50 text-black left-5 top-5 h-10 w-auto fixed"
      ></input> */}

      {/* px-10 used on input button and first div to space div text and button evenly. */}
      <div
        className={`bg-white flex-col h-full max-w-32 px-20 min-w-fit justify-center text-black flex  shadow-xl space-y-1 z-10 py-36 gap-6 fixed l-0 
          ${isActive ? "animate-slideOut" : "hidden"} 
          `}
      >
        {/* <div className="flex flex-col flex-shrink-1 gap-6"> */}
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
          © Emma Sawyer 2025
        </p>
        {/* </div> */}
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

function HorizontalNav({ isActive, toggle }) {
  return (
    <>
      <div className="w-full min-h-12 justify-around bg-white  text-black flex font-titled items-center z-20 flex-wrap-reverse fixed">
        {/* <h1 className="pl-[10%] w-fit text-5xl">Emma Sawyer</h1> */}

        <input
          type="image"
          src={isActive ? "/hamburgerButton.png" : "/closeButton.png"}
          onClick={toggle}
          className="z-50 text-black w-8 h-8 "
        ></input>
        {/* {isActive ? <h1>State Active</h1> : <h2>State Inactive</h2>} */}

        <Link href="/" passHref legacyBehavior>
          <svg
            data-bbox="550.16 1097.55 15287.181 1587.972"
            viewBox="0 0 16123.13 3837.03"
            xmlns="http://www.w3.org/2000/svg"
            data-type="shape"
            className="hover:fill-EmmaPurple max-h-32 min-h-8 shrink"
          >
            <g>
              <path d="M3982.72 1622.87c-15.79 343.05-31.58 686.11-47.53 1032.78h-333.64c45.88-509.72 91.53-1016.86 137.43-1526.79h412.29c96.11 364.08 192.35 728.68 288.6 1093.28 3.87.03 7.74.05 11.6.08 93.36-364.42 186.72-728.84 280.37-1094.41h411.58c45.04 504.66 90.07 1009.26 136.02 1524.09-115.06 8.7-225.55 17.05-342.6 25.89l-53.79-1050.78c-3.45-.61-6.9-1.22-10.35-1.84-11.47 41.34-23.49 82.54-34.31 124.05-74.11 284.28-148.95 568.37-220.92 853.19-11.41 45.13-30.06 61.78-77.25 58.2-59.94-4.55-120.73-4.42-180.7-.08-50.56 3.66-72.58-12.63-86.63-63.16-85.67-308.04-175.33-614.98-263.83-922.23-5.24-18.19-11.91-35.97-17.91-53.94-2.82.55-5.62 1.11-8.43 1.67z" />
              <path d="M3003.66 1623.83c-31.83 121.04-63.85 242.02-95.45 363.12-54 206.94-108.76 413.7-160.68 621.15-10.09 40.31-26.51 55.49-69.11 52.43-57.99-4.16-117.03-5.92-174.64.3-61.62 6.65-85.88-15.25-102.27-74.67-85.02-308.27-175.13-615.15-263.59-922.48-3.83-13.31-8.84-26.29-23.42-39.29-15.76 343.04-31.53 686.08-47.43 1031.96h-333.61c45.77-509.23 91.31-1016.02 137.56-1530.52 131.34 0 259.24-1.49 386.98 2.26 13.05.38 31.6 30.54 36.76 49.76 88.61 330.1 175.5 660.66 262.83 991.1 4.56 17.27 9.76 34.37 25.63 53.28 93.24-363.85 186.47-727.7 280.27-1093.74h411.88c45 504.36 89.92 1007.81 135.89 1522.96-112.33 8.76-222.87 17.39-342.47 26.72-18.16-353.79-36.05-702.37-53.95-1050.96-3.73-1.12-7.45-2.25-11.18-3.38z" />
              <path d="M11248.89 2242.24c67.68-374.63 135.37-749.26 204.87-1133.93 113.44 10.45 226.11 20.83 352.06 32.44-128.41 508.02-255.39 1010.35-383.05 1515.4h-366.75c-71.46-343.55-142.94-687.22-214.42-1030.89-4.86-.6-9.73-1.21-14.59-1.81-69.63 344.34-139.26 688.69-209.49 1035.99-118.84 0-233.26-1.67-347.59.84-44.02.97-41.06-31.55-47.62-55.61-78.31-287.36-155.44-575.05-233.01-862.61-51.93-192.51-104.06-384.96-158.18-585.11 125.37-16.85 245.4-32.98 369.41-49.64 77.04 382.74 152.58 758.06 228.12 1133.39l13.67.99c13.21-62.17 27.05-124.21 39.54-186.52 57.33-286.21 114.95-572.36 170.52-858.9 6.83-35.22 19.89-51.02 56.53-54.53 75.92-7.29 151.64-17.49 226.98-29.4 41.87-6.62 58.84 4.48 68.08 48.91 74.06 356.22 151.32 711.78 227.69 1067.52.82 3.8 2.85 7.34 4.32 11 4.31.82 8.61 1.64 12.91 2.47z" />
              <path d="M15837.34 2638.75c-121.97 15.67-232.84 31.43-344.2 42.22-13.37 1.3-34.66-21.63-43.35-38.02-78.7-148.47-156.45-297.46-231.89-447.58-16.84-33.51-36.88-46.57-74.18-44.79-59.87 2.87-119.97.77-187.57.77v503.56h-332.26V1151.22c143.91-16.14 289.97-38.49 436.83-46.81 91.28-5.18 185.18 2.92 275.45 18.85 298.71 52.74 448.26 243.31 435.24 544.28-9.05 209.25-65.12 301.83-265.58 431.46 108.15 176.1 216.51 352.52 331.51 539.75zm-883.41-742.74c98.12 0 188.32 6.29 277.28-1.5 127.31-11.14 193.48-87.63 202.76-217.98 10.06-141.27-46.23-241.48-170.71-263.31-90.52-15.88-186.23-3.78-279.51-.81-10.3.33-28.37 22.58-28.53 34.85-2 147.45-1.29 294.93-1.29 448.75z" />
              <path d="M13396.26 1128.58h988.38v289.28h-652v304.2h528.61c-8.28 92.39-15.84 176.76-23.66 264h-504.89v375.84h650.23v293.16h-986.67V1128.58z" />
              <path d="M5403.15 2659.48c70.15-209.93 137.32-410.47 204.18-611.11 94.12-282.43 188.82-564.67 281.07-847.7 12.91-39.59 31.62-59.08 73.73-62.54 82-6.74 163.73-16.96 245.46-26.65 28.96-3.43 46.77.6 57.88 34.04 162.49 489.2 326.68 977.84 490.33 1466.65 1.88 5.6 1.96 11.79 4.46 27.84-113.43 11.57-226.19 23.99-339.24 32.82-8.97.7-24.69-21.97-29.1-36.29-22.96-74.44-44.95-149.28-63.71-224.86-7.84-31.56-22.68-40.69-54.01-40.33a17760.92 17760.92 0 0 1-397.8.01c-31.84-.35-45.76 9.72-53.06 41.41-16.14 70.03-34.8 139.71-57.47 207.87-5.42 16.29-30.24 36.57-46.74 37.12-102.26 3.41-204.69 1.72-315.98 1.72zm500.36-539.97h341.61c-56.34-202.01-111.28-399.03-166.22-596.04-4.05-.45-8.11-.9-12.16-1.34-53.8 196.91-107.61 393.82-163.23 597.38z" />
              <path d="M9904.52 2639.65c-116.31 12.07-223.79 24.65-331.61 32.58-13.3.98-36.53-20.29-41.4-35.6-27.27-85.65-50.32-172.63-76.29-264.4-152.88 0-305.28-.9-457.61 1.75-11.82.21-28.99 23.54-33.78 39.14-21.12 68.76-36.48 139.33-59 207.58-5.35 16.21-29.94 36.51-46.28 37.05-102.29 3.39-204.75 1.71-315.19 1.71 33.78-102.91 65.53-200.89 98.08-298.6 128.25-385.06 257.48-769.81 384.17-1155.38 14.54-44.25 35.69-65.12 82.78-68.41 80.08-5.61 159.9-15.78 239.58-25.92 30.56-3.89 47 3.82 57.38 35.01 164.71 494.97 330.52 989.58 499.17 1493.49zm-686.85-1116.83c-4.4.69-8.79 1.38-13.19 2.06-53.41 196.96-106.82 393.92-161.28 594.77h341.25c-56.44-201.95-111.61-399.39-166.78-596.83z" />
              <path d="M1534.37 1130.64v288.53H885.06v302.84h528.33c-8.73 91.79-16.74 175.97-25.09 263.72H885.16v377.68h647.96v292.99H550.16V1130.63c323.85.01 649.91.01 984.21.01z" />
              <path d="M8310.61 1464.13c-117.89-24.29-228.37-51.4-340.42-68.17-50.16-7.51-104.69-.02-155.03 10.84-80.75 17.42-121.59 65.75-125.68 133.52-4.1 68.09 30.53 120.96 108.28 148.14 79.38 27.75 162.08 45.9 242.1 72.01 70.37 22.97 141.39 46.2 207.96 77.99 151.78 72.48 230.95 195.69 230.21 363.93-.77 175.65-63.26 320.94-225.23 409.46-130.15 71.13-272.36 78.92-416.12 71.35-176.3-9.29-345.37-46.2-503.09-140.72 34.25-84.97 67.67-167.86 99.53-246.89 99.18 28.31 193.2 64.01 290.49 80.24 85.93 14.34 176.78 16.61 262.98 5.37 47.32-6.17 101.6-42.09 131.31-80.88 49.48-64.58 18.95-154.51-59.3-190.41-59.57-27.32-125.38-41-188.07-61.8-91.17-30.27-185.97-53.23-272.19-94.03-174.42-82.54-251.96-233.58-236.26-433.53 14.94-190.29 120.76-332.83 301.81-385.78 241.86-70.73 477.01-36.56 703.15 67.87 12.85 5.94 28.47 32.19 24.84 43.04-25.83 77.24-56.33 152.93-81.27 218.45z" />
              <path d="M11866.3 1163.68c121.26-17.76 234.49-33.1 347.21-51.53 39.6-6.48 55.54 8.09 69.82 43.76 77.2 192.9 157.36 384.63 236.6 576.72 7.42 17.98 15.59 35.65 27.58 62.95 13.57-27.09 23.55-45.13 31.87-63.9 82.53-186.38 165.48-372.59 246.49-559.62 14.53-33.55 31.95-48.57 70.91-47.52 107.81 2.9 215.75 1 332.48 1-11.95 24.78-19.67 42.43-28.74 59.36-154.91 289.05-310.58 577.69-464.09 867.47-15.11 28.52-23.74 63.8-24.2 96.1-2.37 167.59-1.1 335.23-1.1 506.91h-334.66c0-100.38-7.43-200.34 1.63-298.81 16.22-176.23-29.49-329.96-121.35-481.18-127.6-210.05-238.72-430.02-356.76-645.83-10.4-18.96-19.75-38.52-33.69-65.88z" />
            </g>
          </svg>
        </Link>

        <SocialButtons />
      </div>
    </>
  );
}

function SocialButtons() {
  return (
    <div className="flex gap-x-4 flex-shrink-1 items-center">
      <a
        href="https://cara.app/emmasawyerart"
        target="_blank"
        className="w-8 h-8"
      >
        <Image src={cara} alt="cara" />
      </a>
      <a
        href="https://www.linkedin.com/in/emma-v-sawyer/"
        target="_blank"
        className="w-8 h-8"
      >
        <Image src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://www.instagram.com/emmasawyerart/"
        target="_blank"
        className="w-8 h-8"
      >
        <Image src={instagram} alt="instagram" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCtlkct7hX-HFnN7j07AVLUw"
        target="_blank"
        className="w-8 h-8"
      >
        <Image src={youtube} alt="youtube" />
      </a>
    </div>
  );
}
