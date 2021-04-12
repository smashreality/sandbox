import React from "react";
import { addDecorator } from "@storybook/react";
import Root from "../src/Root";

addDecorator((story) => <Root>{story()}</Root>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
