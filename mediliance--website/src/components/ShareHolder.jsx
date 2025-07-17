import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Shareholders = () => {
  const data = [
    {
      img: "/src/assets/img/shareholder1.jpg",
      name: "Tan Sri Dato’ Lim",
      role: "Founder & Chairman",
    },
    {
      img: "/src/assets/img/shareholder2.jpg",
      name: "Dato’ Serena Lim",
      role: "Executive Director",
    },
    {
      img: "/src/assets/img/shareholder3.jpg",
      name: "Mr. Julian Lee",
      role: "Chief Financial Officer",
    },
    {
      img: "/src/assets/img/shareholder4.jpg",
      name: "Ms. Camila Ng",
      role: "Investor Relations",
    },
    {
      img: "/src/assets/img/shareholder5.jpg",
      name: "Mr. Victor Tan",
      role: "Legal Advisor",
    },
    {
      img: "/src/assets/img/shareholder6.jpg",
      name: "Ms. Olivia Cheng",
      role: "Senior Partner",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="shareholders-container">
      <div className="shareholders-header">
        <div>
          <h1>Our Shareholders</h1>
          <p>Meet the strategic minds behind Mediliance's success and long-term vision.</p>
        </div>
        <div className="slider-controls">
          <button onClick={() => slider.current.slickPrev()}><FaArrowLeft size={25} /></button>
          <button onClick={() => slider.current.slickNext()}><FaArrowRight size={25} /></button>
        </div>
      </div>
      <div className="shareholders-slider">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div className="shareholder-card" key={index}>
              <img src={e.img} alt={e.name} className="shareholder-image" />
              <div className="shareholder-info">
                <h1>{e.name}</h1>
                <h3>{e.role}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shareholders;