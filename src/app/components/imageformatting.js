import Image from "next/image";

export function SoloWideImage({ src, alt }) {
  return (
    <div className="w-11/12 h-fit flex justify-between">
      <Image
        src={src}
        alt={alt}
        style={{ width: "100%", height: "auto" }}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      ></Image>
    </div>
  );
}

export function DuoImage({ srcOne, altOne, srcTwo, altTwo }) {
  return (
    <div className="w-11/12 h-fit flex justify-between">
      <Image
        src={srcOne}
        alt={altOne}
        width={0}
        height={0}
        style={{ width: "50%", height: "auto", paddingRight: 3 }}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      ></Image>
      <Image
        src={srcTwo}
        alt={altTwo}
        width={0}
        height={0}
        style={{ width: "50%", height: "auto", paddingLeft: 3 }}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      ></Image>
    </div>
  );
}

export function TripleImage({ images }) {
  return (
    <div className="w-11/12 h-fit flex justify-between">
      {images.map((e) => {
        return (
          <Image
            src={e.src}
            alt={e.alt}
            key={e.alt}
            width={0}
            height={0}
            style={{ width: "33%", height: "auto" }}
          ></Image>
        );
      })}
    </div>
  );
}

export function GalleryImage({ srcOne, altOne }) {
  return (
    <div className="w-full flex flex-row">
      {/* <div className="w-1/3 hover:bg-gradient-to-bl">
    //     <Image
    //       src={srcOne}
    //       alt={altOne}
    //       style={{
    //         objectFit: "cover",
    //       }}
    //     />
    //   </div> */}
      <div
        className="w-1/3 h-80 bg-center bg-cover"
        style={{
          // width: "500px",
          // height: "500px",
          backgroundImage: `url(/One.png)`,
          backgroundSize: "",
        }}
      ></div>
      <div
        className="w-1/3 h-80 bg-center bg-cover"
        style={{
          // width: "500px",
          // height: "500px",
          backgroundImage: `url(${srcOne})`,
          backgroundSize: "",
        }}
      ></div>
      {/* <div
        className="w-1/3 h-80 bg-center bg-cover"
        style={{
          // width: "500px",
          // height: "500px",
          backgroundImage: `url(${srcOne})`,
          backgroundSize: "",
        }}
      ></div> */}
    </div>
  );
}
