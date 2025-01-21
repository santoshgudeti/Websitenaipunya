import { Container, Row, Col } from 'react-bootstrap';

function Products() {
  const products = [
    {
      icon: "🤖",
      title: "Chat LLM",
      color: "#646cff"
    },
    {
      icon: "🧠",
      title: "AI Agents",
      color: "#535bf2"
    },
    {
      icon: "📊",
      title: "Structured ML",
      color: "#00ff9d"
    },
    {
      icon: "🎯",
      title: "Vision AI",
      color: "#ff00f7"
    }
  ];

  return (
    <section className="products-section py-5">
      <Container>
        <h2 className="text-center mb-5" data-aos="fade-up">Drive ROI With These Products</h2>
        <Row className="justify-content-center">
          {products.map((product, index) => (
            <Col key={index} xs={6} md={3} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="product-card" style={{'--accent-color': product.color}}>
                <span className="product-icon">{product.icon}</span>
                <h3>{product.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Products;