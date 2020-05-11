import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    // state for top level stuff of the website
    this.state = {
      title: "Aahad Patel",
      headerlinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Software Engineer",
        subTitle: "Projects",
        text: "Checkout my projects!",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's chat!",
      },
    };
  }
  render() {
    return (
      <Router>
        {/* full width with padding = 0 */}
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Aahad Patel</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
