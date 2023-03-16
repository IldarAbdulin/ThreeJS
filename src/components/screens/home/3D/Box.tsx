import React from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame, ThreeElements } from '@react-three/fiber';
import { ICarouselItem } from '@/store/slices/carousel/carousel.interface';
import { useAppDispatch } from '@/hooks/useDispatch';
import { changeCurrentId } from '@/store/slices/carousel/carousel-slice';

type TypeBox = {
  item: ICarouselItem;
} & ThreeElements['mesh'];

export const Box: React.FC<TypeBox> = ({ item, ...rest }) => {
  const dispatch = useAppDispatch();
  const ref = React.useRef<THREE.Mesh>(null!);
  const image = useTexture(item.image);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 2.5;
    }
  });
  const changeCurrentIdFn = () => {
    dispatch(changeCurrentId(item.id));
  };
  return (
    <mesh {...rest} ref={ref} onClick={changeCurrentIdFn}>
      <boxBufferGeometry args={[2, 1, 2]} />
      <meshBasicMaterial key={image.id} map={image} side={THREE.DoubleSide} />
    </mesh>
  );
};
