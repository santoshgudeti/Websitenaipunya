import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

function Footer() {
  return (
    <footer className="footer py-5 bg-dark text-white">
      <Container>
        <Row className="gy-4">
          {/* Social Links */}
          <Col xs={12} md={6} lg={3} className="text-center mb-5 text-md-start">
            <img src="/naipunya_logo.png" alt="Naipunya.AI" height="50" className="m-3 mb-3" />
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://www.linkedin.com/company/naipunya-ai/?originalSubdomain=in" className="text-white fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://maps.app.goo.gl/D6qH9zGnRqHGEPnw6" className="text-white fs-4">
                <i className="bi bi-geo-alt"></i>
              </a>
              <a href="tel:+919346575094" className="text-white fs-4">
                <i className="bi bi-telephone"></i>
              </a>
            </div>
          </Col>

          {/* Products */}
          <Col xs={12} md={6} lg={3} className="text-center mb-5 text-md-start">
          <h5 className="text-white d-inline-block pb-1 position-relative"
                style={{ borderBottom: "3px solid rgb(255, 255, 255)" }} >
                Products
              </h5>
            <Nav className="flex-column mt-3">
              <Nav.Link href="#" className="text-white">
                INTELLIGENTIC AI
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                SKILL MATRIX AI
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                FLOW CAPTURE
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                ENSURER.AI
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                DOC EXTRACT
              </Nav.Link>
            </Nav>
          </Col>

          {/* Resources */}
          <Col xs={12} md={6} lg={3} className="text-center mb-5 text-md-start">
          <h5 className="text-white d-inline-block pb-1 position-relative"
                style={{ borderBottom: "3px solid rgb(255, 255, 255)" }} >Resources</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white">
                Documentation
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                API Reference
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Blog
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Community
              </Nav.Link>
            </Nav>
          </Col>

          {/* Company */}
          <Col xs={12} md={6} lg={3} className="text-center mb-5 text-md-start">
          <h5 className="text-white d-inline-block pb-1 position-relative"
                style={{ borderBottom: "3px solid rgb(255, 255, 255)" }} >Company</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/about" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Careers
              </Nav.Link>
              <Nav.Link href="tel:+919346575094" className="text-white">
                Contact
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Legal
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
