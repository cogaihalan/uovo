import Image from "next/image";
import React from "react";
import HomeTemplate from "../../template/HomeTemplate";
export default function index() {
  return (
    <HomeTemplate themeClasses="light-theme">
      <div className="page work">
        <div className="container">
          <div className="page-container">
            <div className="page-content">
              <ul className="list-work">
                <li className="work-item">
                  <p className="work-item__name">WOMO</p>
                  <div className="hide showImg">
                    <Image
                      src="/assets/images/WOMO.jpg"
                      width="500px"
                      height="250px"
                    ></Image>
                  </div>
                </li>
                <li className="work-item">
                  <p className="work-item__name">Bazan</p>
                  <div className="hide showImg">
                    <Image
                      src="/assets/images/Bazan.jpg"
                      width="500px"
                      height="250px"
                    ></Image>
                  </div>
                </li>
                <li className="work-item">
                  <p className="work-item__name">518</p>
                  <div className="hide showImg">
                    <Image
                      src="/assets/images/518.jpg"
                      width="500px"
                      height="250px"
                    ></Image>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
}
