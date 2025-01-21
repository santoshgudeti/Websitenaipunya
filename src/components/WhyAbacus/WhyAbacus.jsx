import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaDatabase, FaCode, FaMicrochip } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';

function WhyAbacus() {
  const features = [
    {
      icon: <FaDatabase />,
      title: "Trusted by Fortune 500 Companies",
      description: "Enterprise-grade solutions trusted by industry leaders"
    },
    {
      icon: <FaCode />,
      title: "Leader in Open-Source AI Research",
      description: "Cutting-edge AI research and development"
    },
    {
      icon: <FaMicrochip />,
      title: "State Of The Art End-to-End AI Platform",
      description: "Complete AI lifecycle management"
    },
    {
      icon: <BsShieldLockFill />,
      title: "Large Scale With Enterprise Class Security",
      description: "Secure and scalable infrastructure"
    }
  ];

  return (
    <section className="why-section py-5">
      <Container>
        <h2 className="text-center mb-5" data-aos="fade-up">Why Naipunya.AI?</h2>
        <Row>
          {features.map((item, index) => (
            <Col key={index} md={6} lg={3} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="feature-card h-100 p-4">
                <div className="icon-container mb-3">
                  {item.icon}
                </div>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhyAbacus;