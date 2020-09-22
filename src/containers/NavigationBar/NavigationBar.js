import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Cart from "../../components/statefull/Cart/Cart";
import { AuthContext } from "../../contexts/auth-context";

import brandLogo from "../../assets/brand-logo.png";

import "./navigationBar.css";

function NavigationBar() {
    const authContext = useContext(AuthContext);

    const login = () => {
        authContext.loginUser();
    }

    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">
                    <img
                        src={brandLogo}
                        width="60"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Naru Sushi Brand Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Main" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#beverages">Beverages</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Lunch" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Link href="#"><Cart /></Nav.Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;