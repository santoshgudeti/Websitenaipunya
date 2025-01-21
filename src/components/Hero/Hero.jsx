import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4">
              An AI Super Assistant For Enterprises And Professionals
            </h1>
            <p className="lead mb-4">
              Transform your business with state-of-the-art AI solutions designed for enterprise scale.
            </p>
            <div className="d-flex gap-3">
              <Button className="btn-custom">Request Demo</Button>
              <Button variant="outline-light">Try Enterprise</Button>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="hero-image-container ">
              <img src="/bg.png" alt="AI Platform" className="img-fluid rounded-pill border border-white border-2" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;