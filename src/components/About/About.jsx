import { Container } from 'react-bootstrap';
import './About.css'; // Assuming a separate CSS file for custom styles

function About() {
  return (
    <section className="about-us-section bg-light" style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <Container className="d-flex flex-column justify-content-center align-items-center text-center">
        <h2 className="about-us-title text-primary text-decoration-underline text-black mb-4">About Us</h2>
        <p className="about-us-lead text-muted  fs-5 mb-5">
          Naipunya.Ai, a specialized AI and ML business unit under CognitBotz Solutions, is committed to transforming industries with intelligent, data-driven solutions. Our name, Naipunya, meaning ‘proficiency’ in Sanskrit, reflects our dedication to delivering precise, innovative AI solutions that drive real-world impact across sectors like automotive, healthcare, insurance, manufacturing, and supply chain.
        </p>
        <p className="about-us-text text-muted fs-5 mb-5">
          With over five decades of deep expertise in AI and ML, we help businesses navigate complex challenges, streamline operations, and unlock new growth opportunities. Our team of AI experts combines cutting-edge technology with a profound understanding of industry dynamics to deliver tailored solutions that improve efficiency, accuracy, and decision-making.
        </p>
        <p className="about-us-text fs-5 text-muted">
          At Naipunya.Ai, we’re not just about deploying technology; we’re about harnessing its full potential to create smarter, more agile businesses that are ready for the future. From predictive maintenance to real-time fraud detection, we’re redefining what’s possible with AI, ensuring our clients stay ahead in a rapidly evolving world.
        </p>
        <div className="about-us-cta mt-4">
        <a
  href="https://www.linkedin.com/company/naipunya-ai/?originalSubdomain=in"
  className="btn btn-primary btn-lg shadow-lg"
  target="_blank"
  rel="noopener noreferrer"
>
  Join Us in Shaping the Future
</a>

        </div>
      </Container>
    </section>
  );
}

export default About;
