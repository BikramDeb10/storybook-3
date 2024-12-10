import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  // component information
  component: Button,
  title: "UI/Button",
};
export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: "primary",
    text: "Primary",
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: "secondary",
    text: "Secondary",
  },
};
export const Third: StoryObj<typeof Button> = {
  args: {
    variant: "third",
    text: "Third",
  },
};
export const Fourth: StoryObj<typeof Button> = {
  args: {
    variant: "fourth",
    text: "Fourth",
  },
};
export const Alert: StoryObj<typeof Button> = {
  args: {
    variant: "alert",
    text: "Alert",
  },
};
export const Active: StoryObj<typeof Button> = {
  args: {
    variant: "active",
    text: "Active",
  },
};

export const Another: StoryObj = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid blue",
        width: "max-content",
        borderRadius: "15px",
        gap: "15px",
        padding: "10px",
        background: "grey",
      }}
    >
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="third" />
      <Button variant="fourth" />
      <Button variant="alert" />
      <Button variant="active" />
    </div>
  ),
};
