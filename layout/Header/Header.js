import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Image from "next/image";
const navLinkList = ["work", "about", "wedo", "contact"];
export default function Header() {
  const renderNavLink = () => {
    return navLinkList.map((item, index) => {
      let content = item;
      if (item === "wedo") {
        content = "we do";
      }
      return (
        <Link key={index} href={`/${item}`} passHref>
          <Nav.Link>{content}</Nav.Link>
        </Link>
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
                <img
                  src="/assets/logo.png"
                  alt="logo"
                  width={130}
                  height={80}
                />
              </Nav.Link>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>{renderNavLink()}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
