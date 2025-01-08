export function SoloWideImg({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-11/12"
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    ></img>
  );
}

export function DuoImg({ srcOne, altOne, srcTwo, altTwo }) {
  return (
    <div className="w-11/12 h-fit flex justify-between">
      <img
        src={srcOne}
        alt={altOne}
        className="w-1/2 pr-3"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      ></img>
      <img
        src={srcTwo}
        alt={altTwo}
        className="w-1/2 pl-3"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      ></img>
    </div>
  );
}

export function TripleImg({ images }) {
  return (
    <div className="w-11/12 h-fit flex justify-between">
      {images.map((e) => {
        return (
          <img
            src={e.src}
            alt={e.alt}
            key={e.alt}
            className="w-1/3 h-auto"
          ></img>
        );
      })}
    </div>
  );
}
