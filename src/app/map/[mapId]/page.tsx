import { resMapList, resTestItems } from '@/api/tempData';

import MapDetailContainer from '@/containers/Map/MapDetail';

export default function MapDetail({ params }: { params: { mapId: string } }) {
  const mapId = Number(params.mapId);
  const mapData = resMapList.find(item => item.id === mapId);

  // TODO Item정보도 서버에서 받아와야 하는데... 여기서 하는게 좋을까? 아니면 Container 컴포넌트에서 하는게 좋을까?
  const itemsData = resTestItems;

  return (
    <MapDetailContainer
      mapData={mapData!}
      itemsData={itemsData}
    />
  );
}