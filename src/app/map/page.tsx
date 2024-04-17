import { resMapList } from '@/api/tempData';

import MapContainer from '@/containers/Map';

export default function Map() {
  return (
    <MapContainer
      mapList={resMapList}
    />
  );
}