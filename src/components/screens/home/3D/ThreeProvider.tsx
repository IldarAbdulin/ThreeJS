import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

export const ThreeProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <Canvas camera={{ far: 130, position: [1, 0, 0] }} shadows="soft">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};
