import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import Form from '../Form';

export default {
  component: Form,
  title: 'components/layout/Header'
};

export const Main: StoryObj = {
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);

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
  }
};
