import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-banner">
        <div className="about-banner-content">
          <h1>About Lepto Tech Developers</h1>
          <h3>Building the Future of Technology</h3>
        </div>
      </div>
      <div className="about-card">
        <div className="about-card-text">
          <h2>WHO WE ARE</h2>
          <p>
  <b>Lepto Tech Developers</b> is a forward-thinking IT solutions company dedicated to 
  delivering innovative and scalable technology solutions. Our team consists of highly 
  skilled professionals specializing in web development, app development, graphic design, 
  and IT consulting. We combine creativity, technical expertise, and a user-centric approach 
  to help individuals, startups, and enterprises establish a strong digital identity.
</p>
<p>
  We believe in continuous learning, adapting to the latest trends, and implementing 
  cutting-edge tools to provide top-notch digital solutions. Whether it's building 
  responsive websites, creating engaging mobile applications, or designing professional 
  branding materials, we aim to transform ideas into reality.
</p>

        </div>
        <div className="about-card-image">
          <img src="/images/who.png" alt="Who We Are" />
        </div>
      </div>
      <div className="about-card reverse">
        <div className="about-card-text">
          <h2>OUR MISSION</h2>
          <p>
  Our mission is to create user-friendly, high-performing, and secure digital products 
  that not only meet industry standards but also exceed client expectations. 
  We are committed to empowering businesses and individuals with IT solutions 
  that enhance productivity and drive growth.
</p>
<p>
  By combining advanced technologies with strategic planning, we aim to deliver 
  innovative websites, apps, and designs that provide value, improve user experience, 
  and establish a strong online presence in the competitive digital world.
</p>

        </div>
        <div className="about-card-image">
          <img src="/images/mission.png" alt="Our Mission" />
        </div>
      </div>
      <div className="about-card">
        <div className="about-card-text">
          <h2>OUR VISION & VALUES</h2>
          <p>
  We envision a future where technology is accessible to everyone, helping individuals 
  and organizations grow with efficiency and innovation. Our vision is to become 
  a trusted global IT partner known for creativity, reliability, and excellence.
</p>
<p>
  Our core values include:
</p>
<ul>
  <li>Innovation and Creativity</li>
  <li>Commitment to Quality</li>
  <li>Transparency and Trust</li>
  <li>Timely Delivery and Client Satisfaction</li>
  <li>Continuous Improvement and Learning</li>
</ul>
        </div>
        <div className="about-card-image">
          <img src="/images/vision.jpeg" alt="Our Vision & Values" />
        </div>
      </div>
    </div>
  );
}
