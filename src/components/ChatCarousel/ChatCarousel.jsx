import { Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ChatCarousel.css';

function ChatCarousel() {
  const chatScreens = [
    {
      id: 1,
      image: "/1.png",
      title: "Naipunya AI",
      description: "Our Company Story"
    },
    {
      id: 2,
      image: "/2.png",
      title: "Our Services",
      description: "Flow Capture"
    },
    {
      id: 3,
      image: "/3.png",
       title: "Our Services",
      description: "Flow Capture"
    },
    {
      id: 4,
      image: "/4.png",
      title: "Our Services",
      description: "Flow Capture"
    },
    {
      id: 5,
      image: "/5.png",
      title: "Our Services",
      description: "Flow Capture"
    },
    {
      id: 6,
      image: "/6.png",
      title: "Our Products",
      description: "Flow Capture"
    },
    {
      id: 7,
      image: "/p1.png",
       title: "Our Services",
      description: "Flow Capture"
    },
    {
      id: 8,
      image: "/p2.png",
      title: "Our Services",
      description: "Smart Supply Chain Optimization & AI-Enhanced Claims Processing"
    },
    {
      id: 9,
      image: "/p3.png",
      title: "Our Services",
      description: "Real-Time Fraud Detection & Custom AI Solutions"
    }
  ];

  const CustomPrevIcon = <FaChevronLeft className="carousel-control-icon" />;
  const CustomNextIcon = <FaChevronRight className="carousel-control-icon" />;

  return (
    <section className="chat-carousel-section py-5">
      <div className="chat-carousel-container">
        <Carousel
          interval={5000}
          prevIcon={CustomPrevIcon}
          nextIcon={CustomNextIcon}
          indicators={true}
          className="custom-carousel"
        >
          {chatScreens.map((screen) => (
            <Carousel.Item key={screen.id}>
              <div className="carousel-content">
                <h3 className="text-center mb-4">{screen.title}</h3>
                <div className="chat-screen-wrapper" data-aos="fade-up">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="chat-screen-image"
                  />
                  <div className="gradient-overlay"></div>
                </div>
                <p className="text-center mt-3">{screen.description}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default ChatCarousel;