import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsGearFill, BsCodeSlash, BsCpu } from 'react-icons/bs';
import { FaUserCog } from 'react-icons/fa';

function Capabilities() {
  const capabilities = [
    {
      icon: <BsGearFill />,
      title: "Auto Processing",
      description: "Automated data processing and preparation"
    },
    {
      icon: <BsCodeSlash />,
      title: "Fine-Tuning LLMs",
      description: "Customize language models for your needs"
    },
    {
      icon: <BsCpu />,
      title: "Model Training",
      description: "Advanced model training and optimization"
    },
    {
      icon: <FaUserCog />,
      title: "Custom Agents",
      description: "Build specialized AI agents"
    }
  ];

  return (
    <section className="capabilities-section py-5">
      <Container>
        <h2 className="text-center mb-5" data-aos="fade-up">Platform Capabilities</h2>
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