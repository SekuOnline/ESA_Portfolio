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
  const [activeNav, setActiveNav] = useState(window.innerWidth > 1024);

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
      {/* px-10 used on input button and first div to space div text and button evenly. */}
      <div
        className={`bg-white  flex-col z-20  h-full max-w-32 px-20 max-lg:px-[10%] min-w-fit  text-black flex  shadow-xl space-y-1 py-36 gap-6 fixed  
          ${!isActive && "hidden"} 
          `}
      >
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
      <div className="w-full max-lg:px-[10%] max-lg:justify-evenly justify-between min-h-28 pr-[10%] pl-[30%]  flex z-50 max-lg:flex-col fixed items-center">
        {/* <h1 className="pl-[10%] w-fit text-5xl">Emma Sawyer</h1> */}

        {/* <input
          type="image"
          src={isActive ? "/X-Button.svg" : "/Hamburger.svg"}
          onClick={toggle}
          className="z-50 fill-EmmaPurple w-8 h-8 mid:hidden lg:hidden"
        ></input> */}

        <Link href="/" passHref legacyBehavior>
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 7767.26 806.83"
            className="hover:fill-EmmaPurple lg:h-28 max-mg:h-20 z-50 max-w-96 "
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <g>
                <path d="M1744.05,266.91c-8.02,174.3-16.05,348.61-24.15,524.75h-169.52c23.31-258.98,46.51-516.66,69.83-775.75h209.48c48.83,184.99,97.73,370.23,146.63,555.48,1.97.02,3.93.03,5.89.04,47.44-185.16,94.87-370.32,142.45-556.06h209.12c22.88,256.41,45.76,512.79,69.11,774.37-58.46,4.42-114.6,8.66-174.07,13.15l-27.33-533.89c-1.75-.31-3.51-.62-5.26-.93-5.83,21-11.94,41.94-17.43,63.03-37.65,144.44-75.68,288.78-112.25,433.5-5.8,22.93-15.27,31.39-39.25,29.57-30.45-2.31-61.34-2.25-91.81-.04-25.69,1.86-36.88-6.42-44.02-32.09-43.53-156.51-89.08-312.47-134.05-468.58-2.66-9.24-6.05-18.28-9.1-27.41-1.43.28-2.86.56-4.28.85h0Z" />
                <path d="M1246.6,267.4c-16.17,61.5-32.44,122.97-48.5,184.5-27.44,105.14-55.26,210.2-81.64,315.6-5.13,20.48-13.47,28.19-35.11,26.64-29.46-2.11-59.46-3.01-88.73.15-31.31,3.38-43.63-7.75-51.96-37.94-43.2-156.63-88.98-312.55-133.93-468.7-1.95-6.76-4.49-13.36-11.9-19.96-8.01,174.3-16.02,348.59-24.1,524.33h-169.5c23.26-258.73,46.39-516.23,69.89-777.64,66.73,0,131.72-.76,196.62,1.15,6.63.19,16.06,15.52,18.68,25.28,45.02,167.72,89.17,335.67,133.54,503.57,2.32,8.77,4.96,17.46,13.02,27.07,47.37-184.87,94.74-369.74,142.4-555.72h209.27c22.86,256.26,45.69,512.06,69.04,773.8-57.07,4.45-113.24,8.84-174.01,13.58-9.23-179.76-18.32-356.87-27.41-533.98-1.9-.57-3.79-1.14-5.68-1.72h0Z" />
                <path d="M5435.92,581.61c34.39-190.35,68.78-380.69,104.09-576.14,57.64,5.31,114.88,10.58,178.88,16.48-65.24,258.12-129.76,513.35-194.62,769.96h-186.34c-36.31-174.55-72.63-349.17-108.94-523.78-2.47-.3-4.94-.61-7.41-.92-35.38,174.96-70.76,349.92-106.44,526.38-60.38,0-118.52-.85-176.61.43-22.37.49-20.86-16.03-24.2-28.25-39.79-146-78.98-292.18-118.39-438.28-26.38-97.81-52.87-195.59-80.37-297.29,63.7-8.56,124.69-16.76,187.69-25.22,39.14,194.47,77.52,385.16,115.91,575.86l6.95.5c6.71-31.59,13.74-63.11,20.09-94.77,29.13-145.42,58.41-290.81,86.64-436.4,3.47-17.89,10.11-25.92,28.72-27.71,38.57-3.7,77.05-8.89,115.33-14.94,21.27-3.36,29.9,2.28,34.59,24.85,37.63,180.99,76.88,361.65,115.69,542.4.42,1.93,1.45,3.73,2.2,5.59,2.19.42,4.37.83,6.56,1.25h0Z" />
                <path d="M7767.26,783.07c-61.97,7.96-118.3,15.97-174.88,21.45-6.79.66-17.61-10.99-22.03-19.32-39.99-75.44-79.49-151.14-117.82-227.41-8.56-17.03-18.74-23.66-37.69-22.76-30.42,1.46-60.96.39-95.3.39v255.85h-168.82V27.27c73.12-8.2,147.33-19.56,221.95-23.78,46.38-2.63,94.09,1.48,139.95,9.58,151.77,26.8,227.76,123.62,221.14,276.54-4.6,106.32-33.09,153.36-134.94,219.22,54.95,89.47,110.01,179.11,168.44,274.24h0ZM7318.41,405.69c49.85,0,95.68,3.2,140.88-.76,64.68-5.66,98.31-44.52,103.02-110.75,5.11-71.78-23.49-122.69-86.74-133.79-45.99-8.07-94.62-1.92-142.02-.41-5.23.17-14.41,11.47-14.5,17.71-1.02,74.92-.66,149.85-.66,228.01h0Z" />
                <path d="M6526.97,15.77h502.19v146.98h-331.27v154.56h268.58c-4.21,46.94-8.05,89.81-12.02,134.14h-256.53v190.96h330.38v148.95h-501.32V15.77Z" />
                <path d="M2465.76,793.6c35.64-106.66,69.77-208.56,103.74-310.5,47.82-143.5,95.94-286.9,142.81-430.71,6.56-20.12,16.07-30.02,37.46-31.78,41.66-3.42,83.19-8.62,124.72-13.54,14.71-1.74,23.76.3,29.41,17.3,82.56,248.56,165.98,496.83,249.13,745.19.96,2.85,1,5.99,2.27,14.15-57.63,5.88-114.92,12.19-172.36,16.68-4.56.36-12.54-11.16-14.79-18.44-11.67-37.82-22.84-75.85-32.37-114.25-3.98-16.04-11.52-20.67-27.44-20.49-67.37.76-134.75.76-202.12,0-16.18-.18-23.25,4.94-26.96,21.04-8.2,35.58-17.68,70.99-29.2,105.62-2.75,8.28-15.36,18.58-23.75,18.86-51.96,1.73-104,.87-160.55.87h0ZM2719.98,519.25h173.57c-28.63-102.64-56.54-202.74-84.45-302.84-2.06-.23-4.12-.46-6.18-.68-27.34,100.05-54.68,200.1-82.94,303.52h0Z" />
                <path d="M4752.86,783.53c-59.1,6.13-113.71,12.52-168.49,16.55-6.76.5-18.56-10.31-21.04-18.09-13.86-43.52-25.57-87.71-38.76-134.34-77.68,0-155.11-.46-232.51.89-6.01.11-14.73,11.96-17.16,19.89-10.73,34.94-18.54,70.79-29.98,105.47-2.72,8.24-15.21,18.55-23.51,18.82-51.97,1.72-104.03.87-160.15.87,17.16-52.29,33.3-102.07,49.83-151.72,65.16-195.65,130.82-391.13,195.19-587.04,7.39-22.48,18.13-33.09,42.06-34.76,40.69-2.85,81.24-8.02,121.73-13.17,15.53-1.98,23.88,1.94,29.15,17.79,83.69,251.49,167.93,502.8,253.62,758.83h0ZM4403.87,216.08c-2.24.35-4.47.7-6.7,1.05-27.14,100.07-54.27,200.15-81.94,302.2h173.39c-28.68-102.61-56.71-202.93-84.74-303.24h0Z" />
                <path d="M500.07,16.81v146.6H170.16v153.87h268.44c-4.44,46.64-8.51,89.41-12.75,133.99h-255.64v191.9h329.22v148.87H0V16.81c164.54,0,330.21,0,500.07,0Z" />
                <path d="M3943.01,186.26c-59.9-12.34-116.03-26.12-172.96-34.64-25.49-3.82-53.19-.01-78.77,5.51-41.03,8.85-61.78,33.41-63.86,67.84-2.08,34.6,15.51,61.46,55.02,75.27,40.33,14.1,82.35,23.32,123.01,36.59,35.75,11.67,71.84,23.47,105.66,39.63,77.12,36.83,117.34,99.43,116.97,184.91-.39,89.25-32.14,163.07-114.44,208.04-66.13,36.14-138.38,40.1-211.43,36.25-89.58-4.72-175.48-23.47-255.61-71.5,17.4-43.17,34.38-85.29,50.57-125.44,50.39,14.38,98.16,32.52,147.59,40.77,43.66,7.29,89.82,8.44,133.62,2.73,24.04-3.13,51.62-21.39,66.72-41.09,25.14-32.81,9.63-78.5-30.13-96.75-30.27-13.88-63.7-20.83-95.56-31.4-46.32-15.38-94.49-27.05-138.3-47.78-88.62-41.94-128.02-118.68-120.04-220.27,7.59-96.68,61.36-169.11,153.35-196.01,122.89-35.94,242.36-18.58,357.26,34.48,6.53,3.02,14.47,16.36,12.62,21.87-13.12,39.24-28.62,77.7-41.29,110.99h0Z" />
                <path d="M5749.62,33.6c61.61-9.02,119.14-16.82,176.41-26.18,20.12-3.29,28.22,4.11,35.47,22.23,39.22,98.01,79.95,195.43,120.21,293.03,3.77,9.14,7.92,18.11,14.01,31.98,6.89-13.76,11.97-22.93,16.19-32.47,41.93-94.7,84.08-189.31,125.24-284.34,7.38-17.05,16.23-24.68,36.03-24.14,54.78,1.47,109.62.51,168.93.51-6.07,12.59-9.99,21.56-14.6,30.16-78.71,146.86-157.8,293.52-235.8,440.75-7.68,14.49-12.06,32.42-12.3,48.83-1.2,85.15-.56,170.33-.56,257.56h-170.04c0-51-3.77-101.79.83-151.82,8.24-89.54-14.98-167.65-61.66-244.48-64.83-106.72-121.29-218.49-181.27-328.14-5.28-9.63-10.03-19.57-17.12-33.47h0Z" />
              </g>
            </g>
          </svg>
        </Link>
        <div className="flex flex-row max-lg:w-full justify-between ">
          <input
            type="image"
            src={isActive ? "/X-Button.svg" : "/Hamburger.svg"}
            onClick={toggle}
            className="z-50 fill-EmmaPurple w-8 h-8 lg:hidden "
          ></input>

          <SocialButtons />
        </div>
      </div>
      <div className="w-full bg-white h-28 max-lg:h-32 fixed z-10"></div>
    </>
  );
}

function SocialButtons() {
  return (
    <div className="flex min-w-40 justify-between flex-shrink items-center  z-50">
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
