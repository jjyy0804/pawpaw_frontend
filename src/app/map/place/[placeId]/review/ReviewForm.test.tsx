import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReviewForm from "./ReviewForm";

describe("ReviewForm", () => {
  it("제목과 내용이 없으면 버튼이 비활성화된다", () => {
    render(<ReviewForm onSubmit={jest.fn()} />);
    const button = screen.getByRole("button", { name: /작성 완료/ });
    expect(button).toBeDisabled();
  });

  it("추천 버튼을 클릭하면 상태가 토글된다", async () => {
    render(<ReviewForm onSubmit={jest.fn()} />);
    const button = screen.getByRole("button", { name: /추천안됨/ });
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(screen.getByRole("button", { name: /추천됨/ })).toBeInTheDocument();
  });

  it("제목과 내용을 입력하고 제출하면 onSubmit이 호출된다", async () => {
    const mockSubmit = jest.fn().mockResolvedValue(undefined);
    render(<ReviewForm onSubmit={mockSubmit} />);

    const titleInput = screen.getByPlaceholderText("제목");

    const contentTextarea = screen.getByPlaceholderText("내용을 입력하세요");
    const button = screen.getByRole("button", { name: /작성 완료/ });

    await userEvent.type(titleInput, "테스트 제목");
    await userEvent.type(contentTextarea, "테스트 내용");

    expect(button).toBeEnabled();

    await userEvent.click(button);

    expect(mockSubmit).toHaveBeenCalledWith({
      title: "테스트 제목",
      content: "테스트 내용",
      isLikeClicked: false, // 추천 버튼을 클릭하지 않은 상태
    });
  });
});
