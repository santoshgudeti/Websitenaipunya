import { Container } from "react-bootstrap";
import "./Products.css"; // Import the custom CSS for animations

function Products() {
  return (
    <section className="featured-section py-5" id="products">
      <Container>
        <h2 className="text-center text-white text-decoration-underline mb-2">Our Products</h2>
        <div className="scrolling-container mt-5">
          <div className="scrolling-images">
            <img
              src="/c6.png"
              alt="Award 1"
              className="img-fluid mx-5"
            />
            <img
              src="/c2.png"
              alt="Award 2"
              className="img-fluid mx-5"
            />
            <img
              src="/c3.png"
              alt="Award 3"
              className="img-fluid mx-5"
            />
            <img
              src="/c4.png"
              alt="Award 4"
              className="img-fluid mx-5"
            />
            <img
              src="/c5.jpg"
              alt="Award 5"
              className="img-fluid mx-5"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Products;
