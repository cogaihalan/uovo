import React from "react";
import HomeTemplate from "../template/HomeTemplate";
import Logo from "../components/Layout/Logo";
export default function about() {
  return (
    <HomeTemplate themeClasses="dark-theme">
      <div className="page about">
        <div className="container">
          <div className="page-container">
            <div className="page-content">
              <h1 className="page-heading">UOVO - Positioning Statement</h1>
              <div className="page-item">
                <p className="page-item__heading">- Explorer/ Experience:</p>
                <div className="page-item__desc">
                  UOVO always cares page the experience of customers as well as
                  the staff in the team. If we don&apos;t have a lot of
                  experience, we won&apos;t be able to understand the difference
                  between many professions. And without much experience, the
                  products made lack the practicality (hands-on) as well as the
                  application of how to manage the risks arising.
                </div>
              </div>
              <div className="page-item">
                <p className="page-item__heading">- Ruler/ Discipline:</p>
                <div className="page-item__desc">
                  Each individual in UOVO must work with a standard/ disciplined
                  principle, must show Thoroughness in work, discipline with
                  time. No creativity is created by carelessness, it is
                  discipline that brings creativity. UOVO always has
                  responsibility (responsibility) for each product created, to
                  achieve the highest responsibility, discipline is
                  indispensable.
                </div>
              </div>
              <div className="page-item">
                <p className="page-item__heading">- Sage/ Understanding:</p>
                <div className="page-item__desc">
                  UOVO is always ready to listen (listen) to all problems faced
                  by customers, and at the same time carefully study many
                  factors, observe many aspects of the matter to provide the
                  best solution. With UOVO personal bias will always not appear
                  due to the criteria of Listening - understanding is always the
                  guideline for us to work
                </div>
              </div>
            </div>
            <Logo theme="dark-theme"></Logo>
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
}
