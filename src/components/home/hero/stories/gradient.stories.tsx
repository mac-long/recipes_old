import { Meta, StoryObj } from '@storybook/react';
import Gradient from '../gradient';

const meta: Meta = {
  title: 'components/home/hero/Gradient',
  component: Gradient
};

export default meta;
type Story = StoryObj;

export const Main: Story = {
  render: () => <Gradient />
};
