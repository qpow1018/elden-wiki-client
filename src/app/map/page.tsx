import resMapList from '@/api/tempData/mapList';

import MapContainer from '@/containers/Map';

export default function Map() {
  return (
    <MapContainer
      mapList={resMapList}
    />
  );
}