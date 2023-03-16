import { useTypedSelector } from '@/hooks/useTypedSelector';

export const useCarousel = () => useTypedSelector(({ carousel }) => carousel);
