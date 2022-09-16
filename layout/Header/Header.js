import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { Container, Offcanvas } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
const navLinkList = ["work", "about", "wedo", "contact"];
export default function Header() {
  const renderNavLink = () => {
    return navLinkList.map((item, index) => {
      let content = item;
      if (item === "wedo") {
        content = "we do";
      }
      return (
        <Nav.Item key={index}>
          <Link href={`/${item}`} passHref>
            <Nav.Link>{content}</Nav.Link>
          </Link>
        </Nav.Item>
      );
    });
  };
  return (
    <header>
      <Container className="header">
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand>
            <Link href="/" passHref>
              <Nav.Link>
                <LazyLoadImage
                  src="/assets/logo.png"
                  alt="logo"
                  width={130}
                  height={80}
                />
              </Nav.Link>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <div className="header-menu"></div>
          </Navbar.Toggle>
          <Navbar.Offcanvas>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`basic-navbar-nav`}>
                Home Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                onSelect={(pages) => {
                  // const tabActive = pages.slice(1);
                }}
              >
                {renderNavLink()}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </header>
  );
}
