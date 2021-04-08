import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import MyComponent, { MyComponentProps } from '.';

export default {
  title: 'Components/My Component',
  component: MyComponent,
  args: {}
} as Meta;

const Template: Story<MyComponentProps> = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
