import { Container } from 'react-bootstrap';

function Featured() {
  return (
    <section className="featured-section py-5">
      <Container>
        <h2 className="text-center mb-5">Featured On</h2>
        <div className="featured-logos">
          <img src="/yahoo.svg" alt="Yahoo" />
          <img src="/nbc.svg" alt="NBC" />
          <img src="/techcrunch.svg" alt="TechCrunch" />
          <img src="/venturebeat.svg" alt="VentureBeat" />
        </div>
        <div className="awards mt-5">
          <img src="/award1.svg" alt="Award 1" />
          <img src="/award2.svg" alt="Award 2" />
          <img src="/award3.svg" alt="Award 3" />
          <img src="/award4.svg" alt="Award 4" />
        </div>
      </Container>
    </section>
  );
}

export default Featured;