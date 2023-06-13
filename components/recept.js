import React from "react";
import Link from "next/link";

function Recept({ titel, omschrijving, slug, auteur, gemaaktOp, image }) {
  let { file } = image;

  const backgroundImageStyle = {
    backgroundImage: `url(${file.url})`, //De url voor de achtergrond foto's voor alle recepten. Op gehaald
  };

  const gradientOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
    zIndex: 1,
  };

  const contentContainerStyle = {
    position: "relative",
    zIndex: 2,
  };

  // const truncatedText = bereidingswijze.content[0].content[0].value.substring(
  //   0,
  //   200
  // );

  return (
    <div className="card text-white h-full md:h-80 w-full">
      <div style={backgroundImageStyle} className="text-center bg-cover bg-no-repeat bg-center h-full relative">
        <div style={gradientOverlayStyle}></div>
        <div className="h-full flex flex-col justify-evenly items-center" style={contentContainerStyle}>
          <div className="p-1">
            <h1>{titel}</h1>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <p className="h-24 overflow-hidden">{omschrijving}</p>
          </div>
          <div>
            <p>Gemaakt door:</p>
            <p>{auteur}</p>
          </div>
          <Link href={`/recept/${slug}`}>
            <div className="text-black bg-white p-1 opacity-50 rounded-[10px]">
              Zie recept
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recept;
