import { StoryObj } from "@storybook/react";
import GradientComponent from "../Gradient";

export default {
	title: "Components/Home/Hero",
	component: GradientComponent,
};

export const Gradient: StoryObj = {
	render: () => <GradientComponent />,
};
