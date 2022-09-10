import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Player } from "video-react";
import HomeTemplate from "../template/HomeTemplate";
export default function Home() {
  return (
    <HomeTemplate themeClasses="dark-theme">
      <Container>
        <Carousel controls={false} indicators={false} className="home-carousel">
          <Carousel.Item interval={8000}>
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
                UOVO is a agency based in Hanoi in 2018.
                <br /> We aim for unfolding your brand story, mapping great
                brand strategies and letting them to win customer’s mind.
                <br />
                Your story is what inspired us!
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={8000}>
            <div className="d-flex justify-content-center">
              <Player
                src="/assets/01.MP4"
                fluid={true}
                autoPlay={true}
              ></Player>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={8000}>
            <div className="d-flex justify-content-center mt-5">
              <img src="/assets/logo3.png" alt="logo 3" />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </HomeTemplate>
  );
}
