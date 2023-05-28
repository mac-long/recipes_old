import { StoryObj } from '@storybook/react';
import Gradient from '../Gradient';

export default { title: 'components/home/hero/Gradient', component: Gradient };

type Story = StoryObj;

export const Main: Story = {
  render: () => <Gradient />
};
