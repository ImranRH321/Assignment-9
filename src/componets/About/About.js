import React from "react";

const About = () => {
  const logo = "https://htmldemo.net/autima/autima/assets/img/about/about1.jpg";
  const logo1 =
    "https://www-cdn.bigcommerce.com/assets/bonbonbon-promote-online-store.jpg";
  const logo2 =
    "https://shanebarker.com/wp-content/uploads/2019/05/L%E2%80%99Occitane-instagram-Ways-to-Promote-a-Product.png";
  return (
    <div className="container mt-5">
      <div className="card bg-dark text-white">
        <img src={logo2} className="card-img" alt="..." />
      </div>
      <div className="card bg-dark text-white">
        <img src={logo1} className="card-img" alt="..." />
      </div>
      <div className="card bg-dark text-white">
        <img src={logo} className="card-img" alt="..." />
      </div>
    </div>
  );
};

export default About;
