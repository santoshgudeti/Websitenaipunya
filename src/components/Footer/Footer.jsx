import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer py-5">
      <Container>
        <Row>
          <Col md={3}>
            <img src="/naipunya_logo.png" alt="Logo"  className="logo d-flex justify-content-center align-items-center bg-white rounded-circle p-2" style={{ width: "50px", height: "50px" }} />
            
     
        
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </Col>
          <Col md={3}>
            <h5>Products</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">Chat LLM</Nav.Link>
              <Nav.Link href="#">AI Agents</Nav.Link>
              <Nav.Link href="#">Structured ML</Nav.Link>
              <Nav.Link href="#">Vision AI</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Resources</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">Documentation</Nav.Link>
              <Nav.Link href="#">API Reference</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Community</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Company</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Careers</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link href="#">Legal</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;