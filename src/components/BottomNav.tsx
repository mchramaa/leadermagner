"use client";

import React, { useEffect, useState } from "react";

export default function BottomNav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky ? "fixed top-0 left-0 w-full z-50 bg-white shadow" : ""
      } absolute bottom-0 flex justify-between items-center py-4 px-6 h-12`}
    >
      {/* Your bottom navigation content goes here */}
      <div>
        {/* Navigation items */}
        {/* Example: */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
