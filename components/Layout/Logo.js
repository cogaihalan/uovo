import Image from "next/image";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Logo() {
  const text = "-EXPLORER - HANDS-ON/RULER - RESPONSIBILITY/SAGE - LISTEN";

  const convertTextCircle = () => {
    let flag = true;
    return text.split("").map((char, index) => {
      if (char === "/") flag = true;
      if (char === "-") flag = false;
      return (
        <span
          key={index}
          className={flag ? "bold" : ""}
          style={{ rotate: `${index * 6.25}deg` }}
        >
          {char}
        </span>
      );
    });
  };
  return (
    <div className="logo">
      <LazyLoadImage
        effect="blur"
        src="/assets/logo2.png"
        alt="Logo"
        className="logo-image"
      />
      <p className="logo-text--circle">{convertTextCircle()}</p>
    </div>
  );
}
