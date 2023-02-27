import { Logo } from './Logo';

export default {
  title: 'Lecture/Logo',
  component: Logo,
  tags: ['autodocs'],
  args: Logo.defaultProps,
  argTypes: {
    // https://storybook.js.org/docs/react/essentials/controls#disable-controls-for-specific-properties
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Base = {
  args: {},
};

Base.storyName = '기본 로고';

export const Rotation90 = {
  args: {
    rotation: 90,
  },
};
