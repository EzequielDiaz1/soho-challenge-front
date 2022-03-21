/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import img from './../../assets/joe-straker-t0o5YSQZ_VQ-unsplash.jpg'

const Home = () => {
  return (
    <div>
      <div className="cover-container">

          <img
            className="video"
            src={img}
          />
          <h1>Ezequiel Diaz</h1>
          <p>Full Stack Developer 💻🌎</p>
   
      </div>
    </div>
  );
};

export default Home;
