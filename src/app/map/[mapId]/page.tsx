import resMapList from '@/api/tempData/mapList';
import resMapItems from '@/api/tempData/mapItem';

import MapDetailContainer from '@/containers/Map/MapDetail';

export default function MapDetail({ params }: { params: { mapId: string } }) {
  const mapId = Number(params.mapId);
  const mapData = resMapList.find(item => item.id === mapId);
  const itemsData = resMapItems[mapId];

  return (
    <MapDetailContainer
      mapData={mapData!}
      itemsData={itemsData}
    />
  );
}