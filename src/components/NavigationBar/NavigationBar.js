import React from "react";
import "./Navigation.scss";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavigationBar({ toggleLight, lightClass, logo, mode }) {
    return (
        <header>
            <Navbar expand="lg">
                <div className="container">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className={`ml-auto ${lightClass}`}
                            defaultActiveKey="/"
                        >
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                            <NavLink className="nav-link" to="/career">
                                Career
                            </NavLink>
                            <NavLink className="nav-link" to="/services">
                                Service
                            </NavLink>
                            <NavLink className="nav-link" to="/blog">
                                Blog
                            </NavLink>
                            <NavLink className="nav-link" to="/events">
                                Events
                            </NavLink>
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                            <div className="animation start-home"></div>
                            <Button onClick={toggleLight} className="toggle-button">
                                <img src={mode} alt="toggle-light" />
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    );
}
