import React from 'react';
import type { FC } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

export interface MyComponentProps {
  [key: string]: any;
}

const MyComponent: FC<MyComponentProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return <>My Component Code Here</>;
};

MyComponent.defaultProps = {};

export default MyComponent;
