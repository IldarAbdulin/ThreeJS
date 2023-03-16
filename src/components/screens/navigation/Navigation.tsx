import { useAppDispatch } from '@/hooks/useDispatch';
import { nextSlide, prevSlide } from '@/store/slices/carousel/carousel-slice';
import React from 'react';
import {
  BsFillSignTurnRightFill,
  BsFillSignTurnLeftFill,
} from 'react-icons/bs';

export const Navigation: React.FC = () => {
  const btnStyle = `mr-14 transition-colors duration-500 hover:text-red-pink`;
  const dispatch = useAppDispatch();
  const isNext = () => {
    dispatch(nextSlide());
  };
  const isPrev = () => {
    dispatch(prevSlide());
  };
  return (
    <div className="mt-36 w-1/2 flex items-center justify-center mx-auto">
      <button onClick={isPrev} className={btnStyle}>
        <BsFillSignTurnLeftFill size={40} />
      </button>
      <button onClick={isNext} className={btnStyle}>
        <BsFillSignTurnRightFill size={40} />
      </button>
    </div>
  );
};
