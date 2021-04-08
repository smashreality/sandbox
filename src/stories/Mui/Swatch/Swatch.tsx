import React from 'react';
import type { FC } from 'react';
import { Box, Card, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    width: 100,
    borderRadius: '3px 3px'
  }
});

export interface SwatchProps {
  /**
   * color
   */
  color?: string;
  /**
   * title
   */
  title?: string;
  /**
   * className
   */
  className?: string;

  [key: string]: any;
}

/**
 * Primary UI component for user interaction
 */
const Swatch: FC<SwatchProps> = ({ color, title, className, ...rest }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box
        style={{ height: 100, backgroundColor: color }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {title && (
          <Typography
            style={{
              color: '#fff',
              fontSize: 48,
              fontWeight: 300,
              textTransform: 'uppercase'
            }}
          >
            {title}
          </Typography>
        )}
      </Box>
      <Box py={0.75}>
        <Typography align="center" style={{ textTransform: 'uppercase' }}>
          {color}
        </Typography>
      </Box>
    </Card>
  );
};

export default Swatch;
