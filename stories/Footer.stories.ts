import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import Footer from '../components/footer';

const meta = {
  title: 'tass/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    copyright: '@ 2024 株式会社STR'
  },
};
