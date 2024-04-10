'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box } from '@mui/material';

import MapTestImage from '@/assets/images/map-test-img.jpg';
import MapTest1 from '@/assets/images/map-test1.jpg';
import MapTest2 from '@/assets/images/map-test2.jpg';
import MapTest3 from '@/assets/images/map-test3.jpg';

export default function Map() {
  return (
    <Box
      sx={{
        padding: '120px 280px',
        background: '#ddd'
      }}
    >
      <Box>Map Test1</Box>
      <MapAreaTest
        mapImageSrc={MapTest1}
      />

      <Box>Map Test2</Box>
      <MapAreaTest
        mapImageSrc={MapTest2}
      />

      <Box>Map Test3</Box>
      <MapAreaTest
        mapImageSrc={MapTest3}
      />

      <Box
        sx={{
          marginTop: '20px'
        }}
      >
        고민해야 하는 이슈
        <div>
          지도 마다 크기가 다르다 - map 영역은 가능한 크게 보게 하는게 좋고 고정된 크기를 가질텐데 빈 영역을 어떻게 처리할까
        </div>
        <div>
          동일한 지도를 사용하는 경우가 있다 - 에인세르강 / 에인세르강 본류
        </div>
        <div>
          글씨나 요소 이미지를 굉장히 작게 보여줘야 할거같다
        </div>
        <div>
          축소, 확대, 이동 기능을 어떻게 구현할 것인가? - PC, MO 구분 해야한다
        </div>
        <div>
          지도 자료를 어떻게 구할까?
        </div>
        <div>
          지도 이미지가 클텐데 로딩 부담을 줄이는 방법 찾기
        </div>
      </Box>
    </Box>
  );
}

function MapAreaTest (
  props: {
    mapImageSrc: StaticImageData;
  }
) {
  // 이미지 크기에 따라 maxScale 정하기

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '400px',
          border: '2px solid red',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              src={props.mapImageSrc}
              alt='test-map'
              // priority={true}
              draggable={false}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: '8px',
          marginBottom: '16px'
        }}
      >
        맵 정보 - 좌표 등등
      </Box>
    </>
  );
}