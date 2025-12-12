## 배포 주소 (Live Demo)
> **(https://yeonee333.github.io/teamproject/)를 클릭하여 바로 사용해보세요!**

---

## 주요 기능 (Key Features)

### 1. 홈 (Home) - 오늘의 추천 (Today's Pick)
- 매번 접속할 때마다 맛집 리스트 중 하나를 **랜덤으로 추천**합니다.
- 고민 없이 바로 메뉴를 결정할 수 있도록 도와줍니다.

### 2. 맛집 리스트 (List)
- **검색 기능:** 가게 이름이나 메뉴(예: '마라탕', '크로플')를 검색하여 원하는 식당을 빠르게 찾을 수 있습니다.
- **카테고리 필터:** 한식, 중식, 일식, 카페 등 원하는 종류만 모아볼 수 있습니다.
- **찜하기 (Favorites):** 하트 버튼을 누르면 '찜한 맛집'에 저장됩니다. (브라우저를 껐다 켜도 유지됨 - LocalStorage 활용)
- **길찾기 연동:** 버튼 클릭 시 네이버 지도로 연결되어 바로 길을 찾을 수 있습니다.

### 3. 지도 보기 (Map)
- **오픈소스 지도 (Leaflet.js):** 별도의 API 키 없이도 작동하는 경량화된 지도를 사용했습니다.
- **정확한 위치 마커:** 에리카 정문 및 쪽문(기숙사) 상권의 정확한 위치에 핀을 찍었습니다.
- **팝업 정보:** 핀을 클릭하면 가게 사진, 이름, 설명, 영업시간을 한눈에 볼 수 있습니다.

### 4. 다크 모드 (Dark Mode)
- 눈의 피로를 줄이기 위한 다크 모드를 지원합니다.
- 사용자의 설정은 저장되어 다음 접속 시에도 유지됩니다.

---

## 기술 스택 (Tech Stack)

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla ES6+)
* **Map Library:** [Leaflet.js](https://leafletjs.com/) (OpenStreetMap 기반)
* **Hosting:** GitHub Pages
* **Data Management:** `data.js` (JSON 형식의 객체 배열로 데이터 관리)

---

## 프로젝트 구조 (Directory Structure)

```text
erica-food-map/
├── index.html       # 메인 홈페이지 (랜덤 추천)
├── list.html        # 맛집 리스트 (검색, 필터, 찜하기)
├── map.html         # 지도 페이지 (Leaflet 연동)
├── style.css        # 전체 디자인 및 다크모드 스타일
├── data.js          # 맛집 데이터 저장소 (위치, 메뉴, 사진 정보)
├── README.md        # 프로젝트 설명 문서
└── images/          # 가게 및 메뉴 사진 폴더
    ├── mara.jpg
    ├── viet.jpg
    └── ...

## 팀원 소개
| 이름 | 담당 파트 | Github id |
| 홍서현 | 메인 페이지, 찜 기능, 오늘의 추천 등 전반적인 기능 구현 | [@id yeonee333] |
| 박서준 | 맛집 자료 조사 및 가게 위치 구현 | [@id seojun2626] |
| 김로희 | 홈페이지 UI, 지도 기능, 다크모드, 카테고리 구현 | [@id rohee104] |
