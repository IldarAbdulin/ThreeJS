import React from 'react';
import { Carousel } from './carousel/Carousel';
import { useCarousel } from './carousel/useCarousel';

export const Home: React.FC = () => {
  const { items } = useCarousel();
  return (
    <div className="m-16">
      <h1 className="text-7xl text-center font-medium">Three JS</h1>
      <Carousel />
    </div>
  );
};
