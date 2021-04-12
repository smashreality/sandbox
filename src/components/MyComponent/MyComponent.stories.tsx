import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import MyComponent, { MyComponentProps, MyComponentType } from '.';

export default {
  title: 'Components/My Component',
  component: MyComponent,
  args: {},
} as Meta;

const Template: Story<MyComponentProps> = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  myComponentType: MyComponentType.CNRL_HORIZON_OIL_SANDS,
  title: 'CNRL Horizon Oil Sands',
  subtitle: 'Lorem Ipsum Dolor Sit Amet',
  address1: '123 Address',
  address2: 'AB, Canada',
  recentSamples: 24,
  siteManager: 'a_adam@email.com',
  favValue1: 122,
  favValue2: 12,
  chartValue: 48,
  invoicesValue: 2,
};
