import { StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import FeaturesComponent from "../Features";

export default {
	component: FeaturesComponent,
	title: "Components/Home",
};

export const Features: StoryObj = {
	play: async ({ canvasElement }: any) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByText("Open main menu"));
	},
};
