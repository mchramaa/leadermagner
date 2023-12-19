import React from "react";

export default function VIdeoHeader() {
  return (
    <video
      autoPlay
      loop
      muted
      src={`${process.env.NEXT_PUBLIC_URL_CDN}/videos/magner.mp4`}
      className="object-cover object-center w-screen max-h-screen"
    ></video>
  );
}
