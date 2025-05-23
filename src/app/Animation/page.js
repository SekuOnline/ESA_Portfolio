import { NavBars } from "../components/verticalnav";

import one from "../Royal_Crackers/One.png";
export default function Home() {
  return (
    <>
      <NavBars />
      <div className="flex w-full h-screen max-lg:justify-evenly lg:flex-row-reverse max-lg:px-[10%] pl-[30%] pr-[10%]">
        <div className="h-fit  pt-36 pb-12 flex flex-col ">
          <h1 className="text-4xl font-titled">Animation</h1>
          <p className="font-regular w-4/5 pt-8">
            “Animation has always offered a myriad of inspirational
            possibilities for me. My mission is to showcase and further the
            inherent depth of the medium while pushing it to its utter limits–
            like that of my own skill set. The versatility of this medium
            shouldn’t be limited to just a simplistic comedy, a pretty picture,
            or what we as an audience expect to see.”
          </p>
          <h2 className="self-start text-2xl font-titled pt-8 text-gray-800">
            Character Animation Reel
          </h2>
          {/* <iframe
          className="w-full aspect-video self-stretch md:min-h-96"
          src="https://www.youtube.com/embed/watch?v=VTm5nRXmZHA"
          title="Product Overview Video"
          aria-hidden="true"
        /> */}
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/VTm5nRXmZHA?si=mvef92XNKbcud8_a"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* <h2 className="self-start text-2xl font-titled pt-8 text-gray-800">
          Compositing & Shot Finaling Reel
        </h2> */}
        </div>
      </div>
    </>
  );
}
