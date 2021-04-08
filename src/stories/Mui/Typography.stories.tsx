import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Divider, makeStyles, Typography } from '@material-ui/core';

import { createTheme } from 'src/theme';
import { THEMES } from 'src/constants';

const theme = createTheme({
  theme: THEMES.LIGHT
});

export default {
  title: 'Mui Theme/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500
  },
  divider: {
    margin: '10px 0'
  }
});

const Template: Story = (args) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body2">
        Font Family: {theme.typography.fontFamily} <br />
        Font Size: {theme.typography.fontSize} <br />
      </Typography>
      <Divider className={classes.divider} />

      {/* {['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtile'].map((x) => (
        <Typography variant={x as any} gutterBottom>
          {x}. font-size: {theme.typography[x]?.fontSize}px
        </Typography>
      ))} */}

      <Typography variant="h1" gutterBottom>
        h1. Heading - font-size: {theme.typography.h1.fontSize}px
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading - font-size: {theme.typography.h2.fontSize}px
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading - font-size: {theme.typography.h3.fontSize}px
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading - font-size: {theme.typography.h4.fontSize}px
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading - font-size: {theme.typography.h5.fontSize}px
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading - font-size: {theme.typography.h6.fontSize}px
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
