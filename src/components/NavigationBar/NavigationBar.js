import React from "react";
import "./Navigation.scss";
import { Button, Nav, Navbar } from "react-bootstrap";

export default function NavigationBar({ toggleLight, lightClass, logo, mode }) {
    return (
        <Navbar expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`ml-auto ${lightClass}`}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Service</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Button onClick={toggleLight}>
                            <img src={mode} alt="toggle-light" />
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
