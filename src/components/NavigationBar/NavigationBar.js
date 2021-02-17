import React, { useContext } from "react";
import "./Navigation.scss";
import logo from "../../images/logo.svg";
import sun from "../../images/Sun.svg";
import { Button, Nav, Navbar } from "react-bootstrap";
import { LightContext } from "../../context/LightToggleContext";

export default function NavigationBar() {
    const { isDark, dark, light, toggleLight } = useContext(LightContext);

    const { bg } = isDark ? dark : light;

    return (
        <Navbar bg={bg} expand="lg">
            <Navbar.Brand href="#home">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#service">Service</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#events">Events</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Button onClick={toggleLight}>
                        <img src={sun} alt="toggle-light" />
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
