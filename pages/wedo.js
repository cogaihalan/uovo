import React from "react";
import HomeTemplate from "../template/HomeTemplate";
import Logo from "../components/Layout/Logo";

export default function wedo() {
  return (
    <HomeTemplate themeClasses="light-theme">
      <div className="page wedo">
        <div className="container">
          <div className="page-container">
            <div className="page-content">
              <h3 className="page-subheading">
                We consult, design brand strategies and convey them in visual
                language with international standard methods!
              </h3>
              <div className="page-item">
                <p className="page-item__heading">What we do:</p>
                <div className="page-item__desc">
                  <p>
                    - Design Logo & Brand Identity (Designs For Business Model)
                  </p>
                  <p>- Design Packaging & Gift Boxes.</p>
                  <p>- Long-term Graphic Design For Business.</p>
                  <p>- Product Photography, Brand Photography</p>
                </div>
              </div>
              <div className="page-item">
                <p className="page-item__heading">Product objective:</p>
                <div className="page-item__desc">
                  <p>
                    - At UOVO, the products made are not simply beautiful or
                    just tell a certain story.
                  </p>
                  <p>
                    - At UOVO, the design always needs to pay attention to the
                    practical application as well as the control of risks
                    related to the image to help businesses optimize costs.
                  </p>
                  <p>
                    - At UOVO, the designed products must show the model and
                    personality that the brand is aiming for. People often tend
                    to feel about personality and spirit before understanding
                    semantics.
                  </p>
                  <p>
                    - At UOVO, the design must follow the customer&apos;s core
                    business model, the design must be consistent with the
                    business model (Designs For Business Model), in line with
                    the positioning of the product. (Category First - Brand
                    Second)
                  </p>
                </div>
              </div>
            </div>
            <Logo theme="light-theme"></Logo>
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
}
