import React from 'react';
import { ICarouselItem } from '@/store/slices/carousel/carousel.interface';
import { useCarousel } from './useCarousel';
import { Box } from '../3D/Box';
import cn from 'clsx';
import { ThreeProvider } from '../3D/ThreeProvider';

export const Carousel3DItem: React.FC<{ item: ICarouselItem }> = ({ item }) => {
  const { currentId } = useCarousel();
  const isAcive = currentId === item.id;

  return (
    <div
      className={cn(
        isAcive ? 'w-2/6 duration-100 h-[300px]' : 'w-2/6 h-[200px]'
      )}
    >
      <ThreeProvider>
        <Box position={[0, 0, 0]} item={item} />
      </ThreeProvider>
      <div
        className={cn(
          'mx-auto mt-16 bg-red-aqua h-2 rounded transition-all duration-500 ease-in-out',
          isAcive ? 'w-1/2' : 'w-0'
        )}
      />
    </div>
  );
};
