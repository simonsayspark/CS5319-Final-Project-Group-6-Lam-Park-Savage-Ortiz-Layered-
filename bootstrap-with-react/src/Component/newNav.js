import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import minipaLogo from "../Images/minipaLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.scss";
import "./Nav.scss";
import MegaMenu from "./MegaMenu";

const NewNav = ({ navData }) => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topNavbar = document.querySelector(".top-navbar");
      const mainNavbar = document.querySelector(".main-navbar");
      if (window.scrollY > 40) {
        topNavbar.classList.add("hidden");
        mainNavbar.classList.add("top");
      } else {
        topNavbar.classList.remove("hidden");
        mainNavbar.classList.remove("top");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnterMegaMenu = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeaveMegaMenu = () => {
    setShowMegaMenu(false);
  };

  const handleMouseEnterDropdown = () => {
    setShowDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <Navbar className="top-navbar pt-4">
        <Container fluid className="d-flex justify-content-between"></Container>
      </Navbar>

      <Navbar expand="lg" className="main-navbar">
        <Container className="logo">
          <div className="pl-3">
            <Navbar.Brand href="#" className="navbar-brand">
              <img src={minipaLogo} alt="Logo" />
            </Navbar.Brand>
          </div>
        </Container>

        <Container>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto m-3">
              <Nav.Item>
                <Nav.Link href="/" className="text-black">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                onMouseEnter={handleMouseEnterMegaMenu}
                onMouseLeave={handleMouseLeaveMegaMenu}
                className="position-relative"
              >
                <Nav.Link href="#" className="text-black">
                  Products
                </Nav.Link>
                {showMegaMenu && <MegaMenu categories={navData} />}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-black" href="/SobreNos">
                  About Us
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="text-black" href="/Contato">
                  Contact Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NewNav;
