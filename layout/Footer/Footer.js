import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <Container className="footer">
        <div className="footer-content">
          <div className="footer-copyright">
            <Image
              src="/assets/copyright.png"
              alt="copyright"
              width={20}
              height={20}
            ></Image>
            <Nav.Link className="footer-link" href="/">
              uovo creative agency vn., jsc
            </Nav.Link>
          </div>

          <Nav className="footer-list">
            <Link href="work" passHref>
              <Nav.Link className="footer-list__item">Instagram</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link className="footer-list__item">Behance</Nav.Link>
            </Link>
            <Link href="/wedo" passHref>
              <Nav.Link className="footer-list__item">Linkedin</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link className="footer-list__item">Facebook</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link className="footer-list__item">Portfolio</Nav.Link>
            </Link>
          </Nav>
          <div className="footer-office">
            <div className="footer-office__item">
              <span className="footer-office__name">Hanoi Office</span>
              <Link href="work" passHref>
                <Nav.Link className="footer-list__item">
                  hello@uovo.agency 
                </Nav.Link>
              </Link>
            </div>
            <div className="footer-office__item">
              <span className="footer-office__name">Korea Office</span>
              <Link href="work" passHref>
                <Nav.Link className="footer-list__item">kmkro@uovo.vn</Nav.Link>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
