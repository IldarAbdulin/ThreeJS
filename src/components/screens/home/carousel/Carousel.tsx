import React from 'react';
import { Navigation } from '../../navigation/Navigation';
import { Carousel3DItem } from './Carousel3DItem';
import { useCarousel } from './useCarousel';

export const Carousel: React.FC = () => {
  const { items } = useCarousel();
  return (
    <section className="mt-14">
      <div className="flex items-center justify-between">
        {items.length ? (
          items.map((item) => <Carousel3DItem key={item.id} item={item} />)
        ) : (
          <div>Elements not found :(</div>
        )}
      </div>
      <Navigation />
    </section>
  );
};
