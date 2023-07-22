import React from "react";

const MarvelVideo = () => {
  return (
    <>
      <iframe
        className="rounded-lg h-12.022 w-full"
        src="https://www.youtube.com/embed/8ugaeA-nMTc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{ border: "1px solid #42331A" }}
      ></iframe>
    </>
  );
};

export default MarvelVideo;
