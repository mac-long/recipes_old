import { StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import HeaderComponent from '../Header';

export default {
  component: HeaderComponent,
  title: 'components/layout'
};

export const Header: StoryObj = {
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText('Open main menu'));
  }
};
