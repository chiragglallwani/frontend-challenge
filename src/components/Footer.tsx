import { navLinks } from "@/utilities/constants";
import React from "react";
import { Container, Nav } from "react-bootstrap";
import { style, media } from "typestyle";

/** CSS Styling */
const footer = style(media({ maxWidth: 549 }, { height: "auto" }), {
  height: "200px",
  paddingInline: "32px",
  paddingBlock: "32px",
});

const nav = style(media({ minWidth: 550 }, { flexDirection: "row" }), {
  flexDirection: "column",
});

const linkCss = style({
  margin: "0 12px 0 12px",
  fontSize: "1rem",
});

export default function Footer() {
  return (
    <footer
      className={`${footer} bg-success text-white d-flex align-items-center`}
    >
      <Nav className={`me-auto align-middle ${nav}`}>
        {navLinks.map((item, index) => (
          <Nav.Link
            className={`${linkCss} text-white`}
            eventKey={index + 1}
            target="_blank"
            href={item.link}
            key={index}
          >
            {item.name}
          </Nav.Link>
        ))}
      </Nav>
    </footer>
  );
}
