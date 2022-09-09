import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <Container className="header">
        <Navbar variant="dark">
          <Navbar.Brand>
            <Link href="/" passHref>
              <Nav.Link>
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={140}
                  height={90}
                />
              </Nav.Link>
            </Link>
          </Navbar.Brand>
          <Nav>
            <Link href="work" passHref>
              <Nav.Link>work</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>about</Nav.Link>
            </Link>
            <Link href="/wedo" passHref>
              <Nav.Link>we do</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
}
