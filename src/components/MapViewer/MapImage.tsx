import Image, { StaticImageData } from 'next/image';

export default function MapImage(
  props: {
    imageUrl: StaticImageData;
  }
) {
  return (
    <Image
      src={props.imageUrl}
      alt='map-image'
      draggable={false}
      priority={true}
      // quality={100}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        // transformOrigin: '0 0',
        // transform: `scale(${props.imageSize.scale})`,
      }}
    />
  );
}