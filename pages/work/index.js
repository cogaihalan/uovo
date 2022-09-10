import Image from "next/image";
import React from "react";
import HomeTemplate from "../../template/HomeTemplate";

const dataNameImageJPG = [
  "518",
  "And VietNam",
  "Bazan",
  "Casakid",
  "Casamia",
  "CICT",
  "Cơm tấm Nam Kỳ",
  "Davicon",
  "deVUI",
  "Dobe",
  "Enzym Nutri",
  "Euro milk",
  "Hicon 3",
  "HikVision",
  "Hilook",
  "ITC",
  "Joy 3",
  "Joy plus",
  "King edu",
  "KK Lịch",
  "KK Sapa",
  "Levirtu",
  "Lovebook 3",
  "Lovebook",
  "Mekong capital",
  "NAP",
  "NGN",
  "Persident cusise",
  "Phở Từ",
  "SUNNY",
  "Vietlesson",
  "WOMO",
  "Yên Tử",
  "Sữa chua trân châu hạ long"
];
const dataNameImagePNG = ["Fami", "FC racing", "z125"];
export default function index() {
  const renderImage = (listImage, format) => {
    const formatImg = format ? "jpg" : "png";
    return listImage.map((item, index) => {
      return (
        <li key={index} className="work-item">
          <p className="work-item__name">{item}</p>
          <div className="hide showImg">
            <img src={`/assets/images/${item}.${formatImg}`} />
          </div>
        </li>
      );
    });
  };

  return (
    <HomeTemplate themeClasses="light-theme">
      <div className="page work">
        <div className="container">
          <div className="page-container">
            <div className="page-content">
              <ul className="list-work">
                {renderImage(dataNameImageJPG, true)}
                {renderImage(dataNameImagePNG, false)}
              </ul>
              <div className="home-info">
                <div className="home-details">
                  <div className="home-detail">Creative Agency</div>
                  <div className="home-detail">Brand Agency</div>
                  <div className="home-detail">Brand Strategy</div>
                  <div className="home-detail">Brand Identity</div>
                  <div className="home-detail">Visual Unity Solution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
}
