import Image from "next/image";

export function SoloWideImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      className="w-11/12"
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    ></Image>
  );
}

export function DuoImage({ srcOne, altOne, srcTwo, altTwo }) {
  return (
    <div className="w-11/12 h-fit flex justify-between">
      <Image
        src={srcOne}
        alt={altOne}
        className="w-1/2 pr-3"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      ></Image>
      <Image
        src={srcTwo}
        alt={altTwo}
        className="w-1/2 pl-3"
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
            className="w-1/3 h-auto"
          ></Image>
        );
      })}
    </div>
  );
}
