import resMapList from '@/tempDb/map';

import MapContainer from '@/containers/Map';

export default function Map() {
  return (
    <MapContainer
      mapList={resMapList}
    />
  );
}