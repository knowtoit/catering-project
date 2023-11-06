import React, { useState } from "react";
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="imgLogo">
        <img
          src="../../../src/assets/images/logo/RoyalPlateLogo.png"
          alt="Logo"
          style={{
            display: "flex",
            justifyContent: "center",
            height: "72px",
            marginLeft: "45%"
          }}
        ></img>
      </div>
      <Navbar color="black" expand="md" className="custom-navbar">
        <img
          className="logoClass"
          src="../../../src/assets/images/logo/RoyalPlateLogo.png"
          alt="logo"
          style={{ marginRight: "28%",maxHeight:"70px" }}
        ></img>
        <Container fluid={true}>
          <NavbarToggler
            style={{ background: "white", fontSize: "19px" }}
            onClick={toggle}
            className="mr-2"
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="ml-auto"
              navbar
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                marginTop: "2%",
                marginBottom: "2%"
              }}
            >
              <NavItem className="NavItemClass">
                <NavLink href="#" className="NavItemClassLink">
                  HOME
                </NavLink>
              </NavItem>

              <NavItem className="NavItemClass">
                <NavLink href="#" className="NavItemClassLink">
                  ABOUT
                </NavLink>
              </NavItem>
              <NavItem className="NavItemClass">
                <NavLink href="#" className="NavItemClassLink">
                  MENU
                </NavLink>
              </NavItem>
              <NavItem className="NavItemClass">
                <NavLink href="#" className="NavItemClassLink">
                  RESERVATIONS
                </NavLink>
              </NavItem>
              <NavItem className="NavItemClass">
                <NavLink href="#" className="NavItemClassLink">
                  CATERING
                </NavLink>
              </NavItem>
              <NavItem className="NavItemClass">
                <NavLink href="#" className="NavItemClassLink">
                  GALLERY
                </NavLink>
              </NavItem>

              <NavItem className="NavItemClass">
                <NavLink href="#" className="NavItemClassLink">
                  BLOG
                </NavLink>
              </NavItem>
              <NavItem className="NavItemClass">
                <NavLink href="#" className="NavItemClassLink">
                  CONTACT
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
