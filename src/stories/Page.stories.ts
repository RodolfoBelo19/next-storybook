import type { Meta, StoryObj } from '@storybook/react';
import "../app/globals.css";

import { HomePage } from './Page';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Index: Story = {};