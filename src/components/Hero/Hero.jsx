import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <h1 className="display-4 text-white fw-bold mb-4">
            Innovating the Future with Intelligent Solutions Today.
            </h1>
            <p className="lead text-white mb-4">
            Transforming Challenges into Opportunities with AI Brilliance.
            </p>
            <div className="d-flex justify-content-center gap-2">
              <Button className="btn-custom">Try AI Agent</Button>
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