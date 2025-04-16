import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";


// onSubmit은 실제로 API를 부르지 않도록 mock 함수로 대체
const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// 이미지 포함하는 카카오로그인 컴포넌트 mock으로 대체
jest.mock("./KakaoLogin", () => () => <div>Mocked KakaoLogin</div>);

describe("LoginForm", () => {
  it("초기에는 버튼이 비활성화되어 있다", () => {
    render(<LoginForm />);
    const button = screen.getByRole("button", { name: /로그인/i });
    expect(button).toBeDisabled();
  });

  it("잘못된 이메일 형식 입력 시 오류 메시지가 보인다", async () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText("이메일");

    await userEvent.type(emailInput, "invalidemail");
    await userEvent.tab(); // blur

    expect(await screen.findByText(/유효한 이메일 주소를 입력하세요/)).toBeInTheDocument();
  });

  it("비밀번호가 조건에 맞지 않으면 오류 메시지가 보인다", async () => {
    render(<LoginForm />);
    const passwordInput = screen.getByPlaceholderText("비밀번호");

    await userEvent.type(passwordInput, "1234");
    await userEvent.tab();

    expect(await screen.findByText(/대\/소문자, 숫자, 특수문자 포함/)).toBeInTheDocument();
  });

  it("이메일과 비밀번호가 올바르면 버튼이 활성화된다", async () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText("이메일");
    const passwordInput = screen.getByPlaceholderText("비밀번호");

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(
      passwordInput,
      "Abcd1234!"
    );

    const button = screen.getByRole("button", { name: /로그인/i });
    expect(button).toBeEnabled();
  });
});
