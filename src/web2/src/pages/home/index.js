import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import MenuBar from '../../components/menubar';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import im1 from './im1.jpg';
import im2 from './im2.jpg';
import im3 from './im3.jpg';
import './styles'; // Importe seu arquivo styles.js
import styled from 'styled-components';


function Home() {
  const imageStyle = {
    maxWidth: '350px',
    maxHeight: '350px',
  };

  return (
    <div>
      <Header />
      <MenuBar />

      <div className="carousel-container">
        <Carousel interval={3000} className="custom-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={im1}
              alt="Primeiro slide"
              style={imageStyle}
            />
            <Carousel.Caption>
              <h3>I1</h3>
              <p>D1.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={im2}
              alt="Segundo slide"
              style={imageStyle}
            />
            <Carousel.Caption>
              <h3>I2</h3>
              <p>D2.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={im3}
              alt="Terceiro slide"
              style={imageStyle}
            />
            <Carousel.Caption>
              <h3>I3</h3>
              <p>D3.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
