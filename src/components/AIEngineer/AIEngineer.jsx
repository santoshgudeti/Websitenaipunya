import { Container, Row, Col } from 'react-bootstrap';
import { FaRobot, FaBrain, FaChartLine } from 'react-icons/fa';

function AIEngineer() {
  return (
    <section className="engineer-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <img src="/ai1.png" alt="AI Engineer" className="img-fluid rounded-5 border border-black border-2" />
          </Col>
          <Col lg={6} data-aos="fade-left">
            <h2 className="mb-4">Our AI Engineer Builds Applied AI Systems And Agents</h2>
            <div className="feature-list">
              <div className="feature-item">
                <FaRobot className="feature-icon" />
                <span>Build AI Agents</span>
              </div>
              <div className="feature-item">
                <FaBrain className="feature-icon" />
                <span>Custom NLP Models</span>
              </div>
              <div className="feature-item">
                <FaChartLine className="feature-icon" />
                <span>Automated Model Training</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AIEngineer;