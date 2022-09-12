import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
import HomeTemplate from "../template/HomeTemplate";
export default function Home() {
  const [theme, setTheme] = useState(true);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const partnerQuantity = () => {
    let listPartnerId = [];
    for (let partnerId = 2; partnerId <= 51; partnerId++) {
      listPartnerId.push(partnerId);
    }
    return [...listPartnerId];
  };
  const renderPartnersLogo = () => {
    return partnerQuantity().map((partnerId, index) => {
      return (
        <div key={index} className="partners-img">
          <img
            src={`/assets/partners/Asset ${partnerId}.jpg`}
            alt={`Partner ${partnerId}`}
          />
        </div>
      );
    });
  };
  return (
    <HomeTemplate themeClasses={theme ? "dark-theme" : "light-theme"}>
      <Container>
        <Carousel
          controls={false}
          onSelect={() => {
            setTheme(!theme);
          }}
          indicators={false}
          className="home-carousel"
        >
          <Carousel.Item interval={5000}>
            <div className="home-info">
              <div className="home-details">
                <div className="home-detail">Creative Agency</div>
                <div className="home-detail">Brand Agency</div>
                <div className="home-detail">Brand Strategy</div>
                <div className="home-detail">Brand Identity</div>
                <div className="home-detail">Visual Unity Solution</div>
              </div>
              <div className="home-intro">
                Hello!
                <br />
                UOVO is a agency based in Hanoi in 2018. We aim for unfolding
                your brand story, mapping great brand strategies and letting
                them to win customer’s mind. Your story is what inspired us!
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="d-flex justify-content-center">
              <video
                width="100%"
                height="550px"
                loop={true}
                controls={false}
                autoPlay={true}
              >
                <source src="/assets/01.MP4" type="video/mp4" />
              </video>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <div className="d-flex justify-content-center mt-5">
              <img src="/assets/logo3.png" alt="logo 3" />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={240000}>
            <div className="home-partners__slider">
              <div>
                <Slider {...settings}>{renderPartnersLogo()}</Slider>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </HomeTemplate>
  );
}
