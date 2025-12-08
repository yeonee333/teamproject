// data.js (좌표 수정 완료 버전)
const restaurantList = [
    // --- 정문 앞 (메인 상권) ---
    {
        name: "인더비엣",
        category: "베트남식",
        address: "경기도 안산시 상록구 성안길 78-3",
        desc: "진한 고기 육수의 쌀국수",
        menu: "쌀국수, 월남쌈",
        img: "images/viet.jpg",
        hours: "11:00 ~ 21:00",
        lat: 37.3004, 
        lng: 126.8393
    },
    {
        name: "에비수",
        category: "일식",
        address: "경기도 안산시 상록구 사동 1568-6",
        desc: "깔끔한 일본 가정식 덮밥",
        menu: "덮밥, 우동",
        img: "images/ebisu.jpg",
        hours: "10:30 ~ 21:00",
        lat: 37.3008,
        lng: 126.8390
    },
    {
        name: "동양솥밥",
        category: "한식",
        address: "경기도 안산시 상록구 사동 1569-2",
        desc: "갓 지은 따끈한 솥밥",
        menu: "스테이크 솥밥",
        img: "images/rice.jpg",
        hours: "10:00 ~ 21:00",
        lat: 37.3009,
        lng: 126.8391
    },
    {
        name: "파익스피크소다",
        category: "카페",
        address: "경기도 안산시 상록구 한양대학로 48",
        desc: "힙한 분위기의 소다바",
        menu: "소다 음료, 커피",
        img: "images/soda.jpg",
        hours: "12:00 ~ 22:00",
        lat: 37.3002,
        lng: 126.8373
    },
    {
        name: "찌개찌개",
        category: "한식",
        address: "경기도 안산시 상록구 사동 1569-4",
        desc: "가성비 최고의 김치찌개",
        menu: "김치찌개, 된장찌개",
        img: "images/stew.jpg",
        hours: "09:00 ~ 20:30",
        lat: 37.3009,
        lng: 126.8392
    },
    {
        name: "카바레식당",
        category: "일식",
        address: "경기도 안산시 상록구 한양대학로 66",
        desc: "일본 교토식 카레",
        menu: "카레, 가라아게",
        img: "images/curry.jpg",
        hours: "11:00 ~ 21:00",
        lat: 37.3004,
        lng: 126.8378
    },
    {
        name: "현가네 병천순대",
        category: "한식",
        address: "경기도 안산시 상록구 사동 1561-2",
        desc: "속이 꽉 찬 순대국밥",
        menu: "순대국밥",
        img: "images/sundae.jpg",
        hours: "08:00 ~ 22:00",
        lat: 37.3012,
        lng: 126.8395
    },
    {
        name: "북경반점",
        category: "중식",
        address: "경기도 안산시 상록구 학사4길 1",
        desc: "불향 가득한 쟁반짜장",
        menu: "짜장면, 짬뽕",
        img: "images/china.jpg",
        hours: "10:00 ~ 21:00",
        lat: 37.3015,
        lng: 126.8400
    },

    // --- 쪽문 앞 (기숙사/셔틀콕 근처) ---
    {
        name: "홍성 마라미방",
        category: "중식",
        address: "경기도 안산시 상록구 사동 1149-21",
        desc: "내 맘대로 골라 담는 마라탕",
        menu: "마라탕, 꿔바로우",
        img: "images/mara.jpg",
        hours: "11:00 ~ 22:00",
        lat: 37.2965, 
        lng: 126.8425
    },
    {
        name: "레이지그라운드",
        category: "카페",
        address: "경기도 안산시 상록구 사동 1149",
        desc: "쉬어가기 좋은 감성 카페",
        menu: "크로플, 아메리카노",
        img: "images/lazy.jpg",
        hours: "11:00 ~ 22:00",
        lat: 37.2966,
        lng: 126.8424
    }
];