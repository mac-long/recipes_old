import { expect } from "@storybook/jest";
import { StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import FormComponent from "../Form";
import { SetOperationNode } from "kysely";
import { newEmail } from "@/app/lib/kysely";

export default {
	component: FormComponent,
	title: "Components/Layout/Footer/Newsletter",
};

export const Form: StoryObj = {
	play: async ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		const newEmail = "mac@3sidedcube.com";

		await step("Enter existing user data", async () => {
			userEvent.type(canvas.getByTestId("name"), "Mac");
			userEvent.type(canvas.getByTestId("email"), "maclong9@icloud.com");
			userEvent.click(canvas.getByText("Subscribe"));
			expect(canvas.getByText("Already Subscribed"));
		});

		await step("Enter new user data", async () => {
			userEvent.type(canvas.getByTestId("name"), "Mac");
			userEvent.type(canvas.getByTestId("email"), newEmail);
			userEvent.click(canvas.getByText("Subscribe"));
			setTimeout(async () => {
				expect(canvas.getByText("Success"));
			}, 2000);
		});
	},
};
