import { Container, Row, Col } from 'react-bootstrap';

function Features() {
  const products = [
    {
      icon: "🖥️",
      title: "Compute-Optimized AI Models",
      color: "white"
    },
    {
      icon: "🧠",
      title: "Cognitive Computing Core",
      color: "#6366f1"
    },
    {
      icon: "🛡️",
      title: "AI Security Watchdog",
      color: "#00ff9d"
    },
    {
      icon: "🎛️",
      title: "AI Workflow Automator",
      color: "#ff00f7"
    },
    {
      icon:  "🌐",
      title: "Edge AI Solutions",
      color: "#ff00f7"
    },
    {
      icon: "⚙️",
      title: "Custom AI Builder",
      color: "#ff00f7"
    },
    {
      icon: "🔍",
      title: "AI Workflow Automator",
      color: "#ff00f7"
    },
    {
      icon: "🔒",
      title: "Secured AI Vault. ",
      color: "#ff00f7"
    },
  ];

  return (
    <section className="products-section py-5"id="features">
      <Container>
        <h2 className="text-center text-white mb-5" data-aos="fade-up">Innovative AI Solutions for Accelerated Business Growth</h2>
        <Row className="justify-content-center">
          {products.map((product, index) => (
            <Col key={index} xs={6} md={3} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="product-card" style={{'--accent-color': product.color}}>
                <span className="product-icon">{product.icon}</span>
                <h3 className="product-title text-white">{product.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;