import React from "react";

export default function VIdeoHeader() {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        src={`${process.env.NEXT_PUBLIC_URL_CDN}/videos/magner.mp4`}
        className="object-cover object-center lg:w-screen h-1/2 lg:h-screen"
      ></video>
      <div className="absolute top-0 bg-black/70 w-screen h-full lg:h-screen"></div>
    </div>
  );
}
