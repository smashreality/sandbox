import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import StationIdentifier, {
  StationIdentifierProps,
  StationIdentifierType
} from '.';

export default {
  title: 'Components/Example Station Identifier',
  component: StationIdentifier,
  args: {}
} as Meta;

const Template: Story<StationIdentifierProps> = (args) => (
  <StationIdentifier {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithStationIdentifierType = Template.bind({});
WithStationIdentifierType.args = {
  stationIdentifierType: StationIdentifierType.ENUMERATION,
  location: 'Station ABC - Zone 123'
};

export const WithOverrides = Template.bind({});
WithOverrides.args = {
  station: 'Some Station Name',
  location: 'Station ABC - Zone 123',
  color: '#aaa'
};
