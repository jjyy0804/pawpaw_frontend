// src/mocks/mockPlaces.ts
import { PlaceProps } from "@/app/map/MapClient";

export const mockPlaces: PlaceProps[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Mock 장소 ${i + 1}`,
  category: [
    "동물약국",
    "미술관",
    "카페",
    "동물병원",
    "반려동물용품",
    "미용",
    "문예회관",
    "펜션",
    "식당",
    "여행지",
    "위탁관리",
    "박물관",
    "호텔",
  ][Math.floor(Math.random() * 13)],
  latitude: 37.5665 + Math.random() * 0.02, // 서울 근처 위도
  longitude: 126.978 + Math.random() * 0.02, // 서울 근처 경도
}));
