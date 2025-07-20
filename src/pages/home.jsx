import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
  };

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Express",
    "Node.js", "Vite", "Java", "Kotlin", "Python",
    "Figma", "Adobe XD", "Adobe Illustrator",
  ];
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  const [ctaVisible, setCtaVisible] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAboutVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCtaVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to Lepto Tech Developers</h1>
          <p>Innovating the future of technology with cutting-edge solutions.</p>
          <button className="hero-btn" onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
      <div className="features">
        <h2><center>Features</center></h2>
        <div className="features-grid">
          <div className="feature-card">
            <h4>Web Designing</h4>
            <p>Responsive layouts, wireframing, and prototyping.</p>
          </div>
          <div className="feature-card">
            <h4>Web Development</h4>
            <p>SEO-friendly, e-commerce, and fast web solutions.</p>
          </div>
          <div className="feature-card">
            <h4>App Development</h4>
            <p>Android & iOS app development with API integration.</p>
          </div>
          <div className="feature-card">
            <h4>MERN Stack</h4>
            <p>MongoDB, Express.js, React.js, and Node.js solutions.</p>
          </div>
          <div className="feature-card">
            <h4>Graphic Designing</h4>
            <p>Branding, UI/UX wireframing, and marketing creatives.</p>
          </div>
          <div className="feature-card">
            <h4>Domain & Hosting</h4>
            <p>Fast hosting, SSL, and domain management.</p>
          </div>
        </div>
        <div className="skills-section">
          <h2 className="skills-title">
            Here are Numerous Topics That <br /> Will Enhance Your Skills
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-preview" ref={aboutRef}>
        <div className={`about-left ${aboutVisible ? "slide-left" : ""}`}>
          <img src="/images/logo.png" alt="About Us" />
        </div>
        <div className={`about-right ${aboutVisible ? "slide-right" : ""}`}>
          <h2>About Us</h2>
          <p>
            At <b>Lepto Tech Developers</b>, we specialize in delivering modern web and app solutions.
            Our focus is on innovation, scalability, and helping individuals grow their tech skills.
          </p>
          <button className="about-btn" onClick={() => navigate("/about")}>Read More</button>
        </div>
      </div>
      <div className={`cta-section ${ctaVisible ? "slide-up" : ""}`} ref={ctaRef}>
        <h2>Ready to Grow Your Skills with Us?</h2>
        <p>Contact us today and start your journey to becoming an expert in tech!</p>
        <button className="cta-btn" onClick={() => navigate("/contact")}>Contact Today!</button>
      </div>
    </div>
  );
}
