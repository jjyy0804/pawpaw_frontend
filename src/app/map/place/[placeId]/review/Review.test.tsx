import { render, screen } from "@testing-library/react";
import Review from "./Review";

const mockReview = {
  id: 1,
  nickname: "테스트유저",
  title: "정말 좋은 곳이에요!",
  content: "반려동물과 산책하기 딱 좋은 장소였습니다.",
  isLikeClicked: true,
  imageUrl: "/test/profile.jpg",
};

describe("Review", () => {
  it("닉네임, 제목, 내용이 렌더링된다", () => {
    render(<Review review={mockReview} />);
    expect(screen.getByText("테스트유저")).toBeInTheDocument();
    expect(screen.getByText("정말 좋은 곳이에요!")).toBeInTheDocument();
    expect(screen.getByText("반려동물과 산책하기 딱 좋은 장소였습니다.")).toBeInTheDocument();
  });

  it("프로필 이미지가 alt 텍스트로 렌더링된다", () => {
    render(<Review review={mockReview} />);
    const img = screen.getByAltText("프로필 이미지");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src");
  });

  it("추천 아이콘이 표시된다 (isLikeClicked=true)", () => {
    render(<Review review={mockReview} />);
    expect(screen.getByLabelText("추천됨")).toBeInTheDocument();
  });

  it("추천 아이콘이 표시되지 않는다 (isLikeClicked=false)", () => {
    const noLikeReview = { ...mockReview, isLikeClicked: false };
    render(<Review review={noLikeReview} />);
    expect(screen.queryByLabelText("추천됨")).not.toBeInTheDocument();
  });
});
