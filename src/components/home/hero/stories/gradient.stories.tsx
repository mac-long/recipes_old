import { StoryObj } from '@storybook/react';
import GradientComponent from '../Gradient';

export default {
  title: 'components/home/hero',
  component: GradientComponent
};

export const Gradient: StoryObj = {
  render: () => <GradientComponent />
};
