import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Mr. Chinedu Okafor",
        role: "Residential Client, Owerri",
        quote:
            "Fugerbetrieb Ikechuckwu delivered our home ahead of schedule and with outstanding quality. Their team is truly professional.",
        avatar: "/images/client1.jpg",
    },
    {
        name: "Engr. Ada Uche",
        role: "Site Supervisor, Enugu Mall Project",
        quote:
            "Working with Fugerbetrieb Ikechuckwu was seamless. From planning to execution, they handled everything with precision.",
        avatar: "/images/client2.jpg",
    },
    {
        name: "Chief O. Eze",
        role: "Road Project Client, Ebonyi",
        quote:
            "Their attention to detail and timely delivery is unmatched. I’ll gladly work with them again.",
        avatar: "/images/client3.jpg",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <h2>What Our Clients Say</h2>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card">
                                <p className="quote">“{t.quote}”</p>
                                <h4>{t.name}</h4>
                                <span>{t.role}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialsSection;
