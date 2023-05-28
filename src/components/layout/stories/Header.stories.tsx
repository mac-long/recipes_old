import { StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Header from '../Header';

export default {
  component: Header,
  title: 'components/layout/Header'
};

export const Main: StoryObj = {
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText('Open main menu'));
  }
};
