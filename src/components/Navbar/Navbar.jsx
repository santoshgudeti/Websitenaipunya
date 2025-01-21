import { useState } from 'react';
import { Nav, Container, Button } from 'react-bootstrap';

import Login from '../Login/Login';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);


 

  return (
    <>
      <Nav className="custom-nav py-1">
        <Container>
        

          <div className="d-flex gap-2 align-items-center  justify-content-center align-items-center">
          <Nav.Item className="logo d-flex justify-content-center align-items-center bg-white rounded-circle p-2" style={{ width: "50px", height: "50px" }}>
          <img src="/naipunya_logo.png" alt="Logo" style={{ maxWidth: "250%", maxHeight: "250%" }} />
        </Nav.Item>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#capabilities">Capabilities</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Button className="btn">
              Sign In
            </Button>
          </div>
        </Container>
      </Nav>

      <Login show={showLogin} />
    </>
  );
}

export default Navbar;