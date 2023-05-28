import { expect } from "@storybook/jest";
import { StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import FormComponent from "../Form";

export default {
	component: FormComponent,
	title: "components/layout/footer/newsletter",
};

export const Form: StoryObj = {
	play: async ({ canvasElement }: any) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText("Subscribe"));

		// TODO: Add Test.
		// input name and email that already exist in db to inputs.
		// press subscribe.
		// expect 'Already Subscribed'
		// wait 4s.
		// expect 'Subscribe'.
		// input new name and email.
		// press subscribe.
		// expect 'Success'.
		// waits 4s.
		// expect 'Subscribe'.
		// clean DB of test recipient.
	},
};
