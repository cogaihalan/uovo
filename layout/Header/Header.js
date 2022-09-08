import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { Container } from "react-bootstrap";
export default function Header() {
  return (
    <header>
      <Container className="header">
        <Navbar variant="dark">
          <Navbar.Brand>
            <Link href="/" passHref>
              <Nav.Link>UOVO</Nav.Link>
            </Link>
          </Navbar.Brand>
          <Nav>
            <Link href="/about" passHref>
              <Nav.Link>about</Nav.Link>
            </Link>
            <Link href="/wedo" passHref>
              <Nav.Link>we do</Nav.Link>
            </Link>
            <Link href="work" passHref>
              <Nav.Link>work</Nav.Link>
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
