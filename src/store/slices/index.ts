import { combineReducers } from '@reduxjs/toolkit';
import { carouselSlice } from './carousel/carousel-slice';

export const rootReducer = combineReducers({
  carousel: carouselSlice.reducer,
});
