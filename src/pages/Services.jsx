import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    { title: "Web Development",img: "/images/web.jpeg"},
    { title: "App Development",img: "/images/app.jpeg"},
    { title: "Graphic Design",img: "/images/graphic.jpeg"},
    { title: "Domain & Hosting",img: "/images/domain.png"},
    { title: "Web Designing",img: "/images/web design.jpeg"},
    { title: "MERN Stack",img: "/images/mern.png"},
    { title: "UI & UX",img: "/images/ui ux.png"},
    { title: "Website Maintanance",img: "/images/webbb.jpg"},
  ];
  return (
    <div className="services">
      <div className="heroo-banner">
        <div className="heroo-content">
          <h1>Our services</h1>
          <p>Upgrade Your Skills with Cutting-Edge IT Development.Take Your Knowledge to the Next Level..</p>
        </div>
      </div>
    <div className="services-page">
      <h1>SERVICES</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <div className="arrow">↗</div>
            <div className="service-img">
              <img src={service.img} alt={service.title} />
          </div>
          </div>
        ))}
      </div>
      </div>
      </div>
  );
}
