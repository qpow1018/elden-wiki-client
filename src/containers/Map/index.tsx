import { Box } from '@mui/material';
import './index.css';

export default function Map() {
  return (
    <div className='test-container'>



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
    </div>
  );
}