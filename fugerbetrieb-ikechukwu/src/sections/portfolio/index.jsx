import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const portfolioData = [
  {
    category: "Residential Projects",
    images: [
      "/images/image 1.jpg",
      "/images/image 2.jpg",
      "/images/image 3.jpg",
    ],
  },
  {
    category: "Commercial Projects",
    images: [
      "/images/image 1.jpg",
      "/images/image 2.jpg",
      "/images/image 3.jpg",
    ],
  },
  {
    category: "Infrastructure & Roads",
    images: [
      "/images/image 1.jpg",
      "/images/image 2.jpg",
      "/images/image 3.jpg",
    ],
  },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2>Our Projects</h2>

        {portfolioData.map((category, index) => (
          <div className="category-block" key={index}>
            <h3>{category.category}</h3>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {category.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="project-card">
                    <img src={img} alt={`${category.category} ${i + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
