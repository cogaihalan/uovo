import React from "react";
import HomeTemplate from "../template/HomeTemplate";
import Nav from "react-bootstrap/Nav";
import Logo from "../components/Layout/Logo";
import Image from "next/image";
export default function contact() {
  return (
    <HomeTemplate themeClasses="dark-theme">
      <div className="page contact">
        <div className="container">
          <div className="page-container">
            <div className="page-content">
              <div className="page-contact">
                <h3 className="page-heading">
                  We look forward to questions, discussions, and collaborations.
                </h3>
                <Nav.Link className="page-email" type="email">
                  hello@uovo.agency
                </Nav.Link>
              </div>
              <div className="page-brand">
                <div className="page-brand__scan">
                  <div>
                    <Image
                      src="/assets/qr1.png"
                      width="100px"
                      height="100px"
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/assets/qr2.png"
                      width="100px"
                      height="100px"
                    ></Image>
                  </div>
                </div>
                <div className="page-brand__intro">
                  Hello!
                  <br />
                  UOVO is a agency based in Hanoi in 2018.
                  <br />
                  We aim for unfolding your brand story, mapping great brand
                  strategies and letting them to win customer’s mind. Your story
                  is what inspired us!
                </div>
              </div>
            </div>
            <Logo></Logo>
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
}
