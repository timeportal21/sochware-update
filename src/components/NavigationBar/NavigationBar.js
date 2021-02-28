import React from "react";
import "./Navigation.scss";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            to="/home"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            to="/services"
                        >
                            Service
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/blog"
                            activeClassName="active"
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/events"
                            activeClassName="active"
                        >
                            Events
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/contact"
                            activeClassName="active"
                        >
                            Contact
                        </NavLink>
                        <div className="animation start-home"></div>
                        <Button onClick={toggleLight}>
                            <img src={mode} alt="toggle-light" />
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
