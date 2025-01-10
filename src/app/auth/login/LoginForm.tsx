"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { PATHS } from "@/constants/path";
import { useLocationUpdater } from "@/hooks/useLocationUpdater";
import { loginAPI } from "@/lib/api/auth";
import { getMyPage } from "@/lib/api/user";
import { useUserStore } from "@/stores/userStore";
import { errorToast, successToast } from "@/utils/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import KakaoLogin from "./KakaoLogin";

type LoginInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginInputs>({
    mode: "onChange",
  });

  const router = useRouter();
  const userStore = useUserStore();
  const { updateLocation } = useLocationUpdater();


  {/**일반 로그인 */ }
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const { email, password } = data;
    const payload = { email, password };

    try {
      const response = await loginAPI(payload);
      console.log('response', response);
      if (response.status === 200) {
        const { id, nickname, canWalkingMate, imageUrl } = await getMyPage();
        console.log('myInfo => ');
        console.log(id);
        console.log(nickname);
        console.log(canWalkingMate);
        console.log(imageUrl);
        console.log('myInfo ========= ');
        userStore.login({ id, nickname, canWalkingMate, imageUrl });

        if (canWalkingMate) {
          try {
            await updateLocation(); // 서버에 위치 업데이트
          } catch {
            console.error("위치 업데이트 중 오류가 발생했습니다.");
          }
        }

        router.push(PATHS.MAIN);
        successToast("로그인 성공했습니다.");
      }
    } catch {
      errorToast("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        type="email"
        placeholder="이메일"
        className="w-full h-14"
        {...register("email", {
          required: "이메일은 필수 입력 항목입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "유효한 이메일 주소를 입력하세요",
          },
        })}
        errorMessage={errors.email?.message}
      />

      <Input
        type="password"
        placeholder="비밀번호"
        className="w-full h-14"
        {...register("password", {
          required: "비밀번호는 필수 입력 항목입니다.",
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>-])[A-Za-z\d!@#$%^&*(),.?":{}|<>-]{8,}$/,
            message: "대/소문자, 숫자, 특수문자 포함 최소 8자리 이상입니다.",
          },
        })}
        errorMessage={errors.password?.message}
      />
      {/**일반 로그인 */}
      <Button
        disabled={!isValid || isSubmitting}
        isLoading={isSubmitting}
        btnType="submit"
        containerStyles="w-full h-14"
      >
        로그인
      </Button>
      {/**회원가입/비번찾기 */}
      <div className="flex justify-center items-center gap-10 mt-10 pb-5 border-b border-medium_gray">
        <Link href={PATHS.JOIN} className="text-gray-700 hover:text-gray-900">
          회원가입
        </Link>
        <Link
          href={PATHS.FIND_PASSWORD}
          className="text-gray-700 hover:text-gray-900"
        >
          비밀번호 찾기
        </Link>
      </div>
      {/**카카오 로그인 */}
      <KakaoLogin />
      {/**로그인 없이 둘러보기 */}
      <div className="mt-12 font-xs flex text-strong_gray text-[14px] items-center gap-1 justify-center">
        <IoSearchOutline />
        <Link href={PATHS.MAIN}>로그인 없이 둘러보기</Link>
      </div>
    </form>
  );
}

