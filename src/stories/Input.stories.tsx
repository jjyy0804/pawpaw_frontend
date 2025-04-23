import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    name: "email",
    placeholder: "이메일을 입력하세요",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "이메일",
  },
};

export const WithError: Story = {
  args: {
    label: "이메일",
    errorMessage: "이메일 형식이 올바르지 않습니다.",
  },
};

export const Disabled: Story = {
  args: {
    label: "이메일",
    disabled: true,
  },
};

