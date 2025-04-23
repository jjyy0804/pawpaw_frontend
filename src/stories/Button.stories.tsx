import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click Me",
    containerStyles: "bg-blue-500",
  },
};
