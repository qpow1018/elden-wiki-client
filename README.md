## 프로젝트 소개
게임 [엘든링](https://namu.wiki/w/%EC%97%98%EB%93%A0%20%EB%A7%81)의 아이템 DB, 지도 정보, 진행 체크리스트 등
게임 플레이 시 유용한 기능 제공


## 왜 만드는가?
가장 큰 이유는 취업 포트폴리오와 개발 연습용 프로젝트다.   
이왕 진행하는거 의미있게 진행하는게 도움이 될것이다.

의미있게 프로젝트를 진행하려면 실제 사용하는 유저를 생각해야 한다고 생각한다.   
과거 작은 토이 프로젝트를 몇 번 진행 했었지만, 실제 사용보단 완성만 생각하다 보니   
빠르게 완성 시키기 위해 기능 동작만 되게끔 구현하고 그 뒤로 쳐다보지 않고   
기억에서 잊혀진 프로젝트가 되어버렸다.

다만, 실제 사용 유저를 얻기 위해선 아직 없는 서비스를 찾거나 기존 서비스보다 강점이 있어야 한다.   
서비스 기획부터 숨이 막힌다.   
그러면 가장 확실하게 실제 사용 유저를 얻을 수 있는 방법은 내가 사용 유저가 되는 거고   
나늘 위한 서비스를 만들면 된다.

나는 평소에 게임하는걸 좋아한다.   
요즘 엘든링을 주로 플레이하고 플레이를 할 때 마다   
나무위키에서 아이템 정보를 보고, 엘든링 인벤에서 아이템 지도를 본다.   
지도 정보가 없을 땐 유튜브를 검색하고, 진행 체크리스트를 엑셀에 정리한다.   
그렇게 진행하고 엔딩을 보면 다른 무기를 검색하고 새롭게 시작하고 이걸 반복한다.

이 모든걸 한곳에 정리하고 사용할 수 있게 하고   
내가 원하는 기능을 추가하고, 기존에 아쉬웠던 기능을 보완한다면   
정말 내가 만족하고 쓸 수 있는 서비스가 완성될 것이라고 생각한다.


## 사용된 기술
- Next.Js
  SSR 기반에서 개발을 경험해보고 싶어서 사용했다.   
  Next.js의 장점이라고 불리우는 SEO에서의 유리함, 초기 로딩 속도 빠름은   
  규모가 작고 개인적으로 사용할 서비스라서 체감하기 어렵고,   
  Next.js의 특징, 동작원리 등을 완벽하게 이해하고 사용하는건 아니지만   
  어떠한 기능을 구현할 때 React(CSR)에서 구현하는 방식과의 차이,   
  개발하면서 발생하는 이슈 및 버그 등을 경험하다 보면   
  그래도 어느정도 Next.js를 다룰 수 있는 수준까진 올라갈거라 생각한다.

- Typescript
  개발 시 data의 타입을 쉽게 확인할 수 있고, 실수나 버그를 어느정도 예방 가능

- MUI
  개인적으로 style 코드를 직접 작성하는 걸 선호하기에 MUI에서 제공하는 기본 style은 사용하지 않는 편이지만,   
  sx 속성을 통해 style을 정의하는게 가장 취향? 에 맞는 방식이고,   
  ButtonBase의 클릭 애니메이션, Modal, Popover 등 직접 구현하는 것 보다 빠르고 강력한 기능을 제공한다.


## 개발 순서
대략적으로 생각한 순서 (언제든지 바뀔 수 있음)

1. Map 기본 기능
  - 확대, 축소
  - 이동
  - 좌표 확인

2. Map에 아이템 표시
  - DB와 연동하여 개발할 생각이였지만 그렇게 되면 사용할 수 있을 때까지 너무 오래걸릴것으로 판단
  - 정보를 클라이언트에서 정의 하고 추후 Back-end 개발 시 업데이트

3. 체크리스트 개발

------------------------------------------------

4. Item DB 백엔드 개발

5. Item DB 프론트 개발

5. Map DB 백엔드 개발

6. Map 프론트 개발

7. Map 조작 기능 추가 개발

8. 1차 리팩토링 및 이슈 체크

9. 체크리스트 백엔드 개발

10. 체크리스트 프론트 업데이트

11. 유저, 관리자 기능 개발

12. 메모 or 게시판 기능 개발


## 발생한 이슈 및 개선 필요 사항
- Map 확대, 축소 로직 체크
- Map 이동 로직 체크
- useEffect deps warning 체크
- 소수점 계산 시 오차 발생
- 맵 이미지 최적화
- useWindowSize를 사용했을 때 생기는 이슈 (렌더링 순서 관련)
- 배포 시 발생한 generateStaticParams 관련 이슈 (동적 라우팅 페이지)
- next export 와 image loader


## 해결 정리