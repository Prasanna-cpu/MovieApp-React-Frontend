import React from 'react';
import {Button} from "react-bootstrap";
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";



const Header = () => {
    return (
        <Navbar bg={"dark"} variant={"dark"} expand={"lg"}>
            <Container fluid>
                <Navbar.Brand href={"/"} style={{"color":'gold'}}>
                    <BiSolidCameraMovie/>
                    MovieApp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink className ="nav-link" to="/">Home</NavLink>
                        <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>
                    </Nav>
                    <Button variant="outline-info" className="me-2">Login</Button>
                    <Button variant="outline-info">Register</Button>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    );
};

export default Header;