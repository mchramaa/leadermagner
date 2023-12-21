"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import magnerIcon from "@/../public/magnerIcon.png";

export default function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > 500); // Set a scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 w-full transition-transform duration-1000 flex items-center justify-center py-2 ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-lg z-10`}
    >
      <Image src={magnerIcon} alt="Magnercare Logo Png" className="w-46" />
    </div>
  );
}
