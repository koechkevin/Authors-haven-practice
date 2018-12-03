import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import background from '../assets/img/background.jpg';
import '../assets/styles/EmptyHomePageComponent.scss';

const content = [
  {
    title: 'Welcome to Authors Haven',
    description: 'Sign up and start engaging with some of the brightest minds on the planet',
    image: background,
  },
];

const EmptyArticlesComponent = () => (
  <Slider autoplay duration={2000} className="slider-wrapper empty-slider">
    {content.map(item => (
      <div
        key={item.title}
        className="slider-content"
        style={{ background: `url(${item.image}) no-repeat center center` }}
      >
        <div className="inner">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </Slider>
);

export default EmptyArticlesComponent;
