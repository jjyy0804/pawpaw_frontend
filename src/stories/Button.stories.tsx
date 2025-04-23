import Button from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked!" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "기본 버튼",
    containerStyles: "w-24 h-12",
  },
};

export const Disabled: Story = {
  args: {
    children: "비활성화됨",
    disabled: true,
    containerStyles: "w-24 h-12",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    containerStyles: "w-24 h-12 bg-sky-100",
  },
};
