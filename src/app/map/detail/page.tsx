import { Suspense } from 'react';
import MapDetailContainer from '@/containers/Map/MapDetail';

export default function MapDetail() {
  return (
    <Suspense>
      <MapDetailContainer />
    </Suspense>
  );
}