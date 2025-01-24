import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsGearFill, BsCodeSlash, BsCpu } from 'react-icons/bs';
import { FaUserCog } from 'react-icons/fa';

function Capabilities() {
  const capabilities = [
    {
      icon: <BsCpu />,
      title: "Adaptive Learning Frameworks",
      description: "Implement systems that continuously learn and evolve to stay ahead of challenges."
    },
    {
      icon: <FaUserCog />,
      title: "Visionary Insights Platform",
      description: "Unlock actionable foresight with AI-powered predictive and prescriptive analytics."
    },
    {
      icon: <BsGearFill />,
      title: "AI-Powered Personalization",
      description: "Deliver hyper-personalized experiences that resonate with every user interaction"
    },
    {
      icon: <BsCodeSlash />,
      title: "Real-Time Decision Intelligence",
      description: "Leverage AI-powered insights to make smarter, faster, and data-driven decisions."
    }
  ];

  return (
    <section className="capabilities-section py-5"id="capabilities">
      <Container>
        <h2 className="text-center text-white mb-5" data-aos="fade-up">Platform Capabilities</h2>
        <Row>
          {capabilities.map((capability, index) => (
            <Col key={index} md={6} lg={3} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="feature-card h-100 p-4">
                <div className="icon-container mb-3">
                  {capability.icon}
                </div>
                <Card.Title>{capability.title}</Card.Title>
                <Card.Text>{capability.description}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Capabilities;