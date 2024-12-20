import { PATHS } from "@/app/constants/path";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-l border-r border-stroke_gray-600 px-6 py-4 max-w-mobile w-full mx-auto h-[50px]">
      {/* 로고 영역 */}
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center">
          <Link href={PATHS.MAIN} className="text-lg font-semibold text-gray-800">
            LOGO
          </Link>
        </div>

        {/* 로그인 및 회원가입 버튼 */}
        <div className="flex items-center gap-4">
          <Link href={PATHS.LOGIN} className="text-sm text-gray-600 hover:text-gray-800 transition">
            로그인
          </Link>
          <Link href={PATHS.JOIN} className="text-sm text-gray-600 hover:text-gray-800 transition">
            회원가입
          </Link>
        </div>
      </div>
    </nav>
  );
}