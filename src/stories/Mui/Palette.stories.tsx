import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Swatch from './Swatch';
import { Box, Card, makeStyles, Typography } from '@material-ui/core';

import { createTheme } from 'src/theme';
import { THEMES } from 'src/constants';

const useStyles = makeStyles({
  row: {
    width: '100%'
  },
  swatch: {
    marginLeft: 10
  }
});

const theme = createTheme({
  theme: THEMES.LIGHT
});

export default {
  title: 'Mui Theme/Palette',
  component: Swatch
} as Meta;

const Template: Story = (args) => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" className={classes.row}>
        <Box>
          <Typography variant="caption" component="p" align="center">
            Primary Color
          </Typography>
          <Swatch color={theme.palette.primary.main} title="P" />
        </Box>

        <Box ml={2}>
          <Typography variant="caption" component="p" align="center">
            Secondary Color
          </Typography>
          <Swatch color={theme.palette.secondary.main} title="S" />
        </Box>
      </Box>

      <Box display="flex" mt={2} className={classes.row}>
        <Box>
          <Typography variant="caption" component="p" align="center">
            Dark Neutral 1
          </Typography>
          <Swatch color={theme.palette.colors.darkGrey} />
        </Box>

        <Box ml={2}>
          <Typography variant="caption" component="p" align="center">
            Mid Neutral 2
          </Typography>
          <Swatch color={theme.palette.colors.midGrey} />
        </Box>

        <Box ml={2}>
          <Typography variant="caption" component="p" align="center">
            Light Neutral 3
          </Typography>
          <Swatch color={theme.palette.colors.lightGrey} />
        </Box>
      </Box>

      <Box display="flex" mt={2}>
        <Card style={{ width: 100, height: 100 }} />
      </Box>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
