"use client"

import Footer from "@/components/Footer";
import HeartIcon from "../assets/icons/heart_icon.png";
import FireIcon from "../assets/icons/fire_icon.png";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { getPopularBoardList, getLatestBoardList } from '@/lib/api/board';
import PostCard, { PostCardProps } from '@/components/Main/PostCard';

import Carousel from "@/components/Main/Carousel";
import Carousel1 from "@/assets/images/carousel/carousel1.png";
import Carousel2 from "@/assets/images/carousel/carousel2.png";
import Carousel3 from "@/assets/images/carousel/carousel3.png";
import Link from "next/link";
import { PATHS } from "../constants/path";
import { useUserStore } from "@/stores/userStore";
import { getMyPage } from "@/lib/api/user";
import { useLocationUpdater } from "@/hooks/useLocationUpdater";

export interface BoardItem {
  id: number;
  korName?: string;
  category?: "일상" | "펫자랑" | "임시보호" | "고민상담";
  title: string;
  url?: string;
  imageUrl?: string;
}

const carouselData = [
  { id: 1, imgUrl: Carousel1, text: "반려동물과\n함께하는 일상" },
  { id: 2, imgUrl: Carousel2, text: "반려동물과\n어디든지 함께해요" },
  { id: 3, imgUrl: Carousel3, text: "포포에서 만나는\n산책메이트" },
];

export default function Home() {
  // const { updateLocation } = useLocationUpdater(); //현재 위치 가져와서 업데이트하기
  const [popularPosts, setPopularPosts] = useState<PostCardProps[]>([]);
  const [latestPosts, setLatestPosts] = useState<PostCardProps[]>([]);
  const userStore = useUserStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularResponse = await getPopularBoardList(6);
        const latestResponse = await getLatestBoardList(6);

        setPopularPosts(
          Array.isArray(popularResponse.data.body.data)
            ? popularResponse.data.body.data.map((item: BoardItem) => ({
              id: item.id,
              category: item.korName,
              title: item.title,
              imageUrl: item.url,
            }))
            : []
        );

        setLatestPosts(
          Array.isArray(latestResponse.data.body.data)
            ? latestResponse.data.body.data.map((item: BoardItem) => ({
              id: item.id,
              category: item.category, // korName 사용
              title: item.title,
              imageUrl: item.imageUrl,
            }))
            : []
        );

      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

/* 
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const myInfo = await getMyPage(); // 유저 정보 요청
        const { id, nickname, canWalkingMate, imageUrl } = myInfo;

        userStore.login({
          id,
          nickname,
          imageUrl,
          canWalkingMate,
        });
        if (canWalkingMate) {
          try {
            await updateLocation(); // 서버에 위치 업데이트
          } catch {
            console.error("위치 업데이트 중 오류가 발생했습니다.");
          }
        }
      } catch {

      }
    };

    fetchUserInfo();
  }, []);
*/ 
return (
    <div className="min-h-screen">

      {/* 메인 컨테이너 */}
      <main className="mt-12 flex flex-col items-center gap-8">

        <Carousel carouselData={carouselData} />

        {/* 컨테이너 - 인기글 섹션, 최신글 섹션 */}
        <div className="w-full max-w-mobile mx-auto px-6">
          {/* 인기글 섹션 */}
          <section className="w-full mb-7">
            <h2 className="text-lg font-bold mb-1 flex items-center">
              <Image
                src={HeartIcon}
                alt="heart"
                width={24}
                height={24}
                className="mx-1 mb-1"
              />
              인기글
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 place-items-center">
              {popularPosts.map((post) => (
                <Link href={PATHS.COMMUNITY_DETAIL(post.id)} key={post.id}>
                  <PostCard
                    id={post.id}
                    category={post.category}
                    title={post.title}
                    imageUrl={post.imageUrl}
                  />
                </Link>
              ))}
            </div>
          </section>

          {/* 최신글 섹션 */}
          <section className="w-full mb-20">
            <h2 className="text-lg font-bold mb-1 flex items-center">
              <Image
                src={FireIcon} // public 디렉토리 기준 경로
                alt="fire"
                width={24}
                height={24}
                className="mx-1 mb-1"
              />
              최신글
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 place-items-center">
              {latestPosts.map((post) => (
                <Link href={PATHS.COMMUNITY_DETAIL(post.id)} key={post.id}>
                  <PostCard
                    id={post.id}
                    category={post.category}
                    title={post.title}
                    imageUrl={post.imageUrl}
                  />
                </Link>

              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer 카테고리 독바 */}
      <Footer />
    </div>
  );
}