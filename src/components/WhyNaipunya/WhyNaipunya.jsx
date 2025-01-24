import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaDatabase, FaCode, FaMicrochip } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';

function WhyAbacus() {
  const features = [
    {
      icon: <FaCode />,
      title: "Seamless System Integration",
      description: "Integrating AI effortlessly into your existing workflows for instant impact"
    },
    {
      icon: <FaDatabase />,
      title: "Industry-Specific Insights",
      description: "Crafting AI systems tailored to the unique demands of your sector"
    },
    {
      icon: <FaMicrochip />,
      title: "Agentic AI Excellence",
      description: "Building autonomous solutions that adapt, learn, and deliver unmatched precision"
    },
    {
      icon: <BsShieldLockFill />,
      title: "Reliable and Secure AI",
      description: "Ensuring every solution is built on a foundation of trust, security, and reliability"
    }
  ];

  return (
    <section className="why-section py-5">
      <Container>
        <h2 className="text-center text-white mb-5" data-aos="fade-up">Why Naipunya.AI?</h2>
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