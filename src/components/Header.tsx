"use client";

import { useState, useEffect } from "react";
import { style, media } from "typestyle";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navLinks } from "@/utilities/constants";

/** CSS Styling */
const customNavCss = style(
  media({ minWidth: 550 }, { paddingInline: "32px", border: "none" }),
  {
    height: "70px",
  }
);
//backgroundColor: "#027148",);

const linkCss = style({
  margin: "0 12px 0 12px",
  color: "white",
  fontSize: "1em",
});

const mobileNav = style(
  media(
    { maxWidth: 549 },
    {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    }
  )
  /*{
    $nest: {
      "&::after": { display: "block", clear: "both" },
    },
  }*/
);

const customToggleCss = style({
  border: "none",
  color: "white",
  $nest: {
    "&:focus": { outline: "none", boxShadow: "none" },
    "&:active": { outline: "none", boxShadow: "none" },
  },
});

const customNavCollapse = style(
  media(
    { maxWidth: 549 },
    {
      height: "100vh",
      paddingInline: "20px",
    }
  )
);

const customBrandCss = style(
  { color: "white" },
  media({ maxWidth: 549 }, { paddingInline: "20px" })
);

const Header = () => {
  /** State Initialization */
  const isMobile = typeof window !== "undefined" && window.innerWidth < 550;
  const [active, setActive] = useState<boolean>(false);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(isMobile);

  //Window Event Listener Handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 550) setIsMobileScreen(true);
      else setIsMobileScreen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  //Handling BodyScroll Lock
  useEffect(() => {
    if (active && isMobileScreen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [active, isMobileScreen]);

  return (
    <Navbar
      collapseOnSelect
      expand="xs"
      variant="dark"
      className={`bg-success ${customNavCss} shadow-lg fixed-top text-white`}
    >
      <Container fluid="xs" className="bg-success flex-xs-nowrap">
        <div className={mobileNav}>
          <Navbar.Brand className={customBrandCss} href="/">
            Luxubar Demo
          </Navbar.Brand>
          <Navbar.Toggle
            className={`fs-3 ${customToggleCss}`}
            onClick={() => setActive(!active)}
            aria-controls="responsive-navbar-nav"
          >
            {active ? "X" : ""}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse
          className={customNavCollapse}
          id="responsive-navbar-nav"
        >
          <Nav className="ms-auto">
            {navLinks.map((item, index) => (
              <Nav.Link
                className={linkCss}
                eventKey={index + 1}
                target={item.target}
                href={item.link}
                onClick={() => setActive(!active)}
                key={index}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
