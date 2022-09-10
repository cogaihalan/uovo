import React from "react";
export default function Logo() {
  const text = "EXPLORER - HANDS-ON/RULER - RESPONSIBILITY/SAGE - LISTEN";
  const convertTextCircle = () => {
    return text.split("").map((char, index) => {
      return <span style={{ rotate: `${index * 6}deg` }}>{char}</span>;
    });
  };
  return (
    <div className="logo">
      <p className="logo-text--circle">{convertTextCircle()}</p>
    </div>
  );
}
