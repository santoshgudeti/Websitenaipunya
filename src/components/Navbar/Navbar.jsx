import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Login from '../Login/Login';
 // Import Link for smooth scrolling
function CustomNavbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar expand="lg" bg="blue" className="custom-nav sticky-top  py-3">
        <Container>
          {/* Brand/Logo */}
          <Navbar.Brand href="#home" className="d-flex align-items-center text-white">
            <img
              src="/naipunya_logo.png"
              alt="Logo"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <span>Naipunya.AI</span>
          </Navbar.Brand>

          {/* Toggler for Mobile View */}
          <Navbar.Toggle aria-controls="navbar-content bg-white border-white" className="bg-white border-white" />

          {/* Navbar Content */}
          <Navbar.Collapse id="navbar-content gap-2">
            <Nav className="ms-auto">
            <Nav.Link href="/" className="text-white text-decoration-underline">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="text-white">
                Features
              </Nav.Link>
              <Nav.Link href="#capabilities" className="text-white">
                Capabilities
              </Nav.Link>
              <Nav.Link href="#products" className="text-white">
                Products
              </Nav.Link>
              <Nav.Link href="/about" className="text-white">
              About Us
              </Nav.Link>

              <Button
                className="btn btn-light"
                onClick={() => setShowLogin(true)}
              >
                Sign In
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Component */}
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
    </>
  );
}

export default CustomNavbar;
