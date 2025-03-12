import React from 'react'
import { Carousel } from "react-responsive-carousel";
import {img} from './img/data.js';
import Classes from './carousel.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';

function CarouselEffect() {
  return (
    <>
      <div className={Classes.Carousel_container}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showArrows={true}
          interval={2000}
        >
          {img.map((ImageItem, i) => {
            return (
              <div key={i}>
                <img src={ImageItem} />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className={Classes.hero_img}></div>
    </>
  );
}

export default CarouselEffect;
