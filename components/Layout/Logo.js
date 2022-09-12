import React from "react";
export default function Logo() {
  const text = "EXPLORER - HANDS-ON/RULER - RESPONSIBILITY/SAGE - LISTEN";

  const convertTextCircle = () => {
    let flag = true;
    return text.split("").map((char, index) => {
      if (char === "/") flag = true;
      if (char === "-") flag = false;
      return (
        <span
          className={flag ? "bold" : ""}
          style={{ rotate: `${index * 5}deg` }}
        >
          {char}
        </span>
      );
    });
  };
  return (
    <div className="logo">
      <img src="/assets/logo2.png" alt="Logo" className="logo-image" />
      <p className="logo-text--circle">{convertTextCircle()}</p>
    </div>
  );
}
